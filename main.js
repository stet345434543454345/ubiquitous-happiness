song1 = "";
song2 = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function preload() {
    song1=loadSound("music.mp3");
    song2=loadsound("deysey")
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}
function draw() {
    image(video, 0, 0, 600, 500);
}
function modeLoaded() {
    console.log("posenet ready");
}
function gotPoses() {
    if (results.length > 0) {
        console.log(results);
        leftwristx = results[0].pose.leftwrist.x;
        leftwristy = results[0].pose.leftwrist.y;
        console.log("left wrist x is - ", leftwristx, "left wrist y is - ", leftwristy);
        rightwristx = results[0].pose.rightwrist.x;
        rightwristy = results[0].pose.rightwrist.y;
        console.log("right wrist x is - ", rightwristx, "right wrist y is - ", rightwristy);
    }
}
