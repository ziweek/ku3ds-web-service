import React from "react";

export default function App() {
  React.useEffect(() => {
    const STARS = 200;
    const SPEED = 15;
    const FILL_STYLE = "#0505050";
    const STROKE_STYLE = "#FFF";

    // Star Object
    const Star = function (x, y, speed) {
      // properties
      this.x = x;
      this.y = y;
      this.v = 0;
      this.speed = speed;
      // render method
      this.render = function (ctx, x, y, radius) {
        let dx = this.x - x;
        let dy = this.y - y;
        let len = dx * dx + dy * dy;
        let nx, ny;
        if (len != 0) {
          len = Math.sqrt(len);
          if (len > radius) {
            return false;
          }
          nx = dx / len;
          ny = dy / len;
        } else {
          nx = 1;
          ny = 0;
        }
        let tmpX = this.x;
        let tmpY = this.y;

        let w = len / radius;
        this.x += nx * this.speed * w;
        this.y += ny * this.speed * w;

        ctx.strokeStyle = STROKE_STYLE;
        ctx.beginPath();
        ctx.moveTo(tmpX, tmpY);
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = w * 5;
        ctx.stroke();
        return true;
      };
    };

    // Hyperspace object
    const Hyperspace = function (canvas, starCount = STARS, speed = SPEED) {
      canvas.width = 480;
      canvas.height = 640;

      let ctx = canvas.getContext("2d");

      let stars = [];
      let loop = function () {
        ctx.fillStyle = FILL_STYLE;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        while (stars.length < starCount) {
          // create stars
          stars.push(
            new Star(
              Math.random() * canvas.width,
              Math.random() * canvas.height,
              speed
            )
          );
        }
        for (let i = 0; i < stars.length; ++i) {
          // iterate all stars
          if (
            !stars[i].render(ctx, canvas.width * 0.5, canvas.height * 0.5, 380)
          ) {
            // render and test star
            stars.splice(i--, 1); // remove star
          }
        }
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    };
    let canvas = document.querySelector("#hyperspace");
    new Hyperspace(canvas, 300, 15);
    canvas.style.width = "100%";
    canvas.style.height = "100%";
  }, []);

  return (
    <>
      <canvas id="hyperspace"></canvas>
    </>
  );
}
