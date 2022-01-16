import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Chart } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice = []
    const coinTimeStamp = []

    for(let i = 0; i < coinHistory?.data?.history?.length; i++)
    {
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#dabf46',
                borderColor: '#dabf46'
            }
        ]
    }

    const options = {
        responsive: true,
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                },
            },
            ],
        }
    }

    console.log(coinHistory)
    return (
        <>
            <Row className='chart-header'>
                <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
                <Col className='price-container' >
                    <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                    <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options} ></Line>
        </>
    )
}

export default LineChart
