
import './assets/style.css'
// import imageSrc from './assets/timg.jpg'
import printMe from "./printMe"

function component(){
    var element = document.createElement('div')
    element.innerHTML = "Hello Webpack"
    element.classList.add('hello')

    var btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console'
    btn.onclick = printMe
    element.appendChild(btn)
    // var myImage = new Image()
    // myImage.src = imageSrc
    // element.appendChild(myImage)

    return element
}

document.body.appendChild(component())