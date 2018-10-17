---
layout: post_3d
title: Autoencoders and TDA
tags:
 - topology
 - machine_learning
 - autoencoders
---

Here are some results for the encoding of MNIST with rotations.

The controls are:
 - **[0, 1, ..., 9, 'backspace']**: available label keys
 - **[NUM_1, ..., NUM_9]**: select a cycle
 - **NUM_0**: show all cycles
 - **C**: show/hide cycles
 - **K**: show/hide killing simplices
 - **I**: show/hide images on selected cycles
 - **D**: switch between source images and decoded images
 - **F**: switch between all points and filtered points used for analysis
 - **+,-**: change sprites' scale
 - **B**: invert background color
 - **G**: show/hide grid

<script type="text/javascript"> {% include visualization/three.js %} </script>
<script type="text/javascript"> {% include visualization/OrbitControls.js %} </script>
<script type="text/javascript"> {% include visualization/DragControls.js %} </script>
<script type="text/javascript"> {% include visualization/utils.js %} </script>
<script type="text/javascript"> {% include visualization/main.js %} </script>

<div class='canvas-holder' id='ch1'>
  <div class="logs"></div>
  <div class="info"></div>
  <img src="" alt="Persistent cycles" name="plot" class='plot' width="100px" height="100px"
       style="position: absolute; bottom: 0; right: 0; z-index: 1"
       onmouseover="plot.width='500';plot.height='500';"
       onmouseout="plot.width='100';plot.height='100';"/>
  <script>
    let anim1 = function() {};
    document.currentScript.parentElement.clientHeight = document.currentScript.parentElement.clientWidth;
    console.log(document.currentScript.parentElement);
    document.currentScript.parentElement.addEventListener('mousedown', function() {anim1 = visualize_everything('/data/mnist.json', 'ch1');}, false);
  </script>
</div>

Another visualization:


<script>
    let animate = function () {
        requestAnimationFrame(animate);
        anim1();
        //anim2();
    };
    animate();
</script>