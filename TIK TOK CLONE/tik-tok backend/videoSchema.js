import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: Number,
    comment: Number,
    share: Number,
    description: String
})

export default mongoose.model(('tiktokvideo'), tiktokSchema);