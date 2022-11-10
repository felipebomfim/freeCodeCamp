/*
    Steamroller

Flatten a nested array. You must account for varying levels of nesting
*/

function steamrollArray(arr) {
    if (!Array.isArray(arr))
        return [arr];
    if (arr.length === 0)
        return [];
    if (arr.length === 1 && Array.isArray(arr[0]) === false)
        return arr;
    else{
        let res = [];
        for (let i=0; i<arr.length; i++)
            res.push(...steamrollArray(arr[i]));
        return res;
    }
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));