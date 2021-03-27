let dataset = [];
const w = 800;
const h = 400;
const padding = 30;

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(
    response => response.json()).then(
    data => {
        for(let i = 0; i < data.data.length; i++) {
            dataset.push(data.data[i]);
        }
        /*
        const scale = d3.scaleLinear();
        const minX = d3.min(dataset, (d) => d[1]);
        const maxX = d3.max(dataset, (d) => d[1]);
        const minY = dataset[0][0];
        const maxY = dataset[dataset.length - 1][0];

        const xScale = d3.scaleLinear().domain([0, maxX]).range([padding, w - padding]);
        const yScale = d3.scaleLinear().domain([0, maxY]).range([h - padding, padding]);


        d3.select('#chart-container')
            .selectAll('div')
            .data(dataset)
            .enter()
            .append('div')
            .attr("class", "bar")
            .style("height", (d) => d[1] + "px");
        const svg = d3.select('#chart-container')
            .append('svg')
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            // Add your code below this line
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(i * 200))
            .attr("y", (d, i) => yScale(h - d[1]))
            .attr("width", 3)
            .attr("height", (d, i) => (d[1]))
            .attr("fill", "navy")
            .append("title")
            .text((d) => d[0]);

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .attr("x", (d, i) => xScale(i * 40))
            .attr("y", (d, i) => yScale(h - d[1] - 6))
            .text((d, i) => d[1]); */

          const svg = d3.select('#chart')
              .append('svg')
              .attr('width', w)
              .attr('height', h);


    });
