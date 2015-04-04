var express = require("express"),
	request = require("request"),
	async = require("async"),
	http = require("http"),
	r = require("./nraw"),
	app = express(),
	server = http.createServer(app),
	Reddit = new r("Testbot v0.0.9 by Mobilpadde");

app.get("/", function(req, res){ 
	// https://github.com/Stebon24/redwrap/blob/master/redwrap.js - https://www.npmjs.com/package/redwrap
	// http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/
	/*Reddit.user("Mobilpadde").limit(1).exec(function(data){
		res.json(data);
	});*/
	/*Reddit.login(process.argv[2], process.argv[3]).user("Mobilpadde").limit(1).sort("top").exec(function(data){
		res.json(data);
	});*/
	/*Reddit.login(process.argv[2], process.argv[3]).comments().limit(1).exec(function(data){
		res.json(data);
	});*/
	/*Reddit.subreddit("test", function(info){
		Reddit.login(process.argv[2], process.argv[3]).subreddit(info.data.children[0].data.subreddit_id).subscribe(function(bool){
			res.json(bool.statusCode != 404 ? "Yay" : "Nay");
		})
	})*/
	/*Reddit.login(process.argv[2], process.argv[3]).subreddit("test").post().self("Look at me everybody!", "I'm not famous but I'm not not famous either.").exec(function(data){
		res.json(data);
	})*/
	/*Reddit.login(process.argv[2], process.argv[3]).post().comment("t3_31cvo9", "I love you!").exec(function(data){
		res.json(data);
	})*/
	/*Reddit.subreddit("catreactiongifs").post("2zmdf9").comment("cpkmvc4").exec(function(data){
		res.json(data);
	})*/
	/*Reddit.user("Mobilpadde").multireddit("kittehs").limit(1).exec(function(data){
		res.json(data);
	})*/
	/*Reddit.subreddit("cats").post("31b5be").exec(function(data){
		res.json(data);
	})*/
	/*Reddit.login(process.argv[2], process.argv[3]).subreddit("test").post("t3_31cvo9").delete().exec(function(data){
		res.json(data);
	})*/
	/*Reddit.login(process.argv[2], process.argv[3]).subreddit("test").comment("t1_cq0ev3j").delete().exec(function(data){
		res.json(data);
	})*/
	/*Reddit.login(process.argv[2], process.argv[3]).post("t3_31bji2").upvote().exec(function(data){
		res.json(data);
	})*/
	/*Reddit.search("Cat").exec(function(data){
		res.json(data);
	})*/
	/*Reddit.subreddit("CatReactionGifs").search("Cat").exec(function(data){
		res.json(data);
	})*/
	// https://github.com/reddit/reddit/wiki/API
	res.json({yay: true});
})

server.listen(3005, function(){
	console.log("Listening on 3005.");
})