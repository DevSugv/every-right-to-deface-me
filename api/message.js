let currentMessage = "Hello";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ text: currentMessage });
  } else if (req.method === 'POST') {
    const { text } = req.body;
    if (typeof text === 'string' && text.length < 100) {
      currentMessage = text;
      res.status(200).json({ status: 'ok', text: currentMessage });
    } else {
      res.status(400).json({ status: 'error', message: 'Invalid text' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
