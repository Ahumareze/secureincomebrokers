import React, { useEffect } from 'react';

function SliderWidget(props) {
    useEffect(() => {
        getWidget();
    }, []);

    const getWidget = () => {
        const script = document.createElement('script');
        script.src='https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "Bitcoin"
              },
              {
                "proName": "BITSTAMP:ETHUSD",
                "title": "Ethereum"
              },
              {
                "description": "XRP",
                "proName": "BINANCE:XRPUSDT"
              },
              {
                "description": "SOL/USDT",
                "proName": "BINANCE:SOLUSDT"
              },
              {
                "description": "LTC",
                "proName": "BINANCE:LTCUSDT"
              },
              {
                "description": "Shiba Inu",
                "proName": "COINBASE:SHIBUSD"
              },
              {
                "description": "Luna",
                "proName": "BINANCE:LUNCUSDT"
              }
            ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "en"
          });
          document.getElementById("tradingview-widget-container").appendChild(script);
    }

    return (
        <div className='tradingview-widget-container' id='tradingview-widget-container'>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright"><a rel="noopener" target="_blank" /> </div>
        </div>
    );
}

export default SliderWidget;