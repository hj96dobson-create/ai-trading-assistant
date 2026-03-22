import React from 'react';

const Dashboard: React.FC = () => {
    // Dummy trading analysis data
    const tradingAnalysis = {
        signals: {
            buy: ['AAPL', 'TSLA', 'GOOGL'],
            sell: ['AMZN', 'NFLX']
        },
        analysis: 'Market trends indicating bullish movement for tech stocks. Strong earnings reports expected for Q1.'
    };

    return (
        <div>
            <h1>Trading Dashboard</h1>
            <h2>Trading Signals</h2>
            <ul>
                <li><strong>Buy Signals:</strong> {tradingAnalysis.signals.buy.join(', ')}</li>
                <li><strong>Sell Signals:</strong> {tradingAnalysis.signals.sell.join(', ')}</li>
            </ul>
            <h2>Analysis</h2>
            <p>{tradingAnalysis.analysis}</p>
        </div>
    );
};

export default Dashboard;