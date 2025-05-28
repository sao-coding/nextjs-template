// TS 是 JS 的超集
// TypeScript 又在 JavaScript 的基礎上，加上了「型別系統」和其他額外功能。

/**
 * TypeScript 型別系統範例
 * 本檔案展示 TypeScript 中各種型別定義的方式與使用情境
 */

// ==================== TypeScript 基本型別介紹 ====================

/**
 * TypeScript 提供了多種資料型別:
 *
 * 1. 基本型別 (Primitive Types)
 *    - boolean: 布林值 (true/false)
 *    - number: 數字 (整數、浮點數)
 *    - string: 字串
 *    - null: 空值
 *    - undefined: 未定義
 *    - symbol: 獨特且不可變的值 (ES6)
 *    - bigint: 任意精度的整數 (ES2020)
 *
 * 2. 物件型別 (Object Types)
 *    - object: 非原始型別的值
 *    - array: 陣列，如 number[]、Array<string>
 *    - tuple: 固定長度的陣列，如 [string, number]
 *
 * 3. 特殊型別 (Special Types)
 *    - any: 任何型別，關閉型別檢查
 *    - unknown: 類似 any，但更安全，需先確認型別再使用
 *    - never: 永不發生的值的型別
 *    - void: 通常用於沒有返回值的函數
 *
 * 4. 其他型別
 *    - enum: 枚舉型別
 *    - literal types: 字面量型別，如 "foo" | "bar"
 *    - union types: 聯合型別，如 string | number
 *    - intersection types: 交集型別，如 Type1 & Type2
 */

// 基本型別範例
const isDone: boolean = false
const decimal: number = 6
const hex: number = 0xf00d
const binary: number = 0b1010
const message: string = 'Hello, TypeScript'
const n: null = null
const u: undefined = undefined
const sym: symbol = Symbol('key')
const big: bigint = 100n

// 物件型別範例
const obj: object = { prop: 'value' }
const numbers: number[] = [1, 2, 3]
const tuple: [string, number] = ['TypeScript', 4]

// 特殊型別範例
const notSure: any = 4
const unknown: unknown = '可能是任何型別'
function error(): never {
  throw new Error('錯誤')
}
function logMessage(): void {
  console.log('沒有返回值')
}

// 其他型別範例
enum Color {
  Red,
  Green,
  Blue
}
const c: Color = Color.Green
const literalType: 'small' | 'medium' | 'large' = 'medium'
const unionType: string | number = '字串或數字'

// ==================== Type 關鍵字使用 ====================

/**
 * Type Aliases (型別別名)
 * 使用 type 關鍵字定義自訂型別，可提高程式碼可讀性和重用性
 */
type People = {
  name: string // 字串型別屬性
  age: number // 數字型別屬性
}

/**
 * 型別擴展 (Type Extension)
 * 使用 & 運算符來合併型別，建立更複雜的型別
 */
type ExtendedPeople = People & {
  address: string // 新增 address 屬性
}

/**
 * 聯合型別 (Union Types)
 * 使用 | 符號表示一個值可以是多種型別之一
 */
type Status = 'active' | 'inactive' | 'pending' // 字串字面量聯合型別

/**
 * 複合型別範例
 * 包含選擇性屬性 (使用 ? 標記)
 */
type ApiResponse = {
  status: 'success' | 'error' // 僅允許兩種固定值
  data?: any // 選擇性屬性，可以不存在
}

// 注意：此處有個拼寫錯誤，應為 status 而非 staus
type test = {
  staus: 'success' | 'error' // 拼寫錯誤的屬性名稱
}

// ==================== Interface 關鍵字使用 ====================

/**
 * Interface 定義
 * 用於定義物件的形狀，主要用於物件導向設計
 */
interface User {
  role: 'admin' | 'user' // 使用聯合型別限制值的範圍
}

/**
 * Interface 宣告合併 (Declaration Merging)
 * TypeScript 特有功能，同名介面會自動合併屬性
 */
