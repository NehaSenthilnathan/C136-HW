objects = [];
status = "";

function setup(){
    canvas = createCanvas(380, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 480);
    video.hide();
}

function modelLoaded(){
    console.log("Modelloaded");
    status = true;
}

function start(){
    objectDetector = ml5.objectDetector('cocossd, modelLoaded');
    document.getElementById("status").innerHTML = "Status: Object Detected";
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}