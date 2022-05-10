
img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas= createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Objects Detected";
}
 function draw() {
     image(video, 0, 0, 380, 380);

     if(status !="")
     {
         r = r
         objectDetector,detect(video, gotResult);
         for(i = 0; i< objects.length; i++)
         {
           document.getElementById("status").innerHTML ="Status: Object"

           fill("#FF0000");
           percent = floor(objects[i].confidence * 100);
           text()
         }

     fill("#FF0000");
     text("Dog", 45, 75);
     noFill();
     stroke("#FF0000");
     rect(30, 60, 450, 350);

     fill("#FF0000");
     text("Cat", 320, 120);
     noFill();
     stroke("#FF0000");
     rect(300, 90, 270, 320);
         }}
 

 function modelLoaded() {
     console.log("Model Loaded!")
     status = true;
     objectDetector.detect(video, gotResult);
 }

 function gotResult(error, results) {
     if(error) {
         console.log(error);
     }
     console.log(results);
     objects = results;
 }