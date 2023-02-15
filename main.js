const data = [55000, 48000, 27000, 66000, 90000];

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 300;
const MARGINS = { left: 50, right: 50, top: 50, bottom: 50 };

const FRAME = d3
  .select('#vis1')
  .append('svg')
  .attr('height', FRAME_HEIGHT)
  .attr('width', FRAME_WIDTH)
  .attr('class', 'frame');

FRAME.selectAll('points')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', (d) => d)
  .attr('cy', MARGINS.top)
  .attr('r', 20)
  .attr('class', 'point');
