import type { Directive } from 'vue'
import { useLoaderStore } from '@/stores/loader'

export const vImageTracker: Directive<HTMLImageElement> = {
  mounted(el: HTMLImageElement): void {
    const loaderStore = useLoaderStore()

    // Increments the total images number
    loaderStore.implementsImage()

    // If the image is in the nav cache
    if (el.complete && el.naturalWidth !== 0) {
      handleLoad()
      return
    }

    // If it needs to be downloaded
    el.addEventListener('load', handleLoad, { once: true })
    el.addEventListener('error', handleLoad, { once: true }) // avoids the Loader to block if we get an error
  }
}

function handleLoad(): void {
  useLoaderStore().loadedImage()
}
