var zPts = []; 
var xPts = [];
var yPts = [];


for(let x=-10; x<10; x+=0.1) {
  let zTemp = [];
  let yTemp = [];
  let xTemp = [];
  for (let y=-10; y<10; y+=0.1) {
    //zTemp.push(Math.sin(x)*Math.cos(y));
    zTemp.push(Math.sqrt(1+Math.cos(x)*Math.sin(y)));
    yTemp.push(y);
    xTemp.push(x);
  }
  zPts.push(zTemp);
  yPts.push(yTemp);
  xPts.push(xTemp);
}


var x_val = [];
var y_val = [];
var z_val = [];
var c = [];

function loss_function(x, y) {
    return Math.sin(Math.sqrt(1+Math.cos(x)*Math.sin(y)));
}


var function_plot = {
    z: zPts,
    x: xPts,
    y: yPts,
    
    type: 'surface',
    
    contours: {
        z: {
          show:true,
          usecolormap: true,
          highlightcolor:"#42f462",
          project:{z: true}
        }
      }
};

var plotData = [function_plot];

var layout = {
    title: 'Combined CosX SinY',
    height: 800,
    width: 1500,

    scene: {
      xaxis: { title: 'X' },
      yaxis: { title: 'Y' },
      zaxis: { title: 'Z' },
      aspectratio: {
        x: 1.2,
        y: 1.2,
        z: 0.75
      }
    },
    autosize: true,
    margin: {
      l: 50,
      r: 0,
      b: 0,
      t: 30,
      pad: 0
    },
    //yaxis: {title: 'Simple Contour Plot Axis', range: [-20, 20]},
    //yaxis2: {title: 'Line and Scatter Plot Axis', range: [-20, 20]}
};

Plotly.newPlot('plotDiv', plotData, layout);

