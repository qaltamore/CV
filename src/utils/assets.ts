export const getImg = (name: string): string => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}
