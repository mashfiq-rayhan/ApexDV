import styles from './CoinzoomExchange.module.css'

function CoinzoomExchange() {
  return (
    <div className={styles.CoinzoomExchange}>
      <div className={styles.green_abstract_right}></div>
                        <div className={styles.green_abstract_left}></div>
      <div className="container p-5">
      <div className={styles.CoinzoomExchangeWrapper}>
        <h1>
          <span>CoinZoom</span> Exchange
        </h1>
        <h6>
          Buy, sell, and trade over 40 cryptocurrencies including Bitcoin, Ether, and Litecoin on a regulated, secure exchange with some of the lowest fees in the industry.
        </h6>
        <div>
          <p>
            We make it easy to get started and fund your account with a debit card, ACH deposit, wire or crypto.
          </p>
          <p>
            Trade like a pro with our Advanced Trader or keep it simple and trade on the go with our iOS or Android app.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CoinzoomExchange