function foo() {
    return [1,2,3];
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

let [a,b,c]=foo(),
    // {x:x, y:y, z:z}=bar();
    {x,y,z}=bar();//более короткая запись
console.log(a, b, c);
console.log(x, y, z);

// Запись x: bam означает, что свойство x является исходным значением, а bam — целевой переменной, которой оно присваивается.
let {x: bam, y:baz, z:bap} =bar();
console.log(bam, baz, bap);
