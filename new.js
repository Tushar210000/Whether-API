
function compute( x,y,callback){
    callback(x,y,square)
}
 function sum(x,y,callback){
    console.log(`sum is ${x+y} ` )
    callback(x+y)
 }
 function square(x){
    console.log(`product  is ${x*x} ` )
    
 }

 compute(5,7,sum)