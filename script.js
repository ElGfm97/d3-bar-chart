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


        const dates = dataset.map(item => new Date(item[0]));

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
            .attr('transform', 'translate(40, 400)');

        const gdp = dataset.map(item => item[1]);
        console.log(gdp);
        const yMax = d3.max(gdp);
        const linearScale = d3.scaleLinear().domain([0, yMax]).range([0, height]);
        const yScale = d3.scaleLinear().domain([0, yMax]).range([height, 0]);
        const yAxis = d3.axisLeft(yScale);
        svg.append('g')
            .call(yAxis)
            .attr('id', 'y-axis')
            .attr('transform', 'translate(40, 0)');

        let scaledGDP = gdp.map(function (item) {
                return linearScale(item);
            });

            d3.select('svg')
                .selectAll('rect')
                .data(scaledGDP)
                .enter()
                .append('rect')
                .attr('data-date', function (d, i) {
                        return dataset[i][0];
                })
                .attr('data-gdp', function (d, i) {
                        return dataset[i][1];
                })
                .attr('class', 'bar')
                .attr('x', function (d, i) {
                        return xScale(dates[i]);
                })
                .attr('y', function (d) {
                        return height - d;
                })
                .attr('width', barWidth)
                .attr('height', function (d) {
                        return d;
                })
                .style('fill', '#00FA9A')
                .attr('transform', 'translate(40, 0)')
        });




