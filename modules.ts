// Internal modules
/**namespace MathOperations {
 export function add1(a: number, b: number): number {
 return a + b;
 }
 }

 const result = MathOperations.add1(2, 3);
 console.log(result);*/

// External modules
import { add } from './math.js';
const result2 = add(2, 4);
console.log(result2);