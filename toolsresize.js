function resizeTool(file, canvas, width=500, height=500){

const ctx = canvas.getContext("2d")

canvas.width = width
canvas.height = height

const reader = new FileReader()

reader.onload = function(e){

const img = new Image()

img.onload = function(){

ctx.clearRect(0,0,width,height)
ctx.drawImage(img,0,0,width,height)

}

img.src = e.target.result

}

reader.readAsDataURL(file)

}