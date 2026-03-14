function convertTool(file, canvas){

const ctx = canvas.getContext("2d")

const reader = new FileReader()

reader.onload = function(e){

const img = new Image()

img.onload = function(){

canvas.width = img.width
canvas.height = img.height

ctx.drawImage(img,0,0)

}

img.src = e.target.result

}

reader.readAsDataURL(file)

}