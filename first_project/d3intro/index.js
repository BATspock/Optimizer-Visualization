d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Updataed h1 tag');

d3.select('body').append('p').text('First para');

d3.selectAll('p').style('color', 'blue');