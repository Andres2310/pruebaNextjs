require("dotenv").config();

const mongoose=require('mongoose')
const mongoDB=process.env.DATABASE_URL
const Model=require("/model/model")


mongoose.connect(mongoDB);
export default async function handler(req, res) {
  
  if(req.method==='POST'){
    res.status(200).json({response:"todo ok"})

  }else if(req.method==='GET'){
    try {
      const data = await Model.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
}
