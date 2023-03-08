// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const l1 = [2,4,3]
const l2 = [5,6,4]
// for(x in l1){
//     for(y in l2){
//         console.log(l1[x]+l2[y])
//         break
//     }
// }

// for(let x; x < l1.length; x++){
//     console.log(l1[x])
// }

for(let i=0; i<l1.length; i++){
    for(let j=0; i<l2.length; j++){
        console.log(l1[i],l2[j])
    }
    // console.log(l1[i])
}