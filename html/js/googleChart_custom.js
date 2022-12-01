google.charts.load('current', {
    'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawPieChart2);
google.charts.setOnLoadCallback(drawPieChart3);
google.charts.setOnLoadCallback(drawBarChart);

function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Title', 'Text'],
        ['高風險', 12],
        ['中風險', 3],
        ['低風險', 2],
        ['安全', 1],
    ]);

    var options = {
        chartArea: {
            top: '40',
            bottom: '8',
            width:'100%',
            height:'100%'
        },
        pieHole: 0.3,
        pieSliceText: 'value-and-percentage',
        pieSliceTextStyle:{color:'#ffffff'},
        backgroundColor: '#FFFFFF',
        colors: ['#ee6055','#FF9861','#ffd061','#60d394'],
        pieSliceBorderColor: "transparent",
        tooltip: {
            textStyle: { color: '#27173E' },
            showColorCode: true,
            trigger: 'focus',
        },
        legend: {
            alignment: 'center',
            textStyle: {
                color: '#797979',
                fontSize: 12,
            }, position: 'top',
            maxLines: 1,
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

function drawPieChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Title', 'Text'],
        ['有', 12],
        ['無', 3]
    ]);

    var options = {
        chartArea: {
            top: '40',
            bottom: '8',
            width: '100%',
            height: '100%'
        },
        pieHole: 0.3,
        pieSliceText: 'value-and-percentage',
        backgroundColor: '#FFFFFF',
        colors: ['#ee6055','#60d394'],
        pieSliceBorderColor: "transparent",
        tooltip: {
            textStyle: { color: '#27173E' },
            showColorCode: true,
            trigger: 'focus',
        },
        legend: {
            alignment: 'center',
            textStyle: {
                color: '#797979',
                fontSize: 12,
            }, position: 'top',
            maxLines: 1,
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart.draw(data, options);
}

function drawPieChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Title', 'Text'],
        ['有', 1],
        ['無', 5]
    ]);

    var options = {
        chartArea: {
            top: '40',
            bottom: '8',
            width: '100%',
            height: '100%'
        },
        pieHole: 0.3,
        pieSliceText: 'value-and-percentage',
        backgroundColor: '#FFFFFF',
        colors: ['#ee6055','#60d394'],
        pieSliceBorderColor: "transparent",
        tooltip: {
            textStyle: { color: '#27173E' },
            showColorCode: true,
            trigger: 'focus',
        },
        legend: {
            alignment: 'center',
            textStyle: {
                color: '#797979',
                fontSize: 12,
            }, position: 'top',
            maxLines: 1,
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
    chart.draw(data, options);
}

function drawBarChart() {
    var data = google.visualization.arrayToDataTable([
        ['Element', 'APK異常回報', 'IP異常回報'],
        ['Youtube', 7, 7],
        ['Merge Magic!', 4, 6],
        ['Wechat', 6, 2],
        ['口袋奇兵-超休閒的策略遊戲', 4, 4],
        ['眾神召喚師：休閒放置RPG', 5, 2],
        ['FRAG Pro Shooter',3,4],
        ['Hangout', 2, 5],
        ['Toca Life World', 3, 3],
        ['荒野亂鬥', 3, 3],
        ['XRecorder', 2, 4],
        ['Planet Fitness Workouts', 2, 4],
        ['Last War: Shelter Survival Z', 3, 1],
        ['Facebook', 1, 3],
        ['FRAG Pro Shooter', 3, 0],
        ['Bus+',2,1],
        ['Pokemon Go', 2,0],
        ['Notion',1,0]
    ]);
    var totalHeight = data.getNumberOfRows() * 36;
    console.log(data.getNumberOfRows());
    console.log(totalHeight);
    var options = {
        height: totalHeight,
        chartArea: { width: '100%', height: totalHeight, top: '40', right: '40', left: '200', bottom: '40' },
        
        // 改變長條圖配色
        colors: ['#EE6055', '#EEAAA5'],
        backgroundColor:'#FFFFFF',
        isStacked: true,
        bar: { groupWidth: 16 },
        hAxis: {
            minValue: 0,

            // 長條圖水平 文字樣式
            textStyle: {
                fontSize: 12,
                bold: false,
                color: '#27173E'
            },
        },
        vAxis: {

            // 長條圖垂直 文字樣式
            textStyle: {
                fontSize: 12,
                bold: false,
                color: '#333333'
            }
        },
        legend: { position: 'top', textStyle: { fontSize: 12,color: '#797979' } },
        tooltip: { trigger: 'focus', showColorCode: true, textStyle: { bold: false } },
    };
    var chart = new google.visualization.BarChart(document.getElementById('bar-chart'));
    chart.draw(data, options);
}

window.onresize = function(){location.reload();};