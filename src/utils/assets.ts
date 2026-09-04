const images = import.meta.glob<string>(
  '/src/assets/images/**',
  { eager: true, import: 'default' }
)

export const getImg = (name: string): string => {
  return images[`/src/assets/images/${name}`] || ''
}
