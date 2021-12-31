var zPts = []; 
var xPts = [];
var yPts = [];


for(x=-10; x<10; x+=0.1) {
  let zTemp = [];
  let yTemp = [];
  let xTemp = [];
  for (y=-10; y<10; y+=0.1) {
    //zTemp.push(Math.sin(x)*Math.cos(y));
    zTemp.push(Math.sin(Math.sqrt(x*x+y*y)));
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
    return Math.sin(Math.sqrt(x*x+y*y));
}

let X = -0.8;
let Y = 0.8;

x_val.push(X);
y_val.push(Y);
z_val.push(loss_function(X, Y));

let learning_rate  = 0.001;

for (let i = 0;i < 1000;i++) {
  Xold = X;
  Yold = Y;
    X = Xold - (learning_rate*(Xold*Math.cos(Math.sqrt(Xold*Xold+Yold*Yold))/Math.sqrt(Xold*Xold + Yold*Yold)));
    Y = Yold - (learning_rate*(Yold*Math.cos(Math.sqrt(Xold*Xold+Yold*Yold))/Math.sqrt(Xold*Xold + Yold*Yold)));
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
    height: 700,
    width: 1000
    //yaxis: {title: 'Simple Contour Plot Axis', range: [-20, 20]},
    //yaxis2: {title: 'Line and Scatter Plot Axis', range: [-20, 20]}
};

Plotly.newPlot('plotDiv', plotData, layout);

