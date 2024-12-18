const canvasSketch = require('canvas-sketch');
const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");
const Tweakpane = require("tweakpane");

const settings = {
  dimensions: [ 1000, 1000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);



    

    const times   = 9;
    
    for (let i = 0; i < times; i++) {

      for (let j = 0; j < times; j++) {
    
    const gap     = 100; 
    
    const cx      = 100 + (gap * i);
    const cy      = 100 + (gap * j);
    const radius  = 30; 
    const sAngle  = 0;
    const eAngle  = Math.PI * 2;
   
    context.strokeStyle = "gold";  
    context.lineWidth = 20;
    context.beginPath();
    context.arc(cx, cy, radius, sAngle, eAngle);
    context.stroke();

 


    if (Math.random() > 0.2) {
    context.strokeStyle = "gold";  
    context.lineWidth = 4;
    context.beginPath();
    context.arc(cx, cy, radius * 1.5, -sAngle, eAngle);
    context.stroke();

 
    

 
    }

    }
    
    }

      

    

    
    
   


  };
};

canvasSketch(sketch, settings);


