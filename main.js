 var marijuanaMentions = [
    {
        "count": 4,
        "percentage": 0.00001709113716436585,
        "total": 23403943,
        "year": "1998"
    },
    {
        "count": 1,
        "percentage": 0.0000036412877166402338,
        "total": 27462812,
        "year": "2003"
    },
    {
        "count": 2,
        "percentage": 0.00000856674757816975,
        "total": 23346083,
        "year": "2004"
    },
    {
        "count": 4,
        "percentage": 0.000014438620306085754,
        "total": 27703478,
        "year": "2005"
    },
    {
        "count": 4,
        "percentage": 0.00001700958775180409,
        "total": 23516149,
        "year": "2006"
    },
    {
        "count": 7,
        "percentage": 0.000020881770339783992,
        "total": 33522062,
        "year": "2007"
    },
    {
        "count": 4,
        "percentage": 0.00002691499336713632,
        "total": 14861605,
        "year": "2012"
    },
    {
        "count": 72,
        "percentage": 0.00042783021272787755,
        "total": 16829106,
        "year": "2013"
    },
    {
        "count": 58,
        "percentage": 0.00044526308023633027,
        "total": 13026007,
        "year": "2014"
    },
    {
        "count": 113,
        "percentage": 0.0008488500748227536,
        "total": 13312127,
        "year": "2015"
    },
    {
        "count": 45,
        "percentage": 0.000737439802379243,
        "total": 6102193,
        "year": "2016"
    }
];

var dataSet = marijuanaMentions.map(function(mention) {
  console.log(mention.count);
  return mention.count
})

var height = 250;
var width = 600;

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataSet)*1.1])
  .range([0, height])

var xScale = d3.scale.ordinal()
  .domain(dataSet)
  .rangeBands([0, width], 0.25, 0.25)

var colorScale = d3.scale.linear()
.domain([0, dataSet.length])
.range(['tomato', 'cornflowerBlue'])

var svg = d3.select('#barChart').append('svg')
  .attr('width', width)
  .attr('height', height)

svg.selectAll('rect')
  .data(dataSet)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', function(data, index) {
    return xScale(data)
  })
  .attr('y', function(data) {
    return height - yScale(data)
  })
  .attr('width', xScale.rangeBand)
  .style('height', function(data) {
    return yScale(data)
  })
  .attr('fill', function(data, i) {
    return colorScale(i)
  })
