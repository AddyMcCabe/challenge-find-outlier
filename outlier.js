function findOUtlier(arr) {
    let evenArr = [];
    let oddArr = [];

 for(let i = 0; i < arr.length; i++) {
     if(arr[i] % 2 === 0) {
         evenArr.push(arr[i])
     } else {
         oddArr.push(arr[i])
     }
 }

 if(evenArr.length === 1) {
     return evenArr[0]
 } else {
     return oddArr[0]
 }
}

console.log(findOUtlier([1,3,5,7,9,10]))