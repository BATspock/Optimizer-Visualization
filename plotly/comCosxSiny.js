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

let X = 0.5;
let Y = 1.2;

x_val.push(X);
y_val.push(Y);
z_val.push(loss_function(X, Y));

let learning_rate  = 0.001;

for (let i = 0;i < 10000;i++) {
  Xold = X;
  Yold = Y;
    X = Xold - (learning_rate*(-1*(Math.sin(Xold)*Math.sin(Yold)/(2*Math.sqrt(1+ Math.cos(Xold)*Math.sin(Yold))))));
    Y = Yold - (learning_rate*(Math.cos(Xold)*Math.cos(Yold)/(2*Math.sqrt(1+ Math.cos(Xold)*Math.sin(Yold)))));
    x_val.push(X);
    y_val.push(Y);
    z_val.push(loss_function(X, Y));
    c.push(i*0.001);
}


var gradient_plot = {
    type: 'scatter3d',
    mode: 'lines+markers',
    
    x: x_val,
    y: y_val,
    z: z_val,
    
    line: {
      width: 6,
      color: c,
      colorscale: "Viridis"},
    
    marker: {
      size: 3.5,
      color: c,
      colorscale: "Greens",
      cmin: -20,
      cmax: 50
    }
};

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

var plotData = [gradient_plot, function_plot];

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

