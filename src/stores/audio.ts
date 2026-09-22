import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAudio } from '@/utils/assets.ts'

type AudioTrack = 'opening-door' | 'tavern-chaos' | 'lively-tavern' | 'tavern-tales' | 'witcher-dance'

export const useAudioStore = defineStore('audio', () => {
  let playingAudio: HTMLAudioElement = new Audio(getAudio('opening-door.mp3'))
  const isPlaying = ref(false)

  const changeTrack = (audioName: AudioTrack, loop: boolean = true): void => {
    stopAudio()
    playingAudio = new Audio(getAudio(`${audioName}.mp3`))
    playAudio(loop)
  }

  const playAudio = (loop: boolean = true): void => {
    playingAudio.volume = 0.5
    playingAudio.play().catch((err) => {
      console.warn('Audio didn\'t play : ', err)
    })
    playingAudio.loop = loop
    isPlaying.value = true
  }

  const stopAudio = (): void => {
    playingAudio.pause()
    playingAudio.currentTime = 0
    isPlaying.value = false
  }

  const toggleAudio = (): void => {
    if (isPlaying.value) stopAudio()
    else playAudio()
  }

  const getState = (): boolean => {
    return isPlaying.value
  }

  return { changeTrack, playAudio, stopAudio, toggleAudio, getState }
})
