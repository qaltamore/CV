export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $getImg: (path: string) => string
  }
}
