let nums = [10, 32, 57, 77, 88, 98, 78, 13, 58,  ]


let juft_arr = []
let toq_arr = []

for(let i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0) {
      juft_arr.push(nums[i])
    } else { 
      toq_arr.push(nums[i])  
    }
}
console.log(juft_arr);
console.log(toq_arr);