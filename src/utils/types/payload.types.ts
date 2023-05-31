export type MethodTypes = 'post' | 'get' | 'put' | 'delete' | 'patch'
/* eslint-disable @typescript-eslint/ban-types */
export interface AxiosPayload {
  action: string
  method: MethodTypes
  url: string
  data?: Object
  responseType?: string
}
