const express= require('express')
const app = express()
const path = require('path')
var ejs=require('ejs'); 


app.use(express.static(path.join(__dirname,'public' )));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});


/* app.use('/build/', express.static(path.join(__dirname,'node_modules/three/build')));
app.use('/jsm',express.static(path.join(__dirname,'node_modules/three/examples/jsm')));
 */

app.listen(3000,()=>
console.log('server started on port 3000')
);