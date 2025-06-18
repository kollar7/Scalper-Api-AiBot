export default function handler(req, res) {
  const signals = [
    {
      coin: "BTC/USDT",
      direction: "BUY",
      tradeType: "SCALP",
      entry: 65890,
      sl: 65420,
      tp: 66730,
      confidence: 85,
      rr: 2.0,
      status: "ACTIVE",
      time: "1m"
    },
    {
      coin: "ETH/USDT",
      direction: "SELL",
      tradeType: "SWING",
      entry: 3570,
      sl: 3625,
      tp: 3450,
      confidence: 77,
      rr: 1.8,
      status: "EARLY",
      time: "3m"
    }
  ];

  res.status(200).json({ signals });
}
