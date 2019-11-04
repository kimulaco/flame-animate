import flameAnimate from '../../src/flame-animate'

const setAnimate = () => {
  const btn: HTMLElement | null = document.getElementById('js-button')
  const box: HTMLElement | null = document.getElementById('js-box')

  if (!btn || !box) return

  const startWidth = 10
  const startHeight = 10
  const AnimatedWidth = 300
  const AnimatedHeight = 300
  const diffWidth = AnimatedWidth - startWidth
  const diffHeight = AnimatedHeight - startHeight

  btn.addEventListener('click', async () => {
    await flameAnimate.start(500, (progress: number) => {
      box.style.width = `${diffWidth * progress}px`
      box.style.height = `${diffHeight * progress}px`
    })
    console.log('Animated')
  })
}

setAnimate()
