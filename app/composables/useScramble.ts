const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#$%'

export function useScramble(text: string, duration = 800) {
  const display = ref(text)

  function play(delay = 0) {
    if (import.meta.server) return
    setTimeout(() => {
      const totalFrames = Math.round(duration / 16)
      const len = text.length
      const revealAt = Array.from({ length: len }, (_, i) => Math.round((i / len) * totalFrames * 0.7))
      let frame = 0

      const id = setInterval(() => {
        frame++
        display.value = text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            return frame >= revealAt[i] ? ch : CHARSET[Math.floor(Math.random() * CHARSET.length)]
          })
          .join('')
        if (frame >= totalFrames) clearInterval(id)
      }, 16)
    }, delay)
  }

  return { display, play }
}
