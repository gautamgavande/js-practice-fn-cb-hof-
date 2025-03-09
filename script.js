// 1.Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).


// function abcd(fn,dealy){
//     setTimeout(fn,dealy)
// }
// abcd(function(){
//     console.log("hii i am a callback")
// },3000)



//2. Implement your own version of `.map()` as a higher-order function.

// function abcd(arr,fn){
//     let newarr=[]
//     for(let i=0;i<arr.length;i++){
//         newarr.push(fn(arr[i]))
//     }
//     return newarr;
// }

// let arr=[1,2,3,4,5]
// let ans=abcd(arr,function(val){
//     return val*2;
// })
// console.log(ans)



//3.Write a function that uses closures to create a counter.

// function abcd(){
//     let a=1;
//     return function(){
//         console.log(a)
//         a++;
//     }
// }
// const ans=abcd();
// ans()
// ans()
// ans()
// ans()
// ans()
// ans()



//4.Implement a function that limits how many times another function can be called (Closure + HOF).

// function abcd(val){
//    let limit=1;  
//     return function(){
//         if(limit<=val){
//         console.log("hello")
//         limit++
//        }
//        else{
//         console.log("limit exied")
//        }
//     }  
// }
// let ans=abcd(4)
// ans()
// ans()
// ans()
// ans()
// ans()



//5. count number of element..........
// let arr=[1,2,3,4,5,6,1,2,3,4,5,6]
// let data={}

// // arr.forEach(element => {
// //     data[element]===undefined?data[element]=1:data[element]++;
// // });
// // let ans=[...new Set(arr)]
// for(let i=0;i<arr.length;i++){
//     console.log(data[arr[i]])
//     data[arr[i]]===undefined?data[arr[i]]=1:data[arr[i]]++;
// }
// console.log(data)


//6 Create a function that takes a callback and executes it after every `n` seconds indefinitely.
// function abcd(fn,time){
//     setInterval(fn,time)
// }
// abcd(function(){
//     console.log("hii i am gautam")
// },1000)

//7.Implement a function that returns a function with a preset greeting (Closure).

// function geeting(namaste){
//     return function(name){
//         console.log(`${namaste} ${name}`)
//     }
// }
// const abcd=geeting("hello")
// abcd("gautam");
// abcd("gautam");
// abcd("gautam gavande");
// abcd("gautam")

//8.Implement a function that takes a callback and only executes it once (HOF + Closure).

// function abcd(fn){
//     let init=false
//     return function(){
//         if(!init){
//             fn();
//             init=true;
//         }else{
//             console.error("not excecte")
//         }
      
//     }
// }
// let one=abcd(()=>{console.log("i am excecute only once")})
// one()
// one()
// one()

//9.Implement a function that throttles another function (HOF + Closures).

// function throt(fun,delay){
//     let lastcall=0;
//     return function(){
//         let current=Date.now();
//         if(current-lastcall>=delay){
//             lastcall=current;
//             fun()
//         }
//     }
// }
// let newone=throt(function(){
//     console.log("2 second me chalna hai")
// },2000)
// newone()
// newone()
// // setTimeout(newone,3000)
// newone()

//10.swap tow number
// var a=10;
// var b=20;

// let c=a;
// a=b;
// b=c;

// a=a+b;
// b=a-b;
// a=a-b;

// [a,b]=[b,a]
// console.log("a =",a ,"b =",b)



//math function

console.log(Math.ceil(12.5)) //ak aage kar deta hai

console.log(Math.floor(10.7)) // float value ko hata deta hai

console.log(Math.round(10.5))//11 //round kar deta hai value ko like 10.4 raha to 10 return karenga agr 10.5 ya usse upar denge to 11 return karenga 

console.log(Math.round(10.4)) //10

console.log(Math.abs(-52))//52 //positive value return karta hai
console.log(Math.abs(52)) //52

console.log(Math.trunc(12.72436789)) //point ke bad ke number ko hata deta hai

console.log(Math.pow(10,2)) // 10 ki power 2
console.log(Math.random()) //0 se lekar 1 ke bicha ki value return karta hai

console.log(Math.sqrt(36)) //6 //squre root return karta hai

console.log(Math.cbrt(216)) // cube root return karta hai

console.log(Math.min(10,10,2,3,45,47,89)) // sabse chhoti value return karta hai

console.log(Math.max(10,20,30,45,65,22)) //maximum value return karta hai

console.log(Math.random()) //random value return karta hai 0 se lekar 1 ke bich me


let a=10.235689
console.log(a.toFixed(3))//point ke bad kitne number return karna hai iske lia use karte hai


