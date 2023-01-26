let grey1, grey2;
let slider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(BEVEL);
    grey1 = color('#a5b0bc');
    grey2 = color('#9d9cd3');
    slider = createSlider(10, 90, 45);
    slider.position(10,windowHeight - 40);
    slider.style("width", "200px");
    slider.input(draw);
}
function draw() {
    background(180);
    resetMatrix();
    translate(width / 2, height);
    branch(300)
};
function branch(len) { // length of branch to draw
    let maxAngle = slider.value();
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
            branch(len * 0.70);
            pop()
            //brance four
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.4);
            pop()
            // //brance five
            // push();
            // rotate(random(-maxAngle, maxAngle));
            // branch(len * 0.4);
            // pop()
        }
    }
}
