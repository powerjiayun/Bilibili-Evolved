import Color from 'color'
import { settings, addComponentListener } from '../settings'
import { makeImageFilter } from './image-filter'
import { TextColor } from '../text-color'

export const initColors = () => {
  const colorStyle = document.createElement('style')
  const colorMap = new Map<string, string>()
  const set = (name: string, value: string) => {
    colorMap.set(name, value)
  }
  const update = lodash.debounce(() => {
    colorStyle.textContent = `
    html {
      ${[...colorMap.entries()].map(([key, value]) => (`${key}: ${value};`)).join('\n')}
    }
    `.trim()
  }, 100)
  addComponentListener('settingsPanel.themeColor', (value: string) => {
    set('--theme-color', value)
    for (let opacity = 10; opacity <= 90; opacity += 10) {
      set(`--theme-color-${opacity}`, Color(value, 'hex').alpha(opacity / 100).rgb().string())
    }
    set('--pink-image-filter', makeImageFilter(Color({
      r: 251,
      g: 113,
      b: 152,
    }, 'rgb'), Color(value, 'hex')))
    set('--blue-image-filter', makeImageFilter(Color({
      r: 0,
      g: 160,
      b: 213,
    }, 'rgb'), Color(value, 'hex')))
    update()
  }, true)
  addComponentListener('settingsPanel.accentColor', (value: string) => {
    set('--accent-color', value)
    update()
  }, true)
  addComponentListener('settingsPanel.textColor', (value: TextColor) => {
    let textColor: 'black' | 'white'
    if (value === TextColor.Auto) {
      textColor = Color(settings.themeColor).isLight() ? 'black' : 'white'
    } else {
      textColor = value === TextColor.Black ? 'black' : 'white'
    }
    set('--text-color', textColor)
    // for v1.x
    set('--foreground-color', textColor)
    set('--foreground-color-d', Color(textColor, 'keyword').alpha(14 / 16).rgb().string())
    set('--foreground-color-b', Color(textColor, 'keyword').alpha(12 / 16).rgb().string())
    set('--brightness', `${textColor === 'black' ? '100' : '0'}%`)
    set('--invert-filter', textColor === 'black' ? 'invert(0)' : 'invert(1)')
    update()
  }, true)
  return colorStyle
}
