var x_val = [];
var y_val = [];
var z_val = [];

function loss_function(x, y) {
    return (Math.pow(x,2)/100+Math.pow(y,2)/100);
}

let X = 10;
let Y = 10;

x_val.push(X);
y_val.push(Y);
z_val.push(loss_function(X, Y));

let learning_rate  = 0.001;

for (let i = -10;i < 10;i+=0.1) {
    X = X - learning_rate*(X/50);
    Y = Y - learning_rate*(Y/50);
    x_val.push(X);
    y_val.push(Y);
    z_val.push(loss_function(X, Y));
}


