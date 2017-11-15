const OAuth=require("oauth");
const oauth=new OAuth.OAuth(
    "https://api.twitter.com/oauth/request_token", // JANGAN DIUBAH
    "https://api.twitter.com/oauth/access_token", // JANGAN DIUBAH
    "z7HjYcP5NyDKfiiWJiYO1KkFP", // Your application consumer key
    "5N4DRAnld9iRC6oz96FRyyN3ExDYug6maIXlvNzftrgd30XtpC", // Your application secret key
    "1.0A",
    null,
    "HMAC-SHA1"
);
const userToken=require("./user_token");

const getHome=(req,res,next)=>{
    oauth.get(
        "https://api.twitter.com/1.1/statuses/home_timeline.json",
        userToken.token,userToken.secret,
        (err,data,respond)=>{
            res.send(data);
        }
    );
}

module.exports={
    getHome
};
