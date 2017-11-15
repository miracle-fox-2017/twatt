const app=require("express")();
const parser=require("body-parser");
const cors=require("cors");

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
app.use(cors());

const twitter=require("./server/routes/twitterRoute");
app.use("/api",twitter);

app.listen(3000,()=>{
    console.log("Listenning on port 3000!");
});
