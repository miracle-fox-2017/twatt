const router=require("express").Router();
const twitterController=require("../controllers/twitterControll");

// Home timeline
router.get("/twitter",twitterController.getHome);

// Search tweet
router.post("/twitter/search",twitterController.searchTweet);

// Create post
router.post("/twitter/post",twitterController.postTweet);

module.exports=router;
