import { MantineProvider } from '@repo/ui'
import { App } from '@src/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// グローバルCSSをインポート
import '@src/global.css'

// Mantineのスタイルは@repo/uiから自動的にインポートされます

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
)
