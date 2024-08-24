const a = [1, 2, 3, [4, [5, 6]], 7, 8];

// console.log("Native", a.flat(Infinity));

const result = flattenArray(a);
console.log(result);
// [1,2,3,4,5,6,7,8]

function flattenArray(a) {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        const curElement = a[i];
        if (Array.isArray(curElement)) {
            const resultArr = flattenArray(curElement);
            res = [...res, ...resultArr];
        } else {
            res.push(curElement);
        }
    }
    return res;
}
