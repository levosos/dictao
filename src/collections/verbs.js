import data from '@/assets/verbs.json'

export default data.map(o => { return { ...o, tags: (o.tags || []).concat(['verbs']) } })
