require("dotenv").config();

const mongoose=require('mongoose')
const mongoDB=process.env.DATABASE_URL
const Model=require("/model/model")


mongoose.connect(mongoDB);
export default async function handler(req, res) {
  
  if(req.method==='POST'){
    const data = new Model({
      id: req.body.id,
      name: req.body.name,
      sizes: req.body.sizes,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      imageSrc: req.body.imageSrc,
    });
  
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }

  }else if(req.method==='GET'){
    try {
      const data = await Model.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
}