interface Person {
  name: string
}

interface Person {
  age: number
}
// 結果等同於 interface Person { name: string; age: number; }

/**
 * Interface 繼承 (Interface Extension)
 * 使用 extends 關鍵字繼承一個或多個介面
 */
interface Employee extends Person {
  jobTitle: string
  salary: number
}

/**
 * Interface 與 Type 互相使用
 * Interface 可以擴展由 type 定義的型別
 */
interface Customer extends ExtendedPeople {
  customerID: string
}

// ==================== 實際使用範例 ====================

/**
 * 型別註解與實例化
 * 宣告變數時指定型別，並初始化符合該型別的值
 */
const x: User = { role: 'user' } // 創建符合 User 介面的物件
x.role = 'admin' // 修改屬性值
console.log(x.role) // 輸出結果

/**
 * 型別註解與型別推論
 * TypeScript 可以從初始值自動推論變數型別
 */
const typeName: string = 'TypeScript' // 明確指定型別
const age = 10 // 自動推論為 number 型別

// ==================== 實用範例：使用型別 ====================

/**
 * 使用自訂型別宣告變數並賦值
 */
const person: Person = {
  name: '張三',
  age: 30
}

/**
 * 使用擴展型別創建更複雜物件
 */
const employee: Employee = {
  name: '李四',
  age: 35,
  jobTitle: '軟體工程師',
  salary: 50000
}

/**
 * 函數參數與返回值的型別註解
 */
function formatPerson(person: Person): string {
  return `${person.name}, ${person.age}歲`
}

console.log(formatPerson(person))

// 斷言
const someValue: unknown = '這是一個字串'
const someValue1 = someValue as number // 使用 as 斷言將 unknown 轉為 number
if (typeof someValue === 'string') {
  someValue.split(' ') // 錯誤，unknown 型別無法直接使用方法
}

// ==================== 特殊型別使用場景 ====================

/**
 * Symbol 型別使用場景:
 * 1. 創建唯一的物件屬性鍵，避免名稱衝突
 * 2. 實現物件的私有或內部屬性
 * 3. 用於內建的 Symbol.iterator 等特殊方法
 */
// Symbol 使用範例
const uniqueKey = Symbol('description')
const obj2 = {
  [uniqueKey]: '這是一個使用 Symbol 作為鍵的屬性'
}
// 無法透過一般方式存取，必須使用原始 Symbol 引用
console.log(obj2[uniqueKey]) // 正確
// console.log(obj2['uniqueKey']); // 錯誤，無法訪問

/**
 * BigInt 型別使用場景:
 * 1. 處理超出 JavaScript Number 範圍的整數 (超過 2^53 - 1)
 * 2. 需要精確整數計算的財務或科學計算
 * 3. 處理 64 位元 ID 或極大的時間戳
 */
// BigInt 使用範例
const maxSafeInteger = Number.MAX_SAFE_INTEGER // 9007199254740991
const biggerNumber = BigInt(maxSafeInteger) + 1n
console.log(`安全計算大數: ${biggerNumber}`) // 9007199254740992n

/**
 * object 型別使用場景:
 * 1. 當你只知道值是非原始型別 (不是 number, string, boolean, symbol, null, undefined)
 * 2. 作為泛型函數的限制，表示接受任何物件
 * 3. 但通常推薦使用更具體的型別定義 (interface 或 type)
 */
// object 型別使用範例 - 較為寬鬆的型別
function printObject(obj: object): void {
  console.log(Object.keys(obj))
}
printObject({ name: '測試' }) // 正確
// printObject(42); // 錯誤: 數字不是物件

// 比較: 使用明確定義的介面
interface NamedObject {
  name: string
  [key: string]: any // 允許其他任意屬性
}
function printNamedObject(obj: NamedObject): void {
  console.log(`名稱: ${obj.name}`)
}
// 更安全、更具有自文檔性的做法
