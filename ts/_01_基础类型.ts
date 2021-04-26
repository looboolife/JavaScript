/**
 * boolean
 */
let isDone: boolean = false;


/**
 * number/biginit(es2020)
 * 
 * ts支持的数字都是浮点数或者大整数
 * 浮点数类型是number 大整数类型是bigint
 * 支持十进制,十六进制和es6的二进制和八进制
 */
let decLiteral: number = 6;
let hexliteral: number = 0xf00d;
//二进制
let binaryLiteral: number = 0b1010;
//八进制
let octalLiteral: number = 0o744;
//es2020 才可以
// let bigLiteral:bigint = 100n;


/**
 * string
 * 
 * 可以使用单引号(')双引号(")表示数据类型
 * 还可以使用反引号(`)表示模板字符串
 * 并且以${exper}嵌入表达式
 */
let name: string = "bob";
name = "smith";
let sentence: string = `Hello, my name is ${name}`;

/**
 * Array
 * 
 * 方式一: 元素类型 + [] ,number[]
 * 方式二: 数组泛型 Array<元素类型>
 */
let list1: number[] = [1, 2];
let list2: Array<number> = [1, 2];

/**
 * Tuple(元组)
 * 元组表示一个已知元素数量和类型的<b>数组</b>,各元素的类型不必相同
 * 数组的数量和类型顺序必须和定义一样
 */
let x: [string, number] = ["hello", 100];
//error, Type 'string' is not assignable to type 'number'
//x = [10, "123"];
console.log(x[0].substr(1));
//error, Property 'substr' does not exist on type 
// console.log(x[1].substr(1));
//error, Tuple type '[string, number]' of length '2' has no element at index '3'
// x[3] = "wo";


/**
 * enum
 * 
    编译后的 Color = {"Red":0,0:"Red"}
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Blue;
 * 
 * 默认从0开始为元素编号,也可以手动指定
 */
enum Color { Red = 2, Green, Blue }
let c: Color = Color.Blue;

export { }
