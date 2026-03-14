let currentTool="passport"

const upload=document.getElementById("upload")
const canvas=document.getElementById("canvas")

function openTool(tool){

currentTool=tool

}

upload.addEventListener("change",function(){

const file=upload.files[0]

if(!file) return

if(currentTool==="passport"){
passportTool(file,canvas)
}

if(currentTool==="resize"){
resizeTool(file,canvas,500,500)
}

if(currentTool==="convert"){
convertTool(file,canvas)
}

})

document.getElementById("download").onclick=function(){

const link=document.createElement("a")

link.download="image.png"
link.href=canvas.toDataURL()

link.click()

}