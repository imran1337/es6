const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numbers2 = [1, 2, -3, 4, -5, 6, 7, 8, -9, -10, -11, 12, 13, -14, -15];

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num > 10) {
        break;
    }
    console.log("break",num);
}

for (let i = 0; i < numbers2.length; i++) {
    const num = numbers2[i];
    if (num < 0) {
        continue;
    }
    console.log("continue",num);
}