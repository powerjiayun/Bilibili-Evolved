import { headLoaded } from '@/core/life-cycle'
import { none } from '@/core/utils'

/** 初始化脚本 */
export const init = async () => {
  const { raiseLifeCycleEvent, LifeCycleEventTypes } = await import('@/core/life-cycle')
  raiseLifeCycleEvent(LifeCycleEventTypes.Start)

  window.lodash = _
  const { promiseLoadTrace } = await import('@/core/performance/promise-trace')
  const { coreApis, externalApis } = await import('@/core/core-apis')
  unsafeWindow.bilibiliEvolved = externalApis
  /** sand-boxed window, safe to use original name */
  window.coreApis = coreApis
  window.dq = coreApis.utils.dq
  window.dqa = coreApis.utils.dqa
  window.none = coreApis.utils.none
  window.componentsTags = coreApis.componentApis.component.componentsTags

  await promiseLoadTrace('Vue init', async () => {
    const { initVue } = await import('./init-vue')
    initVue()
  })

  await promiseLoadTrace('wait for <head>', async () => {
    // 等待<head>元素
    await headLoaded(none)
  })

  const skip = await promiseLoadTrace('<iframes> checks', async () => {
    // 跳过对多余<iframe>的加载
    const { checkIframes } = await import('./check-iframes')
    return !checkIframes()
  })
  if (skip) {
    return
  }

  await promiseLoadTrace('compatibility patch', async () => {
    // 兼容性补丁
    const { compatibilityPatch } = await import('./compatibility')
    compatibilityPatch()
  })

  const { loadAllUserComponents } = await import('@/components/component')
  await promiseLoadTrace('parse user components', loadAllUserComponents)

  const { preloadStyles, loadAllCustomStyles } = await import('@/core/style')
  await promiseLoadTrace('load styles', preloadStyles)
  raiseLifeCycleEvent(LifeCycleEventTypes.StyleLoaded)

  await promiseLoadTrace('load components', async () => {
    const { loadAllComponents } = await import('@/components/component')
    loadAllComponents()
    loadAllCustomStyles()
  })
  raiseLifeCycleEvent(LifeCycleEventTypes.ComponentsLoaded)

  await promiseLoadTrace('wind up', async () => {
    const prefetchLink = document.createElement('link')
    prefetchLink.rel = 'dns-prefetch'
    prefetchLink.href = 'https://api.bilibili.com'
    document.head.insertAdjacentElement('afterbegin', prefetchLink)

    requestIdleCallback(async () => {
      const { getGeneralSettings } = await import('@/core/settings/helpers')
      const { devMode } = getGeneralSettings()
      if (devMode) {
        const {
          promiseLoadTime,
          promiseResolveTime,
        } = await import('@/core/performance/promise-trace')
        const { logStats } = await import('@/core/performance/stats')
        logStats('init block', promiseLoadTime)
        logStats('init resolve', promiseResolveTime)
      }
    })
  })
  raiseLifeCycleEvent(LifeCycleEventTypes.End)
}
