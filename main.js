// var btn=document.getElementById("done")
// console.log(btn)
// btn.addEventListener('click',function ok(){
    // document.body.style.backgroundColor="red"
    // console.log(document.body.style.backgroundColor)
// if(document.body.style.backgroundColor=="red"){
//     document.body.style.backgroundColor="blue"
// }
// else{document.body.style.backgroundColor="red"}
// })
var pos=document.getElementById("button1");
console.log(pos)
var neg=document.getElementById("button2")
console.log(neg)
var h1=document.getElementById("h1")
console.log(h1)
pos.addEventListener('click',function ad(){
console.log(pos)
h1.innerHTML=Number(h1.innerHTML)+1
console.log(typeof Number(h1.innerHTML));
})
neg.addEventListener('click',function el(){
    console.log(neg)
    h1.innerHTML=Number(h1.innerHTML)-1
    console.log(typeof Number(h1.innerHTML));  
})
