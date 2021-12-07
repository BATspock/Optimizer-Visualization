function getData() {
    var arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Array(10).fill().map(()=>Math.random()))
    }
    return arr;
}

var data = getData();

Plotly.newPlot('chart', [{
    z: data,
    type: 'surface'
}])