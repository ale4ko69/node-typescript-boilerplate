import { analytics } from './modules/analytics.js'
import alex from './modules/index.js'
// const alex = "alex"
const message = 'Hello NodeJS'

console.log(`${message} + ${alex}`)
const css = `<style>
.ff {color: red;border: 1px solid}
</style>`
analytics('File Main.ts, ')
