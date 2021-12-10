var zPts = []; 
var xPts = [];
var yPts = [];


for(x=-10; x<10; x+=0.1) {
  let zTemp = [];
  let yTemp = [];
  let xTemp = [];
  for (y=-10; y<10; y+=0.1) {
    zTemp.push(Math.exp(Math.sin(Math.pow(x,2)+Math.pow(y,2))));
    //zTemp.push(Math.pow(x,2)/100+Math.pow(y,2)/100);
    yTemp.push(y);
    xTemp.push(x);
  }
  zPts.push(zTemp);
  yPts.push(yTemp);
  xPts.push(xTemp);
  }

var data = [{
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
  }];
  
  var layout = {
    title: 'My Plot',
    autosize: false,  
    width: 1000,
    height: 1000,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };
  
  Plotly.newPlot('theDiv', data, layout);