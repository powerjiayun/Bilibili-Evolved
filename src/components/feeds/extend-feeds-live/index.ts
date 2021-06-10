import { ComponentMetadata, componentsTags } from '@/components/component'

interface LiveInfo {
  cover: string
  face: string
  uname: string
  title: string
  roomid: number
  pic: string
  online: number
  link: string
}
const entry = async () => {
  const { select } = await import('@/core/spin-query')
  const liveList = await select('.live-up-list') as HTMLElement
  if (liveList === null) {
    return
  }
  const { default: style } = await import('./extend-feeds-live.scss')
  const { addStyle } = await import('@/core/style')
  addStyle(style)
  const pageSize = 24
  const { getPages, getJsonWithCredentials } = await import('@/core/ajax')
  const fullList: LiveInfo[] = await getPages({
    api: page => getJsonWithCredentials(`https://api.live.bilibili.com/relation/v1/feed/feed_list?page=${page}&pagesize=${pageSize}`),
    getList: json => lodash.get(json, 'data.list', []),
    getTotal: json => lodash.get(json, 'data.results', 0),
  })
  const { dqa, dq } = await import('@/core/utils')
  const liveListNames = dqa(liveList, '.up-name')
  const presentedNames = liveListNames.map((it: HTMLElement) => it.innerText.trim())
  const presented = fullList.filter(it => presentedNames.includes(it.uname))
  const extend = fullList.filter(it => !presentedNames.includes(it.uname))

  const liveDetailItem = liveList.children[0] as HTMLElement
  extend.forEach(it => {
    const clone = liveDetailItem.cloneNode(true) as HTMLElement
    dqa(clone, 'a[href]').forEach(a => a.setAttribute('href', `https://live.bilibili.com/${it.roomid}`))
    const face = dq(clone, '.live-up-img') as HTMLElement
    face.style.backgroundImage = `url(${it.face})`
    const title = dq(clone, '.live-name') as HTMLElement
    title.innerHTML = it.title
    title.title = it.title
    const name = dq(clone, '.up-name') as HTMLElement
    name.innerHTML = it.uname
    name.title = it.uname
    liveList.insertAdjacentElement('beforeend', clone)
  })
  const { disableProfilePopup } = await import('../disable-profile-popup')
  disableProfilePopup()
  console.log(presented, extend)
}

export const component: ComponentMetadata = {
  name: 'extendFeedsLive',
  displayName: '直播信息扩充',
  description: {
    'zh-CN': '在动态的<span>正在直播</span>中, 为每一个直播间加上标题, 并且能够显示超过10个的直播间.',
  },
  entry,
  enabledByDefault: true,
  tags: [
    componentsTags.feeds,
    componentsTags.live,
  ],
  urlInclude: [
    /^https:\/\/t\.bilibili\.com\/$/,
  ],
}
