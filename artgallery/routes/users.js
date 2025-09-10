
const plm = require("passport-local-mongoose");
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://khushi011504_db_user:khushi011504@cluster0.t8quvwp.mongodb.net/art--gallery?retryWrites=true&w=majority&appName=Cluster0"); 

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
