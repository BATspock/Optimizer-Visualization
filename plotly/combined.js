var zPts = []; 
var xPts = [];
var yPts = [];


for(x=-10; x<10; x+=0.1) {
  let zTemp = [];
  let yTemp = [];
  let xTemp = [];
  for (y=-10; y<10; y+=0.1) {
    //zTemp.push(Math.sin(x)*Math.cos(y));
    zTemp.push(Math.pow(x,2)/100+Math.pow(y,2)/100);
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
    return (Math.pow(x,2)/100+Math.pow(y,2)/100);
}

let X = 8;
let Y = 10;

x_val.push(X);
y_val.push(Y);
z_val.push(loss_function(X, Y));

let learning_rate  = 0.001;

for (let i = 0;i < 100000;i++) {
    X = X - (learning_rate*(X/50));
    Y = Y - (learning_rate*(Y/50));
    x_val.push(X);
    y_val.push(Y);
    z_val.push(loss_function(X, Y));
    c.push(i*0.00025);
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
    title: 'Combined plot',
    height: 700,
    width: 700,
    yaxis: {title: 'Simple Contour Plot Axis', range: [-20, 20]},
    yaxis2: {title: 'Line and Scatter Plot Axis', range: [-20, 20]}
};

Plotly.newPlot('plotDiv', plotData, layout);

