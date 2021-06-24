let sketch = function (p) {
    //Position of left hand side of floor
    let base1;

    //Position of right hand side of floor
    let base2;
    //Length of floor
    //let baseLength;

    // Variables related to moving ball
    let position;
    let velocity;
    let r = 6;
    let speed = 6;

    p.setup = function () {
        p.createCanvas(710, 400);

        p.fill(128);
        base1 = p.createVector(0, p.height - 150);
        base2 = p.createVector(p.width, p.height);
        //createGround();

        //start ellipse at middle top of screen
        position = p.createVector(p.width / 2, 0);

        //calculate initial random velocity
        velocity = p5.Vector.random2D();
        velocity.mult(speed);
    };

    p.draw = function () { //draw background
        p.fill(0, 12);
        p.noStroke();
        p.rect(0, 0, p.width, p.height);

        //draw base
        p.fill(200);
        p.quad(base1.x, base1.y, base2.x, base2.y, base2.x, p.height, 0, p.height);

        //calculate base top normal
        let baseDelta = p5.Vector.sub(base2, base1);
        baseDelta.normalize();
        let normal = p.createVector(-baseDelta.y, baseDelta.x);
        let intercept = p5.Vector.dot(base1, normal);

        //draw ellipse
        p.noStroke();
        p.fill(255);
        p.ellipse(position.x, position.y, r * 2, r * 2);

        //move ellipse
        position.add(velocity);

        //normalized incidence vector
        incidence = p5.Vector.mult(velocity, -1);
        incidence.normalize();

        // detect and handle collision with base
        if (p5.Vector.dot(normal, position) > intercept) {
            //calculate dot product of incident vector and base top
            let dot = incidence.dot(normal);

            //calculate reflection vector
            //assign reflection vector to direction vector
            velocity.set(
                2 * normal.x * dot - incidence.x,
                2 * normal.y * dot - incidence.y,
                0
            );
            velocity.mult(speed);

            // draw base top normal at collision point
            p.stroke(255, 128, 0);
            p.line(
                position.x,
                position.y,
                position.x - normal.x * 100,
                position.y - normal.y * 100
            );
        }
        //}

        // detect boundary collision
        // right
        if (position.x > p.width - r) {
            position.x = p.width - r;
            velocity.x *= -1;
        }
        // left
        if (position.x < r) {
            position.x = r;
            velocity.x *= -1;
        }
        // top
        if (position.y < r) {
            position.y = r;
            velocity.y *= -1;

            //randomize base top
            base1.y = p.random(p.height - 100, p.height);
            base2.y = p.random(p.height - 100, p.height);
        }
    };
};