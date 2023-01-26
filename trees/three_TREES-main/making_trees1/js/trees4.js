let grey1, grey2; //naming colour variables to use later when its loaded. 
let count = 0; // setting count to start at 0 
let movingBro = true; //setting movingBro as a boolgan 
function setup() {
    createCanvas(windowWidth, windowHeight); // setting the canvs size
    angleMode(DEGREES); //working in degrees
    strokeJoin(ROUND); //making sure the join of the branches are rounded, looks beter 
    grey1 = color('#a5b0bc'); //setting the colours 
    grey2 = color('#9d9cd3');
    frameRate(10) // sitting how many frames 
}
function draw() {
    background(20); //setting background colour - a very very dark grey. 
    resetMatrix();
    translate(width * 0.15, height);
    branch(310)
    resetMatrix();
    translate(width * 0.25, height);
    branch(225)
    resetMatrix();
    translate(width * 0.35, height);
    branch(180)
    resetMatrix();
    translate(width * 0.45, height);
    branch(150)
    resetMatrix();
    translate(width * 0.55, height);
    branch(100)
    resetMatrix();
    translate(width * 0.65, height);
    branch(60)
    resetMatrix();
    translate(width * 0.75, height);
    branch(30)
    //upside down ones yay
    resetMatrix();
    translate(width * 0.85, 0);
    rotate(180);
    branch(310)
    resetMatrix();
    translate(width * 0.75, 0);
    rotate(180);
    branch(225)
    resetMatrix();
    translate(width * 0.65, 0);
    rotate(180);
    branch(180)
    resetMatrix();
    translate(width * 0.55, 0);
    rotate(180);
    branch(150)
    resetMatrix();
    translate(width * 0.45, 0);
    rotate(180);
    branch(100)
    resetMatrix();
    translate(width * 0.35, 0);
    rotate(180);
    branch(60)
    resetMatrix();
    translate(width * 0.25, 0);
    rotate(180);
    branch(30)
    //setting so it doesnt go past 27 and if it does change the variable movingBro to flase 
    if (count == 27) {
        movingBro = false;
    } else if (count == -27) { //this makes sure it doesnt go past -27 and if it does changes movingBro to true 
        movingBro = true;
    }
    if (movingBro == true) { //setting it so when it changes to true it adds 1 to the count. this should keep going till it changes to true
        count++;
    } else if (movingBro == false) { //when it changes to flase it then takes 1 away each time, till it changes to true again. 
        count--;
    }

};

function branch(len) { // length of branch to draw
    let maxAngle = count; //setting the maxangle to the count. 
    strokeWeight(map(len, 20, 300, 1, 20)); // this maps the size so it getd thinner the shorter the branches. 
    stroke(lerpColor(grey1, grey2, random(0.5))); //has a rnadom amount between the two colours. 
    line(0, 0, 0, -len);
    translate(0, - len); //setting the drawing to the end of the line so it draws off the line not the same place.
    if (len > 20) {
        //branch one
        push();
        rotate(random(maxAngle / 2,maxAngle));
        branch(len * 0.82);
        pop()
        //branch two 
        push();
        rotate(random( maxAngle / 2,maxAngle));
        branch(len * 0.67);
        pop()
        // //brance three
        push();
        rotate(random(maxAngle / 6, maxAngle));
        branch(len * 0.4);
        pop()

    }

}