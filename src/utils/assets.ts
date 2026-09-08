const images = import.meta.glob<string>(
  '/src/assets/images/**',
  { eager: true, import: 'default' }
)

export const getImg = (name: string): string => {
  return images[`/src/assets/images/${name}`] || ''
}

const audios = import.meta.glob<string>(
  '/src/assets/audio/**',
  { eager: true, import: 'default' }
)

export const getAudio = (name: string): string => {
  return audios[`/src/assets/audio/${name}`] || ''
}
