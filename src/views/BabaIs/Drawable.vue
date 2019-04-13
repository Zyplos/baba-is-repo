<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Drawable</span>
    </h1>
    <div class="baba-content">
      <canvas width="350" height="300"></canvas>
    </div>
  </main>
</template>

<script>
//https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse
export default {
  mounted() {
    var canvas,
      ctx,
      flag = false,
      prevX = 0,
      currX = 0,
      prevY = 0,
      currY = 0,
      dot_flag = false;

    var x = "black",
      y = 2;

    function init() {
      canvas = document.querySelector("canvas");
      ctx = canvas.getContext("2d");
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, w, h);

      canvas.addEventListener(
        "mousemove",
        function(e) {
          findxy("move", e);
        },
        false
      );
      canvas.addEventListener(
        "mousedown",
        function(e) {
          findxy("down", e);
        },
        false
      );
      canvas.addEventListener(
        "mouseup",
        function(e) {
          findxy("up", e);
        },
        false
      );
      canvas.addEventListener(
        "mouseout",
        function(e) {
          findxy("out", e);
        },
        false
      );
    }

    function draw() {
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(currX, currY);
      ctx.strokeStyle = x;
      ctx.lineWidth = y;
      ctx.stroke();
      ctx.closePath();
    }

    function findxy(res, e) {
      if (res == "down") {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
          ctx.beginPath();
          ctx.fillStyle = x;
          ctx.fillRect(currX, currY, 2, 2);
          ctx.closePath();
          dot_flag = false;
        }
      }
      if (res == "up" || res == "out") {
        flag = false;
      }
      if (res == "move") {
        if (flag) {
          prevX = currX;
          prevY = currY;
          currX = e.clientX - canvas.offsetLeft;
          currY = e.clientY - canvas.offsetTop;
          draw();
        }
      }
    }

    init();
  }
};
</script>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $wheat;
  color: $wheat;
  text-transform: uppercase;
}
canvas {
  border: 1px solid red;
}
</style>
