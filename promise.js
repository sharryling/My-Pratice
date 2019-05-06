/* test 1  */
var num = false
var p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        num = true
        if(num)resolve(num)
    else reject()
    },1000)
    console.log("first");
    
})

p
.then((num)=>{
    console.log("hihi = ",num);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            num = true
            if(num)resolve(num)
        else reject()
        },1000)
    })
})
.catch(()=>{
    console.log("error");
    
})
.then((num)=>{
    console.log("second");
    
})

/* test 2 */
const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 2000)
  })
  
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
  })
  
  p2
    .then(result => console.log(result))
    .catch(error => console.log("error"))