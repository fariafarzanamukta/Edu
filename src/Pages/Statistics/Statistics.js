import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [chart, setCharts] = useState([]);
    useEffect(() => {
        axios.get(`https://openapi.programming-hero.com/api/quiz`)
            .then(data => {
            const chartsLoaded = data.data.data;
            console.log(chartsLoaded);
            const chartData = chartsLoaded.map(chart => {
                const singleChart = {
                    name: chart.name,
                    total: chart.total
                }
                return singleChart
            })
            console.log(chartData);
            setCharts(chartData);
        });

    }, [])

    return (
        <div>
            <BarChart width={350} height={400} className='justify-items-center mt-10  mr-8 md:mx-auto mb-28' data={chart}>
                <Bar dataKey="total" fill="#1e293b" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Statistics;