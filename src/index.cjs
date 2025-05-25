// JavaScript 沒有內建型別檢查，變數可以改變型別
let x = 0 // 此時 x 是數字型別
x = 'hello world' // JavaScript 允許變更型別為字串

// 在 JavaScript 中可以使用 JSDoc 來提供型別提示
/**
 * @type {string}
 */
let name = 'JavaScript'

/**
 * 代表一個使用者
 * @typedef {Object} User
 * @property {string} name - 使用者名稱
 * @property {number} age - 使用者年齡
 */

/**
 * @type {User}
 */
const user = {
  name: '小明',
  age: 25
}
