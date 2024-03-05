/**
 * Environment variables
 */
export const Env = {
  NODE_ENV: process.env.NODE_ENV,
  API_BASE_URL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
  MSW_ENABLED: import.meta.env.VITE_REACT_APP_MSW_ENABLED,

  isProd() {
    return this.NODE_ENV === 'production'
  },
  isDev() {
    return this.NODE_ENV === 'development'
  },
  isTest() {
    return this.NODE_ENV === 'test'
  },
  isMswEnabled() {
    return this.MSW_ENABLED === 'true'
  },
}

export default Env