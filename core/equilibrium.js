/**
 * . Find and return the equilibrium index of an array. Equilibrium index 
 *   of an array is an index i such that the sum of elements at indices less 
 *   than i is equal to the sum of elements at indices greater than i. Element
 *   at index i is not included in either part. If more than one equilibrium
 *   index is present, you need to return the first one. And return -1 if no equilibrium index is present.
 * 
 * 
 * Input format :
        Line 1 : Size of input array
        Line 2 : Array elements (separated by space)
        Sample Input :
        [-7 1 5 2 -4 3 0]

        Sample Output :
        3
 */

let a =  [-7, 1, 5, 2, -4, 3, 0]

function equilibrium(a){
    let totalSum  = a.reduce((a,b)=>a+b , 0)
    console.log("totalsum is",totalSum)
    let sum = 0

    for(let i= 0 ; i < a.length ;i++){
        sum+= a[i]

        if((totalSum - a[i+1]) /2  === sum){
            console.log("result is",i+1)
            return i+1
        }

    }


}

let result =  equilibrium(a)
console.log("result is********",result)