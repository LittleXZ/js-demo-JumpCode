let info = document.querySelector(`#info`)
let style = document.querySelector(`style`)
let string1 = `/*大家好，我是brennanZhang
**这是我的一个小项目，目前还很简陋
**那么先让我简单改一下样式
*/
body{
    background-color: grey;
    color: white;
}
#info{
    padding-top: 5vh;
    padding-left: 5vw;
}
/*然后让我来给你画一个太极图
**首先我需要一个div
*/
#taiji{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    position: absolute;
}
/*然后我们把这个框框放到中间来
**并且把它画成一个圆
*/
#taiji{
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%);
    border-radius: 50%;
    border: none;
}
/*最后再他里面添加两个小圆并点上小眼睛
*/
#taiji:before{
    width :100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#taiji:after{
    width :100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*一个太极就做好了
*/
`
let string2 = ``
let n = 0

let step = ()=>{  // *回调函数 多次执行setTimeout替代setInterval 方便中断
    setTimeout(()=>{
        if(n<string1.length) {
                if(string1[n] === `\n`){
                    string2 += `<br>`
                }else if(string1[n] === ` `){
                    string2 += `&nbsp;`
                }else{
                    string2 += string1[n]
                }
            n = n + 1
            info.innerHTML = string2
            style.innerHTML = string1.substring(0,n)  //substring得到的是字符串的子集
            window.scrollTo(0,9999)
            info.scrollTo(0,9999)
            step()
            }
    },20)
}
step()
