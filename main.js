function setup() {
    canvas=createCanvas(400,400)
canvas.position(700,150)

video=createCapture(VIDEO)
video.size(450,450)
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}

function modelloaded() {
    console.log("modelloaded")
}

function gotposes(result) {
    length=result.length
    console.log(length)
    if (result.length>0) {
        console.log(result)
    }
}