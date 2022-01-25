var zPts = []; 
var xPts = [];
var yPts = [];


for(x=-5; x<5; x+=0.1) {
  let zTemp = [];
  let yTemp = [];
  let xTemp = [];
  for (y=-5; y<5; y+=0.1) {
    //zTemp.push(Math.sin(x)*Math.cos(y));
    zTemp.push(x*Math.exp(-1*Math.pow(x,2) - Math.pow(y,2)));
    yTemp.push(y);
    xTemp.push(x);
  }
  zPts.push(zTemp);
  yPts.push(yTemp);
  xPts.push(xTemp);
}


var x_val = []
var y_val = [];
var z_val = [];
var c = [];


var x_val = [];
var y_val = [];
var z_val = [];
var c = [];

function loss_function(x, y) {
    return x*Math.exp(-1*Math.pow(x,2) - Math.pow(y,2));
}

let X = 0.3;
let Y = -0.2;

x_val.push(X);
y_val.push(Y);
z_val.push(loss_function(X, Y));

let learning_rate  = 0.001;

for (let i = 0;i < 1500;i++) {
  Xold = X; Yold = Y;
    X = Xold - (learning_rate*(-2*(Xold*Xold)+1));
    Y = Yold - (learning_rate*(-2*Xold*Yold));
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
    title: 'Combined plot Exp',
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

