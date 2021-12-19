var x_val = [];
var y_val = [];
var z_val = [];
var c = [];

function loss_function(x, y) {
    return x*Math.exp(-1*Math.pow(x,2) - Math.pow(y,2));
}

let X = 0.1;
let Y = -0.3;

x_val.push(X);
y_val.push(Y);
z_val.push(loss_function(X, Y));

let learning_rate  = 0.001;

for (let i = 0;i < 10000;i++) {
    X = X - (learning_rate*(-2*X+1)*loss_function(X,Y));
    Y = Y - (learning_rate*(-2*Y)*loss_function(X,Y));
    x_val.push(X);
    y_val.push(Y);
    z_val.push(loss_function(X, Y));
    c.push(i*0.025);
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

var layout = {
    title: 'Exp descent',
    height: 700,
    width: 700
};

Plotly.newPlot('Div', [gradient_plot])