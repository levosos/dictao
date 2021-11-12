import data from '@/assets/adverbs.json'

export default data.map(o => { return { ...o, tags: (o.tags || []).concat(['adverbs']) } })
