import data from '@/assets/days.json'

export default data.map(o => { return { ...o, tags: ['days'] } })
