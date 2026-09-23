const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
  }),
  { threshold: 0.15 }
)

export const reveal = {
  mounted(el) { el.classList.add('rv'); io.observe(el) },
  unmounted(el) { io.unobserve(el) },
}

export const tilt = {
  mounted(el) {
    el._move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`
    }
    el._leave = () => (el.style.transform = '')
    el.addEventListener('pointermove', el._move)
    el.addEventListener('pointerleave', el._leave)
  },
  unmounted(el) {
    el.removeEventListener('pointermove', el._move)
    el.removeEventListener('pointerleave', el._leave)
  },
}