import mongoose from 'mongoose'
import 'dotenv/config'

export const connectdb = async () => {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION)
        .then(() => console.log("connected"))
}
