
const plm = require("passport-local-mongoose");
const mongoose = require('mongoose')

  mongoose.connect(process.env.MONGODB_URI); 

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  boards:{
    type:Array,
    default:[]
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]

});

userSchema.plugin(plm);

module.exports = mongoose.model("user",userSchema)
