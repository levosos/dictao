import adjectives from '../collections/adjectives'
import adverbs from '../collections/adverbs'
import conjunctions from '../collections/conjunctions'
import days from '../collections/days'
import months from '../collections/months'
import nouns from '../collections/nouns'
import numbers from '../collections/numbers'
import verbs from '../collections/verbs'

const data = [].concat(adjectives, adverbs, conjunctions, days, months, nouns, numbers, verbs)
const tags = [...new Set([].concat(...data.map(o => o.tags || [])))]

export default {
    data: data,
    tags: tags,
}
