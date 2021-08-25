const mongoose = require('mongoose'); 
 
mongoose.connect('mongodb://127.0.0.1:27017/cookingCorner', { 
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology : true
}).then((con)=>{
    console.log(`Connected to ${con.connection.host}`)
})
