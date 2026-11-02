import { siClaude, siGit, siGithub, siGitlab, siOdoo, siPostgresql, siPython } from 'simple-icons'
import xmlIcon from '../assets/xml.png'

const mark = (si, brand = null) => ({ label: si.title, icon: { path: si.path }, brand })

export default [
  [{ ...mark(siOdoo, 'var(--odoo)'), icon: { path: siOdoo.path, viewBox: '0 8.2 24 7.6' } }],
  [
    { label: 'XML', icon: { image: xmlIcon }, brand: null },
    mark(siPython, '#3776ab'),
    { label: 'OWL JS', icon: { emoji: '🦉' }, brand: null },
    mark(siPostgresql, '#4169e1'),
  ],
  [mark(siGit, '#f03c2e'), mark(siGithub), mark(siGitlab, '#fc6d26'), mark(siClaude, '#d97757')],
]
