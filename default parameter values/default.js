function foo(x=10,y=15) {
    console.log(x+y);
}

foo(1,5);
foo(undefined,2);
foo(null, undefined);//null==0





// Выражения как значения по умолчанию
function bar(val) {
    console.log('bar called!');
    return y+val;
}

function foo2(x=y+3,z=bar(x)) {
    console.log(x,z);
}

let y=5;
foo2();//x=8,z=bar(8)
      //output: bar called 8 13
foo2(10);//output: bar called, 10, 15

y=6;
foo2(undefined,10);//output: 9 10

