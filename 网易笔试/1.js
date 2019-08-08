var n = 6
var list = [1,3,2,4,6,5]
var min
for(let k=1;k<=n;k++){
    
    for(let i=0;i<n-k;i++){
        var max
        for(let j=1;j<=k;j++){
            const present = parseInt(list[j])
            if(!max || max<present)max = present
        }
    }
    const presentMax = max
    if(!min && min> presentMax) min = presentMax
}
console.log(min)