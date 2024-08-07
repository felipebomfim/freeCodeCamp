/*
Write a function that splits an array (first argument) into groups the length of size (second 
    argument) and returns them as a two-dimensional array.

*/
// function chunkArrayInGroups(arr, size) {
//     let arr_groups = [];
//     let group = [];
//     for (let i=0; i<arr.length; i++){
//         group.push(arr[i]);
//         if ((i+1)%size == 0){
//             arr_groups.push([...group]);
//             group = [];
//         }     
//     }
//     if (group.length !== 0){
//         console.log("group = "+group);

//         arr_groups.push([...group]);
//     }
//     return arr_groups;
// }

function chunkArrayInGroups(arr, size){
    let arr_groups = [];
    let removed = [];
    while(arr.length>size){
        removed = arr.splice(0,size);
        arr_groups.push(removed);
    }
    return arr_groups;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));