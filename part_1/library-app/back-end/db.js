const mongoose = require ("mongoose")
require("dotenv").config()

const options = {

useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology:true,
useFindandModify:false,

}

mongoose.connect(process.env.Db_URL, options).then {
    ()=>{
        console.log("My db is ready")
    }
    (error) => {
        console.log(error)
    }
}