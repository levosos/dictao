import data from '@/assets/numbers.json'

export default data.map(o => { return { ...o, tags: ['numbers'] } })
