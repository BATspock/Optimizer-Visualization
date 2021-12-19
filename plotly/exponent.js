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

var layout = {
    title: 'Exponetial plot',
    scene: {camera: {eye: {x: 1.87, y: 0.88, z: -0.64}}},
    autosize: true,
    width: 700,
    height: 700,
    margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
    }
};

Plotly.newPlot('myDiv', [function_plot], layout);