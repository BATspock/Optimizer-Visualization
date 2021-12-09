function exponential() {
    var arr = [];
    for (let i = 0; i < 100; i+=0.5) {
        var temp = []
        for (let j = 0;j< 100;j+=0.5){
            temp.push((Math.pow(i,2)+Math.pow(j,2))/100);
        }
        arr.push(temp);
    }
    console.log(arr.length);
    return arr;
}

var data = exponential();
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