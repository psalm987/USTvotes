import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environmental variable');
} else {
  console.log(MONGODB_URI);
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // bufferCommands: false,
      // bufferMaxEntries: 0,
      // useFindAndModify: true,
      // useCreateIndex: true,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
