google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Partido', 'N diputados'],
    ['PSOE', 120],
    ['PP', 88],
    ['Ciudadanos', 10],
    ['Podemos', 35],
    ['Vox', 52]
  ]);

  var options = {
    title: 'Representación en el congreso de los diputados',
    is3D: true,
    colors: ['#FF5733', '#338AFF', '#FFD133', '#9033FF', '#5EFF33'],
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}