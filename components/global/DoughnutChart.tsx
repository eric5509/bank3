'use client'
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export default function DoughnutChart() {
     const options = {
        plugins: {
            legend: {
                position: 'left', // Legend on the right
                labels: {
                    font: {
                        size: 14,
                    },
                    color: 'white',
                },
            },
        },
        layout: {
            padding: {
                top: 0,    // Remove unnecessary top padding
                bottom: 0, // Remove unnecessary bottom padding
                left: 0,   // Adjust if needed for left/right spacing
                right: 20, // Add spacing between chart and legend
            },
        },
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to fill its container
    };

    const data = {
        labels: ['Balance', 'Expenses', 'Loan'], // Updated labels
        datasets: [
            {
                label: 'My Financial Data',  
                data: [14500.15, 8444.23, 1000.05], 
                backgroundColor: [
                    '#00dd4a',    
                    '#0101c1',    
                    '#D4A017',    
                ],
                hoverOffset: 4,
            },
        ],
    };
    return (
        <div className='w-full'>
            <Doughnut data={data} height={"350px"} width={"350px"} options={options as any} />
        </div>
    )
}
