var layout = {
    title: 'Combined CosX SinY',
    height: 800,
    width: 1500,

    scene: {
      xaxis: { title: 'X' },
      yaxis: { title: 'Y' },
      zaxis: { title: 'Z' },
      aspectratio: {
        x: 1.2,
        y: 1.2,
        z: 0.75
      }
    },
    autosize: true,
    margin: {
      l: 50,
      r: 0,
      b: 0,
      t: 30,
      pad: 0
    },
    //yaxis: {title: 'Simple Contour Plot Axis', range: [-20, 20]},
    //yaxis2: {title: 'Line and Scatter Plot Axis', range: [-20, 20]}
};

exports.get = function(){
    return layout;
}