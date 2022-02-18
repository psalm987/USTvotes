import connectToDatabase from '../../lib/mongo.js';
import Staff from '../../lib/models/Staff.js';

export default async function handler(req, res) {
  const { method } = req;

  console.log('Connecting to DB');
  await connectToDatabase();

  console.log('Connected!');

  switch (method) {
    case 'GET':
      try {
        const allStaff = Staff.find({
          name: 'Samuel Seibidor',
        });
        return res.status(200).json({
          success: true,
          message: 'Successful!',
          data: allStaff || [],
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: 'Internal server error.',
          data: null,
        });
      }
    default:
      return res.status(400).json({
        success: false,
        message: 'This request is not valid.',
        data: null,
      });
  }
}
