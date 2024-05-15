import Chart from 'react-apexcharts'
const options = {
    labels: ["Income", "Expense"],
    colors: ["#FD5E53", "#213ebf"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },

        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },

    fill: {
        colors: ["#FD5E53", "#218F73"],
    },
        tooltip: {
            enabled: true,
            theme: "dark",
            style: {
                fontSize: "12px",
                fontFamily: undefined,
                backgroundColor: "#000000",
            },
        },
    };


export default function TransactionChartSummary({income,expense}) {

        return <Chart
            options={options}
            series={[income,expense]}
            type='pie'
            width={'100%'}
            height={'100%'}
            />
}