import { type Env } from '@/utils/detectEnv.ts'

export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $getImg: (path: string) => string
    $env: Env
  }
}
