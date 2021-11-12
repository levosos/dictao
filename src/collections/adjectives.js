import data from '@/assets/adjectives.json'

function portuguese(o) {
  if (typeof o.p === 'string') {
    return o.p + ' (u)'
  } else {
    return Object.keys(o.p).map(g => o.p[g] + ' (' + g + ')').join(' ')
  }
}

export default data.map(o => { return { ...o, p: portuguese(o), tags: (o.tags || []).concat(['adjectives']) } })
