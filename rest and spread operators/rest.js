function foo(...args) {
    // 'args' это настоящий массив
    // отбрасываем первый элемент в массиве 'args'
    args.shift();
    console.log(...args);
}

foo(4,57,14,5);
