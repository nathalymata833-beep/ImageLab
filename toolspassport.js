function passportTool(file, canvas){

const ctx = canvas.getContext("2d")

canvas.width = 300
canvas.height = 400

const reader = new FileReader()

reader.onload = function(e){

const img = new Image()

img.onload = function(){

ctx.fillStyle="white"
ctx.fillRect(0,0,canvas.width,canvas.height)

let ratio = Math.min(canvas.width/img.width, canvas.height/img.height)

let newWidth = img.width * ratio
let newHeight = img.height * ratio

let x = (canvas.width - newWidth)/2
let y = (canvas.height - newHeight)/2

ctx.drawImage(img,x,y,newWidth,newHeight)

}

img.src = e.target.result

}

reader.readAsDataURL(file)

}