import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const EntriesChartTracker = (props) => {
    const [chartData, setchartData] = useState ([]);

    useEffect(() => {
        let tempChartData = props.parentEntries.map(entry => {
            return [entry.date, entry.weight]
        });
        setchartData(tempChartData);
    }, [props.parentEntries])
    
    return ( 
        <Chart
        chartType="LineChart"
        data={[["Date", "Weight"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
        />
     );
}
 
export default EntriesChartTracker;
