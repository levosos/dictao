import data from '@/assets/months.json'

export default data.map(o => { return { ...o, tags: ['months'] } })
