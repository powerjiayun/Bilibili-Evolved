import { ComponentMetadata, componentsTags } from '@/components/component'
import { styledComponentEntry } from '@/components/styled-component'
import { playerUrls } from '../player-urls'

export const SkipChargeListDisabledClass = 'skip-charge-list-disable'
const entry = styledComponentEntry(() => import('./charge-list.scss'), async () => {
  const { videoChange } = await import('@/core/observer')
  const { select } = await import('@/core/spin-query')

  videoChange(async () => {
    const video = await select('video')
    video?.addEventListener('ended', async () => {
      console.log('skip charge')
      if (document.body.classList.contains(SkipChargeListDisabledClass)) {
        return
      }
      const jumpButton = await select('.bilibili-player-electric-panel-jump') as HTMLElement
      jumpButton?.click()
    })
  })
})
export const component: ComponentMetadata = {
  name: 'skipChargeList',
  displayName: '跳过充电鸣谢',
  tags: [
    componentsTags.video,
  ],
  entry,
  enabledByDefault: true,
  description: {
    'zh-CN': '自动跳过视频结尾的充电鸣谢.',
  },
  reload: () => document.body.classList.remove(SkipChargeListDisabledClass),
  unload: () => document.body.classList.add(SkipChargeListDisabledClass),
  urlInclude: playerUrls,
}
