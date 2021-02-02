{
  const x = 0,
    y = 0;
  const obj = { x, y };
  console.log(obj);
}

{
  const obj = {
    foo: "bar",
    ["baz" + "hello"]: 22,
  };
  console.log(obj);
}

{
  const obj = {
    foo(a, b) {
      return a + b;
    },
    bar(x, y) {
      return x + y;
    },
    *quux(x, y) {
        yield x;
        yield x + y;
    },
  };
//   console.log(obj.foo(4,5));
//   console.log(obj.bar(4,5));
const gen = obj.quux(4,5)
//   console.log(obj.quux(4,5));
console.log(gen.next().value);
console.log(gen.next().value);
}


function* num() {
    let index = 1;
    while (true)
    yield index++;
}
let gen = num()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);