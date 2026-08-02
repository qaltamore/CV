// Wrap letters with spans and active class so we can animate their apparition.
export function wrapLetters(text: string, startIndex = 0): { html: string, nextIndex: number } {
  let currentIndex: number = startIndex
  const html: string = text
    .split('')
    .map(letter => {
      if (letter === ' ') return ' '
      else {
        currentIndex++
        return `<span class="active" style="--i: ${currentIndex}">${letter}</span>`
      }
    })
    .join('')
  return { html, nextIndex: currentIndex }
}
