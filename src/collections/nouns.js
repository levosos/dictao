import data from '@/assets/nouns.json'

function portuguese(o) {
  function _(p, g) {
    return p + ' (' + g + ')'
  }

  if (o.g == 'b') {
    return Object.keys(o.p).map(g => _(o.p[g], g)).join(' ')
  } else {
    return _(o.p, o.g)
  }
}

export default data.map(o => { return { ...o, p: portuguese(o), tags: (o.tags || []).concat(['nouns']) } })
