const new_arr = [1, 99, 50, 2]
let sorted_arr = []
for(i = 0;i<new_arr.length; i++){
    sorted_arr.push(new_arr[i])
}
console.log(sorted_arr.sort((num1, num2)=>num1-num2), new_arr)