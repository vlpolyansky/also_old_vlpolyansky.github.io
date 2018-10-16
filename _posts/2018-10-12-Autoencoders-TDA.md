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

<div id='canvas-holder' style="position: relative; width: inherit;" markdown="1">
  <div id="logs"></div>
  <div id="info"></div>
  <img src="" alt="Persistent cycles" name="plot" id="plot" width="100px" height="100px"
       style="position: absolute; bottom: 0; right: 0; z-index: 1"
       onmouseover="plot.width='500';plot.height='500';"
       onmouseout="plot.width='100';plot.height='100';">
</div>
<script type="text/javascript"> {% include visualization/three.js %} </script>
<script type="text/javascript"> {% include visualization/OrbitControls.js %} </script>
<script type="text/javascript"> {% include visualization/DragControls.js %} </script>
<script type="text/javascript"> {% include visualization/utils.js %} </script>
<script type="text/javascript" data-json="/data/mnist.json"> {% include visualization/main.js %} </script>