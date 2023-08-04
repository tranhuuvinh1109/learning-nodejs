import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
const port = 3000;
const app = express();
const MONGOOSE_URL = 'mongodb+srv://booking:Hb1wHZGMe8G6okBn@cluster0.qgqj4oa.mongodb.net/shop';


async function connectDB () {
	try {
		await mongoose.connect(MONGOOSE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connect successfully!!!');
	} catch (error) {
		console.log('Connect failure!!!');
	}
}
app.use(cors(), bodyParser.json());
connectDB();


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
