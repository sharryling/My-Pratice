//日历  创建过去七天的数组，如果将代码中的减号换成加号，你将得到未来7天的数组集合
//console.log([...Array(7).keys()].map(days => new Date(Date.now() - 86400000*days)));

//生成随机ID
console.log(Math.random().toString(36).substring(2));


//生成随机十六进制代码（生成随机颜色）
var a = '#'+Math.floor(Math.random() * 0x1000000).toString(16).padEnd(6,'0')
console.log(a);


/* for(i=0;++i<101;console.log(i%5?f||i:f+'Buzz'))f=i%3?'':'Fizz'
 */


console.log((_=>[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"][p++]||'SHIFT',p])}\\|`,m+=y+(x+'    ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&k.join``)());
