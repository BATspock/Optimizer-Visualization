// Set SVG width, height, and padding
const w = 500;
const h = 500;
const padding = 60;


d3.csv('https://raw.githubusercontent.com/naveenv92/python-science-tutorial/master/intro/Absorbance_Data.csv', function (d) {
return [
  +d['Wavelength'],
  +d['Sample_1_Absorbance'],
  +d['Sample_2_Absorbance']
]
}).then(plot_data);

// Data plotting function
function plot_data(data) {
    // Set axis limits
    const xMin = 400;
    const xMax = 950;
    const yMin = 0;
    const yMax = 2;

    const xScale = d3.scaleLinear()
                    .domain([xMin, xMax])
                    .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                    .domain([yMin, yMax])
                    .range([h - padding, padding]);

    let data_in_range = [];

    data.forEach(function (e) {
        if (e[0] >= xMin && e[0] <= xMax) {
        data_in_range.push(e);
        }
    });

    const svg = d3.select('#plot_area')
              .append('svg')
              .attr('width', w)
              .attr('height', h);

    svg.append('path')
    .datum(data_in_range)
    .attr('stroke', 'black')
    .attr('stroke-width', 2)
    .attr('fill', 'none')
    .attr('d', d3.line()
                .x((d) => xScale(d[0]))
                .y((d) => yScale(d[1])))

    svg.append('path')
    .datum(data_in_range)
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2)
    .attr('fill', 'none')
    .attr('d', d3.line()
                    .x((d) => xScale(d[0]))
                    .y((d) => yScale(d[2])));

    

    // Add x-axis
    svg.append('g')
    .style('font-size', '12px')
    .attr('transform', 'translate(0,' + (h - padding) + ')')
    .call(d3.axisBottom(xScale));
    // Add y-axis
    svg.append('g')
    .style('font-size', '12px')
    .attr('transform', 'translate(' + padding + ',0)')
    .call(d3.axisLeft(yScale));


    
  }


