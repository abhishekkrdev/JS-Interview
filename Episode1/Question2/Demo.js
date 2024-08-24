const obj = [
    {
        key: "Sample 1",
        data: "Data1",
    },
    {
        key: "Sample 1",
        data: "Data1",
    },
    {
        key: "Sample 2",
        data: "Data2",
    },
    {
        key: "Sample 1",
        data: "Data1",
    },
    {
        key: "Sample 3",
        data: "Data1",
    },
    {
        key: "Sample 4",
        data: "Data1",
    },
];

// let output = {
//     "Sample 1": [
//         {
//             key: "Sample 1",
//             data: "Data1",
//         },
//         {
//             key: "Sample 1",
//             data: "Data1",
//         },
//         {
//             key: "Sample 1",
//             data: "Data1",
//         },
//     ],
//     "Sample 2": [
//         {
//             key: "Sample 2",
//             data: "Data2",
//         },
//     ],
//     "Sample 3": [
//         {
//             key: "Sample 3",
//             data: "Data1",
//         },
//     ],
//     "Sample 4": [
//         {
//             key: "Sample 4",
//             data: "Data1",
//         },
//     ],
// };

// function easySol(arr) {
//     let resultObj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let currentObjArr = arr[i];
//         if (currentObjArr.key in resultObj) {
//             resultObj[currentObjArr.key].push(arr[i]);
//         } else {
//             resultObj[currentObjArr.key] = [arr[i]];
//         }
//     }
//     return resultObj;
// }

// console.log(easySol(obj));

const output = obj.reduce((accumulator, currentVal) => {
    const key = currentVal.key;

    if (key in accumulator) {
        // accumulator[key].push(currentVal);
        accumulator[key] = [...accumulator[key], currentVal];
    } else {
        accumulator[key] = [currentVal];
    }
    return accumulator;
}, {});

console.log(output);
