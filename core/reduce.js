/** "Given a string s, return true if the s can be palindrome after deleting at most one character from it"*/

let s = "abba" 

function plainDome(s){
    console.log("s is",s)
    let start  = 0 
    let end = s.length -1
    let count = 0

    while(start<end){
        if(s[start] !== s[end]){
            count+=1
        }
        start+=1 
        end-=1
    }
    console.log("count is",count)
    return count <= 1
}

let result = plainDome(s)
console.log("result is",result)