img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
function preload() {
	img = loadImage("mario05.png");
}

function setup() {
    canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log('Model Loaded!');
}

function draw() {
	background("D3D3D3");
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}
	if (noseX > 300)
	{
		marioX = marioX + 1;
	}
	if(noseY < 150)
	{
		marioY = marioY - 1;
	}
	
	image(img,marioX,marioY, 40, 70);
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(result);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}





