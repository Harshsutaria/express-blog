/**Given a string sequence say “abbbccdeaab” replace sequentially repeating
 *  characters with a single character and return the string “abcdeab”.
 * 
 * Input:
	“abbbccdeaab”

Output:
	“abcdeab”
*/


let s = "abbbccdeaab"
function subSequence(s){
    let a = [s[0]]
    for(let i = 1 ; i < s.length ;i++){
        if(a[a.length -1] !== s[i]){
            a.push(s[i])
        }
    }
    return a.join("")
}

let result =  subSequence(s)
console.log("result is",result)