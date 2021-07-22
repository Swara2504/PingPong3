function setup() {
	canvas = createCanvas(800,400);
	canvas.parent('canvas');
    
	video= createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
	console.log('model Loaded!');
}
