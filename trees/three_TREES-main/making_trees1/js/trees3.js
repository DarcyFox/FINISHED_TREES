let grey1, grey2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(BEVEL);
    grey1 = color('#a5b0bc');
    grey2 = color('#9d9cd3');
 
}
function draw() {
    background(100);
    resetMatrix();
    translate(width /2, height);
    branch(450)
    resetMatrix();
    translate(width*0.75, height);
    branch(200)
    resetMatrix();
    translate(width*0.25, height + 15);
    branch(70)
};
function branch(len) { // length of branch to draw
    let maxAngle = 75;
    strokeWeight(map(len, 20, 300, 1, 20));
    stroke(lerpColor(grey1, grey2, random(0.5)));
    line(0, 0, 0, -len);
    translate(0, - len);
    if (len > 10) {
        console.log(len)
        if (len < 15) { 
            //leaves
            let r = 200 + random(-20, 20);
            let g = 200 + random(-20, 20);
            let b = 200 + random(-20, 20);
            fill(r, g, b, 70);
            let size = 15 + random(15);
            noStroke();
            // triangle(-size/2, 0, size/2, 0, 0, -size);
            beginShape();
            let radius = random(10, 30);
            for (let i = 45; i < 135; i++) {
                let x = radius * cos(i);
                let y = radius * sin(i);
                vertex(x, y);
            }
            for (let i = 135; i > 45; i--) {
                let x = radius * cos(i)
                let y = radius * sin(-i);
                vertex(x, y);
            }
            endShape(CLOSE)

        } else {
            //branch one
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.5);
            pop()
            //branch two 
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.67);
            pop()
            //brance three
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.7);
            pop()
            //brance four
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.4);
            pop()
        
        }
    }

}
