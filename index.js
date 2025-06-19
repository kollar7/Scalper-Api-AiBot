
const axios = require('axios');
const crypto = require('crypto');

export default async function handler(req, res) {
  const apiKey = 'mx0vglJ6Xj8MYa0aeh';
  const apiSecret = '75c5e33c1a094c689648ad1e03731d44';
  const timestamp = Date.now();
  const query = `timestamp=${timestamp}`;
  const signature = crypto.createHmac('sha256', apiSecret).update(query).digest('hex');

  try {
    const response = await axios.get(
      `https://api.mexc.com/api/v3/account?${query}&signature=${signature}`,
      {
        headers: {
          'X-MEXC-APIKEY': apiKey
        }
      }
    );

    res.status(200).json({
      success: true,
      data: response.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'MEXC API error',
      details: error.response?.data || error.message
    });
  }
}
