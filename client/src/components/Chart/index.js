import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js';



const ChartComponent = ({stocks}) => {

    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(stocks),
                datasets: [
                    {
                        label: '# of Votes',
                        data: Object.values(stocks),
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            }
        });
    });

    return (
        <div>
            <canvas id="myChart" width="800" height="800"></canvas>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        stocks: state.stock
    }
};

export default connect(mapStateToProps)(ChartComponent);