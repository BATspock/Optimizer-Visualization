function trignometric() {
    var arr = [];
    for (let i = 0; i < 500; i++) {
        var temp = []
        for (let j = 0;j<500;j++){
            temp.push(Math.cos( i * Math.PI / 180)* Math.sin(j * Math.PI /180))
        }
        arr.push(temp);
    }
    console.log(arr.length);
    return arr;
}

var data = trignometric();
//console.log(data);
Plotly.newPlot('chart', [{
    z: data,
  type: 'surface',
  contours: {
    z: {
      show:true,
      usecolormap: true,
      highlightcolor:"#42f462",
      project:{z: true}
    }
  }
}]);

var layout = {
    title: 'Cos(x)*Sin(y)',
    scene: {camera: {eye: {x: 1.87, y: 0.88, z: -0.64}}},
    autosize: false,
    width: 700,
    height: 700,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };

