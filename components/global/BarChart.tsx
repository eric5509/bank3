'use client'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function BarChart() {
    const data = {
        labels: ['Balance', 'Savings', 'Expenses', 'Loan'],
        datasets: [
            {
                label: 'My Financial Data',
                data: [300, 200, 150, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                    },
                    color: 'white',
                },
            },
        },
       
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to fill its container
    };


    return (
        <div >
            <Bar data={data} options={options} style={{ width: '100%', height: "300px"}}/>
        </div>
    )
}
