import a from './a'
import b from './b'
import pic from './img/123.png'

var img = new Image()
img.src = pic
var root = document.getElementById('root')
root.append(img)

console.log(pic)

//既然webpack默认只认识js模块，那么遇到非js模块怎么办？
//loader 
a()
b()






function lm() {
    console.log('welcome to lm')
}

lm()