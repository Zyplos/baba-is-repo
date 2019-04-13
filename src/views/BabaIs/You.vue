<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-spectrum">You</span>
    </h1>
    <div class="baba-content">
      <video
        id="video"
        width="640"
        height="480"
        autoplay
        ref="videoElement"
      ></video>
      <h3>{{ errorMsg }}</h3>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      errorMsg: ""
    };
  },
  mounted() {
    //https://davidwalsh.name/browser-camera
    const video = document.getElementById("video");
    const vm = this;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function(stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(() => {
          vm.errorMsg = "Alright. I guess Baba isn't you.";
        });
    } else {
      this.errorMsg = "Sorry, seems Baba cannot be you. Your browser is old.";
    }
  }
};
</script>

<style scoped lang="scss">
video {
  width: 100%;
  max-height: 100%;
}
//https://daneden.github.io/animate.css/
.text-spectrum {
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hue 4s infinite linear;
  -webkit-text-stroke: 0 !important;
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>
