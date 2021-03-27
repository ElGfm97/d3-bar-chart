let dataset = [];
let width = 800,
    height = 400;

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(
    response => response.json()).then(
    data => {
        for (let i = 0; i < data.data.length; i++) {
            dataset.push(data.data[i]);
        }

        let barWidth = width / dataset.length;

        const svg = d3
            .select('#chart')
            .append('svg')
            .attr('width', width + 100)
            .attr('height', height + 60);


        const dates = dataset.map(function (item) {
            return new Date(item[0]);
        });

        const xMax = new Date(d3.max(dates));
        const xMin = new Date(d3.min(dates));
        // xMax.setMonth(xMax.getMonth() + 3);
        const xScale = d3
            .scaleTime()
            .domain([xMin, xMax])
            .range([0, width]);

        const xAxis = d3.axisBottom().scale(xScale);

        svg.append('g')
            .call(xAxis)
            .attr('id', 'x-axis')
            .attr('transform', 'translate(30, 400)');

    });
