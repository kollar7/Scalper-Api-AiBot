export default function handler(req, res) {
  res.status(200).json({
    signals: [
      {
        coin: "BTC/USDT",
        direction: "BUY",
        tradeType: "SCALP",
        entry: 66100.0,
        sl: 65480.0,
        tp: 66920.0,
        confidence: 87,
        rr: 2.1,
        status: "ACTIVE",
        time: "2m"
      },
      {
        coin: "ETH/USDT",
        direction: "BUY",
        tradeType: "SWING",
        entry: 3412.5,
        sl: 3375.0,
        tp: 3450.0,
        confidence: 64,
        rr: 1.5,
        status: "EARLY",
        time: "1m"
      }
    ]
  });
}
