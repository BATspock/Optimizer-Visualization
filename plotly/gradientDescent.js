var x_val = [];
var y_val = [];
var z_val = [];
var c = [];

function loss_function(x, y) {
    return (Math.pow(x,2)/100+Math.pow(y,2)/100);
}

let X = 10;
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

Plotly.newPlot('myDiv', [{
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
    }},                  
  ]);
