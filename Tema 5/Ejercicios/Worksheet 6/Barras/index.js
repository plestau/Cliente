google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Partido político', 'N diputados', { role: 'style' }],
    ["PSOE", 120, 'red'],
    ["PP", 88, 'blue'],
    ["Ciudadanos", 10, 'orange'],
    ["Podemos", 35, 'purple'],
    ["Vox", 52, 'green'],
  ]);

  var options = {
    chart: {
      title: 'Worsheet 6 Ejercicio 1',
      subtitle: 'Representación en el congreso de los diputados',
      colors: ['#FF5733', '#338AFF', '#FFD133', '#9033FF', '#5EFF33'],
    },
    bars: 'vertical' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
