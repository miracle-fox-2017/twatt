const router=require("express").Router();
const twitterController=require("../controllers/twitterControll");

router.get("/twitter",twitterController.getHome);

module.exports=router;
