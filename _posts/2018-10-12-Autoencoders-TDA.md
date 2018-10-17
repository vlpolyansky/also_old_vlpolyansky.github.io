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

<div class='canvas-holder' id='ch1'>
  <div class="logs"></div>
  <div class="info"></div>
  <div class="preview">Click to enable the view</div>
  <img src="" alt="Persistent cycles" class='plot' width="100px" height="100px"
       style="position: absolute; bottom: 0; right: 0; z-index: 1"
       onmouseover="width='500';height='500';"
       onmouseout="width='100';height='100';"/>
  <script>
      prepareCanvasHolder('ch1', '/data/mnist.json');
  </script>
</div>

Another visualization (many points, takes some time to load):

<div class='canvas-holder' id='ch2'>
  <div class="logs"></div>
  <div class="info"></div>
  <div class="preview">Click to enable the view</div>
  <img src="" alt="Persistent cycles" class='plot' width="100px" height="100px"
       style="position: absolute; bottom: 0; right: 0; z-index: 1"
       onmouseover="width='500';height='500';"
       onmouseout="width='100';height='100';"/>
  <script>
      prepareCanvasHolder('ch2', '/data/mnist2.json');
  </script>
</div>
