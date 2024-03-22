let counter = 0;
while (counter < 10) {
    counter += 1;
    console.log(counter);
}

for (let i = 2; i<=20; i++) {
    if (i % 2) {
        continue;
    }
    console.log(i);
}

let arr = [1, 2, 3, 4, 5];
let num = 0;
while(arr.length > num) {
    console.log(arr[num]);
    num++;
}