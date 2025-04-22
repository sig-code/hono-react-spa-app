import { useState, useEffect, useCallback } from 'react';
import { api, ApiError } from '../api/client';
import type { TodoListResponse, Todo } from '@src/types';

/**
 * 全TODOを取得するためのフック
 */
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchTodos = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.getTodos();
      setTodos(response.todos);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('不明なエラーが発生しました'));
      console.error('TODOの取得に失敗しました:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    todos,
    isLoading,
    error,
    refetch: fetchTodos
  };
}

/**
 * 新しいTODOを作成するためのフック
 */
export function useCreateTodo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createTodo = useCallback(async (text: string, onSuccess?: () => void) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.createTodo(text);
      if (onSuccess) onSuccess();
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('不明なエラーが発生しました'));
      console.error('TODOの作成に失敗しました:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    createTodo,
    isLoading,
    error
  };
}

/**
 * TODOの完了状態を切り替えるためのフック
 */
export function useToggleTodo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const toggleTodo = useCallback(async (id: string, onSuccess?: () => void) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.toggleTodo(id);
      if (onSuccess) onSuccess();
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('不明なエラーが発生しました'));
      console.error('TODOの更新に失敗しました:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    toggleTodo,
    isLoading,
    error
  };
}

/**
 * TODOを削除するためのフック
 */
export function useDeleteTodo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteTodo = useCallback(async (id: string, onSuccess?: () => void) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.deleteTodo(id);
      if (onSuccess) onSuccess();
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('不明なエラーが発生しました'));
      console.error('TODOの削除に失敗しました:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    deleteTodo,
    isLoading,
    error
  };
}
