import { analytics } from './modules/analytics.js'
import alex from './modules/index.js'

const message = 'Hello NodeJS'

console.log(`${message} from ${alex}`)
analytics('File Main.ts,')
