// Content of the CV sheet shown on the cv tab (mirrors public/cv.pdf).
// Work experience comes from experience.js so both pages stay in sync.
export const name = 'Jonas Santiago'
export const email = 'jonas.santiago.dev@gmail.com'

export const summary =
  'Odoo Developer with 3+ years of experience in custom module development, workflow automation, and ERP integration. Skilled in Python, the Odoo framework, and creating custom PDF & XLSX reports, with experience delivering enterprise solutions.'

export const skills = [
  { label: 'Odoo / ERP', value: 'Custom modules, ORM, XML views, workflow automation, creating PDF & XLSX reports' },
  { label: 'Programming', value: 'Python (Odoo ORM, general Python)' },
  { label: 'Database', value: 'PostgreSQL' },
  { label: 'Tools / Version Control', value: 'Git, VSCode' },
  { label: 'Other', value: 'Excel, JSON, gzip, webhook integration' },
]

export const education = [
  {
    title: 'Bachelor of Science in Information Technology (BSIT)',
    detail: 'Major in Web and Software Development',
    school: 'Bulacan State University',
    period: '2018–2022',
  },
  {
    title: 'Senior High School',
    detail: 'Science, Technology, Engineering, and Mathematics (STEM)',
    school: 'Academia De Pulilan',
    period: '2016–2018',
  },
]
