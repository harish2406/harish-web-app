
status = "";
img = "";
objects = [];
function modelLoaded()
{
console.log("MODEL LOADED");
status = true;
objectDetector.detect(video, gotResult);

}


function setup()

{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = " status: Detecting Objects ";
}

function preload()
{
    img = loadImage('dog_cat.jpg');

}

function draw()
{
image(video, 0, 0, 380, 380);
if(status!="")
{
    objectDetector.detect(video, gotResult);
    for(i = 0; i<=objects.length; i++)
    {

        document.getElementById("status").innerHTML="Status: Objects Detected";
        fill("#FF0000");
    
    text(objects[i].label,objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }
}
 
}

function gotResult(error, result)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}