import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routers/index.js';
const port = 4000;
const app = express();
const MONGOOSE_URL = 'mongodb+srv://tranhuuvinh1109:vinh1109@cluster0.fg9i8xq.mongodb.net/vinh-cinema';


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

routes(app)
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
