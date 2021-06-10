import { ComponentMetadata, componentsTags } from '@/components/component'
import { videoUrls } from '@/components/video/video-urls'

const entry = async () => {
  const { select } = await import('@/core/spin-query')
  const likeButton = await select('.ops span.like') as HTMLElement
  if (!likeButton) {
    return
  }
  likeButton.style.userSelect = 'none'
  const mountEvent = (name: string, args: EventInit) => {
    const event = new CustomEvent(name, args)
    likeButton.dispatchEvent(event)
  }

  const clickInterval = 200
  let click = true
  likeButton.addEventListener('touchstart', e => {
    e.preventDefault()
    click = true
    setTimeout(() => (click = false), clickInterval)
    mountEvent('mousedown', e)
  })
  likeButton.addEventListener('touchend', e => {
    e.preventDefault()
    mountEvent('mouseup', e)
    if (click) {
      mountEvent('click', e)
    }
  })
}
export const component: ComponentMetadata = {
  name: 'touchComboLike',
  displayName: '三连触摸支持',
  tags: [
    componentsTags.touch,
  ],
  enabledByDefault: false,
  entry,
  description: {
    'zh-CN': '为视频页面中的三连操作(长按点赞)启用触摸支持.',
  },
  urlInclude: videoUrls,
}
