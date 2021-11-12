import adjectives from '../collections/adjectives'
import adverbs from '../collections/adverbs'
import conjunctions from '../collections/conjunctions'
import nouns from '../collections/nouns'
import verbs from '../collections/verbs'

const data = [].concat(adjectives, adverbs, conjunctions, nouns, verbs)
const tags = [...new Set([].concat(...data.map(o => o.tags || [])))]

export default {
    data: data,
    tags: tags,
}
