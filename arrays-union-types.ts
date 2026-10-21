// Part 2: Introduction to TypeScript
// 4. Arrays & Union Types

let names: string[] = ["Ada", "Bola", "Chidi"];

let scores: number[] = [78, 90, 55, 88];


function formatId(id: string | number): string {
  return String(id);
}


console.log(formatId(42));
console.log(formatId("abc"));