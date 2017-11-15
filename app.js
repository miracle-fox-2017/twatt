const app=require("express")();

const twitter=require("./routes/twitterRoute");
app.use("/api",twitter);

app.listen(3000,()=>{
    console.log("Listenning on port 3000!");
});
