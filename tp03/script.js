var ctx = document.getElementById("myChart").getContext('2d');
var myLineChart = new Chart(ctx, {

type: 'line',
data: {
    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"],
    datasets: [{
        label: "Mes premieres Donnés",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
},

options: {}
});