import connectToDatabase from '../../lib/mongo.js';
import Staff from '../../lib/models/Staff.js';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      const AllStaff = await Staff.find();
      return res
        .status(200)
        .json({ success: true, message: 'Successful!', data: AllStaff });
    default:
      return res.status(400).json({
        success: false,
        message: 'This request is not valid.',
        data: null,
      });
  }
}
