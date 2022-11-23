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
    bars: 'vertical' 
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  setTimeout(init, 5000);
}

function init(){
  var options = {
    chart: {
      title: 'Worsheet 6 Ejercicio 1',
      subtitle: 'Representación en el congreso de los diputados',
      colors: ['#FF5733', '#338AFF', '#FFD133', '#9033FF', '#5EFF33'],
    },
    animation: {
      duration: 1000,
      easing: 'out',
    },
    bars: 'vertical',
    vAxis: {minValue: 0, maxValue: 100}
  };
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Partido político');
  data.addColumn('number', 'N diputados');
  data.addColumn({type: 'string', role: 'style'});
  data.addRows([
    ["PSOE", 100, 'red'],
    ["PP", 70, 'blue'],
    ["Ciudadanos", 2, 'orange'],
    ["Podemos", 60, 'purple'],
    ["Vox", 40, 'green'],
  ]);

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  function drawChart(){
    chart.draw(data, options);
  }
  drawChart();
}
