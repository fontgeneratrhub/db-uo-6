const mongoose = require("mongoose");
const MONGO_URI = 
'mongodb+srv://abdullah07:qbJ6iGTu0k65TFaP@karigar.mxjwgw1.mongodb.net/?retryWrites=true&w=majority'
const connection = async () => { 
try {
mongoose.set("strictQuery", false);
// const conn = await mongoose.connect(process.env.MONGO_URI, { 
const conn = await mongoose.connect(MONGO_URI, {
useUnifiedTopology: true,
useNewUrlParser: true,
});
console.log(`MongoDB Connection Build: ${conn.connection.host}`);
} catch (error) {
console.log(`Error: ${error.message}`); 
process.exit(1);
}
};
module.exports = connection;