//k8

console.clear();

function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}


console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);