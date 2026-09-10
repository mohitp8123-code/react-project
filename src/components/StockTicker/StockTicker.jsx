import "./StockTicker.css";
import stocks from "../../data/stocks";

function StockTicker(){
    return(
        <div className="stockTicker">
            <div className="tickerWrapper">
                {stocks.map((stock, index) =>(
                    <div className="stockItem" key={index}>
                        <span className="symbol">{stock.symbol}</span>
                        <span className="price">${stock.price}</span>
                        <span className={
                            stock.change >= 0? "postive" : "negative"
                        }>
                        {stock.change > 0 ? "+" : ""}
                        {stock.change}%

                        </span>
                    </div> 
                ))}
            </div>
        </div>
    );
}

export default StockTicker;