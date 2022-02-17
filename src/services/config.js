// 接口地址
const devBaseURL = 'https://lianghj.top:8888/api/private/v1/'
const proBaseURL = 'https://lianghj.top:8888/api/private/v1/'
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL
// 超时时间
export const TIMEOUT = 5000
