
function testPlotly(){
    data = {
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }
    
    Plotly.newPlot( 'tester', [data], {margin: { t: 0 }} );
}

testPlotly()