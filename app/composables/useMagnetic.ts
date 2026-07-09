import gsap from 'gsap'

export function useMagnetic(strength = 0.35) {
  const el = ref<HTMLElement | null>(null)

  function onMove(e: MouseEvent) {
    if (!el.value) return
    const rect = el.value.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    gsap.to(el.value, {
      x: relX * strength,
      y: relY * strength,
      duration: 0.4,
      ease: 'power3.out',
    })
  }

  function onLeave() {
    if (!el.value) return
    gsap.to(el.value, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
  }

  onMounted(() => {
    const node = el.value
    if (!node || window.matchMedia('(pointer: coarse)').matches) return
    node.addEventListener('mousemove', onMove)
    node.addEventListener('mouseleave', onLeave)
  })

  onUnmounted(() => {
    const node = el.value
    if (!node) return
    node.removeEventListener('mousemove', onMove)
    node.removeEventListener('mouseleave', onLeave)
  })

  return el
}
