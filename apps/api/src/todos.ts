import { OpenAPIHono, createRoute } from '@hono/zod-openapi'
import type { Todo } from '@src/schemas/todo.js'
import {
  createTodoSchema,
  errorResponseSchema,
  todoIdParamSchema,
  todoListResponseSchema,
} from '@src/schemas/todo.js'
import type { Context } from 'hono'

// インメモリのTODOデータストア
let todos: Todo[] = []

// エラーハンドリング用のミドルウェア
const errorHandler = async (c: Context, next: () => Promise<void>) => {
  try {
    await next()
  } catch (e: unknown) {
    if (e instanceof Error) {
      return c.json({ error: e.message }, 400)
    }
    return c.json({ error: '不明なエラーが発生したよ！' }, 500)
  }
}

// OpenAPIルート定義
// 全TODOの取得
const getAllTodosRoute = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: todoListResponseSchema,
        },
      },
      description: '全てのTODOを取得',
    },
  },
  tags: ['todos'],
})

// 新規TODOの作成
const createTodoRoute = createRoute({
  method: 'post',
  path: '/',
  request: {
    body: {
      content: {
        'application/json': {
          schema: createTodoSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      content: {
        'application/json': {
          schema: todoListResponseSchema,
        },
      },
      description: '新規TODOを作成',
    },
    400: {
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
      description: 'バリデーションエラー',
    },
  },
  tags: ['todos'],
})

// TODOの更新（完了状態の切り替え）
const updateTodoRoute = createRoute({
  method: 'put',
  path: '/{id}',
  request: {
    params: todoIdParamSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: todoListResponseSchema,
        },
      },
      description: 'TODOを更新',
    },
    404: {
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
      description: '指定されたTODOが見つからない',
    },
  },
  tags: ['todos'],
})

// TODOの削除
const deleteTodoRoute = createRoute({
  method: 'delete',
  path: '/{id}',
  request: {
    params: todoIdParamSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: todoListResponseSchema,
        },
      },
      description: 'TODOを削除',
    },
    404: {
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
      description: '指定されたTODOが見つからない',
    },
  },
  tags: ['todos'],
})

// OpenAPIHonoルーターの作成
const router = new OpenAPIHono()

// 全TODOの取得
router.openapi(getAllTodosRoute, (c) => {
  return c.json({ todos }, 200)
})

// 新規TODOの作成
router.openapi(createTodoRoute, (c) => {
  const { text } = c.req.valid('json')
  const newTodo: Todo = { id: Date.now().toString(), text, completed: false }
  todos.push(newTodo)
  return c.json({ todos }, 201)
})

// TODOの更新（完了状態の切り替え）
router.openapi(updateTodoRoute, (c) => {
  const { id } = c.req.valid('param')
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex === -1) {
    return c.json({ error: '指定されたTODOが見つからないよ！' }, 404)
  }

  todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))

  return c.json({ todos }, 200)
})

// TODOの削除
router.openapi(deleteTodoRoute, (c) => {
  const { id } = c.req.valid('param')
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex === -1) {
    return c.json({ error: '指定されたTODOが見つからないよ！' }, 404)
  }

  todos = todos.filter((todo) => todo.id !== id)
  return c.json({ todos }, 200)
})

// エラーハンドリングミドルウェアを適用
export const todosRouter = router.use(errorHandler)

// RPC用の型をエクスポート
export type TodosRouterType = typeof todosRouter
