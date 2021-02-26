const f = x => x * x;
const g = x => x + 1;

console.log(f(g(8)));      // 81
console.log(g(f(8)));      // 65

8 |> f |> g |> console.log  // 65
8 |> g |> f |> console.log  // 81
