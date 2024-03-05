/* eslint-disable global-require, @typescript-eslint/no-var-requires */

import Env from 'config/Env'

export const initMockServiceWorker = async () => {
  if (Env.isMswEnabled()) {
    const { worker } = await import('./browser')
    worker.start()
  }
}
