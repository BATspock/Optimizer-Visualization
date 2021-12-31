var zPts = []; 
var xPts = [];
var yPts = [];


for(x=-10; x<10; x+=0.1) {
  let zTemp = [];
  let yTemp = [];
  let xTemp = [];
  for (y=-10; y<10; y+=0.1) {
    //zTemp.push(Math.sin(x)*Math.cos(y));
    zTemp.push(Math.sqrt(1+Math.cos(x)*Math.sin(y)));
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
    title: 'Trignometric plot',
    scene: {camera: {eye: {x: 1.87, y: 0.88, z: -0.64}}},
    autosize: true,
    width: 1100,
    height: 800,
    margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
    }
};

Plotly.newPlot('myDiv', [function_plot], layout);