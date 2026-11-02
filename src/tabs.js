export const TABS = [
  { id: 'home', label: 'home' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'tech_stack', label: 'tech_stack' },
  { id: 'about', label: 'about' },
  { id: 'cv', label: 'cv' },
]

export const DEFAULT_TAB = 'home'

export function parseTab(hash) {
  const id = (hash || '').replace(/^#/, '')
  return TABS.some((t) => t.id === id) ? id : DEFAULT_TAB
}
