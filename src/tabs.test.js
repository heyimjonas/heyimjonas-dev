import { describe, expect, it } from 'vitest'
import { DEFAULT_TAB, TABS, parseTab, tabForShortcut } from './tabs.js'

describe('parseTab', () => {
  it('returns valid ids from hash', () => {
    expect(parseTab('#projects')).toBe('projects')
    expect(parseTab('#tech_stack')).toBe('tech_stack')
    expect(parseTab('#cv')).toBe('cv')
    expect(parseTab('#home')).toBe('home')
    expect(parseTab('#experience')).toBe('experience')
    expect(parseTab('#about')).toBe('about')
  })
  it('falls back to home', () => {
    expect(parseTab('')).toBe('home')
    expect(parseTab('#')).toBe('home')
    expect(parseTab('#nonsense')).toBe('home')
    expect(parseTab('#PROJECTS')).toBe('home')
  })
  it('exposes ordered tabs and default', () => {
    expect(TABS.map((t) => t.id)).toEqual(['home', 'experience', 'projects', 'tech_stack', 'about', 'cv'])
    expect(DEFAULT_TAB).toBe('home')
  })
})

describe('tabForShortcut', () => {
  it('maps digit keys to tabs in navbar order', () => {
    expect(tabForShortcut('Digit1')).toBe('home')
    expect(tabForShortcut('Digit2')).toBe('experience')
    expect(tabForShortcut('Digit6')).toBe('cv')
    expect(tabForShortcut('Numpad3')).toBe('projects')
  })
  it('returns null for keys without a tab', () => {
    expect(tabForShortcut('Digit0')).toBeNull()
    expect(tabForShortcut('Digit7')).toBeNull()
    expect(tabForShortcut('KeyA')).toBeNull()
    expect(tabForShortcut('')).toBeNull()
  })
})

