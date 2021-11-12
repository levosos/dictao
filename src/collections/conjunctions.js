import data from '@/assets/conjunctions.json'

export default data.map(o => { return { ...o, tags: (o.tags || []).concat(['conjunctions']) } })
