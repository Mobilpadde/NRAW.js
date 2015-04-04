# NRAW.js

## Description
NRAW.js simplifies the use of Reddits API with easy-to-use chainable functions.

## How to
Start by installing NRAW.js:
```sh
$ npm install nraw
```
Then require it in your server:
````javascript
var r = require("nraw");
```
Now, make a new instance of the `r`-object, which you can do my providing a User-agent.
```javascript
var Reddit = new r("Testbot v0.0.1 by Mobilpadde");
```
Or you can fill in three arguments, which are a user-agent, a cookie and the modhash of a reddit-user: 
```javascript
var Reddit = new r("Testbot v0.0.1 by Mobilpadde", cookie, modhash);
```

### Execute requests
Executing requests can be done in two ways:  
```javascript
Reddit.user("Mobilpadde").exec(function(data){
    // Some super awesome code
})
```
Or
```javascript
Reddit.user("Mobilpadde", function(data){
    // Some super awesome code
})
```
In the examples below, the first method will be used.

### User-requests
Get the 25 latest posts (Links, self-posts or comments) of a given user:
```javascript
Reddit.user("Mobilpadde").exec(function(data){
    // Some super awesome code
})
```
"Thats is stupid! Who'd ever need the latest 25 posts of a user?", you say? Well, NRAW.js is smart enough to handle [queries][1] too!  
Let's make a basic request that gets the top five posts (links, self-posts and comments) of a user:
```javascript
Reddit.user("Mobilpadde").sort("top").limit(5).exec(function(data){
    // Some super awesome code
})
```
Pretty cool, 'eh? 
"But what if I want to see seven of my liked posts and comments?" - That's super easy too! Simply use the `login`-function and the`liked`-[filter][3]:
```javascript
Reddit.login(user, pass).user("Mobilpadde").liked().limit(7).exec(function(data){
    // Some super awesome code
})
```

### Subreddit-requests
Get the 25 latest posts (Links, self-posts) of a given subreddit:
```javascript
Reddit.subreddit("CatReactionGifs").exec(function(data){
    // Some super awesome code
})
```
"That's not useful *at* all! I hate you" - You.
Well, like last time, we have [queries][1] that can be applied, but wait! There's more! Subreddits even have the ability to have [filters][3] applied to them!  
Let's make a request of the 25 most controversial posts of the last year from a given subreddit, but after the post with the id of `t3_2k0r3o`:
```javascript
Reddit.subreddit("CatReactionGifs").controversial().after("t3_2k0r3o").exec(function(data){
    // Some super awesome code
})
```
Or how about we make a request that finds the 42 top comments of a given subreddit, using the [filter][3] `comments`:
```javascript
Reddit.subreddit("CatReactionGifs").comments().top().limit(42).exec(function(data){
    // Some super awesome code
})
```
"Can I get  single post if I know it's id?" - Easy peasy!
```javascript
Reddit.subreddit("CatReactionGifs").post("2zmdf9").exec(function(data){
	// Some super awesome code
})
```
"Whoa, that's pretty awesome, but can I post a link?" - Of cause you can! We just need to login and use the `post´-function:
```javascript
Reddit.login(user, pass).subreddit("CatReactionGifs").post().link("How I feel when there's only one pizza slice left", "http://i.imgur.com/CFSwHdq.gif").exec(function(data){
    // Some super awesome code
})
```
"Wow! C-c-can I subscribe to subreddits then?" - Yea you can! Tough we'll have to get our hands a bit dirty:
```javascript
Reddit.subreddit("CatReactionGifs", function(info){
		Reddit.login(user, pass).subreddit(info.data.children[0].data.subreddit_id).subscribe(function(data){
			// Some super awesome code
	    })
    })
```
"Awesome! But what if I dont like a subreddit anymore?" - Well, that's a bit tougher! Ha! Got ya! You should've seen your face! Priceless! Don't worry, it's super easy too:
```javascript
Reddit.subreddit("DogReactionGifs", function(info){
		Reddit.login(user, pass).subreddit(info.data.children[0].data.subreddit_id).unsubscribe(function(data){
			// Some super awesome code
	    })
    })
```
Or we can search through a subreddit:
```javascript
Reddit.subreddit("CatReactionGifs").search("Cat").exec(function(data){
	// Some super awesome code
})
```

### Multireddits
You can also get multireddits:
```javascript
Reddit.user("Mobilpadde").multireddit("kittehs").exec(function(data){
    // Some super awesome code
})
```

### Comments
How about we play abount with some comments for a while?

Let's get all new comments (Login so we don't have to wait 30 seconds before we get new comments):
```javascript
Reddit.login(user, pass).comments().exec(function(data){
    // Some super awesome code
})
```
"Well, now for a tough one! Can I post comments?" - Yes. Yes you can!
All you need is an id od the parent (In this case we're gonna use `t3_31cvo9`):
```javascript
Reddit.login(user, pass).post().comment("t3_31cvo9", "I love you!").exec(function(data){
	// Some super awesome code
})
```
"What if I want to see a specific comment and I have it's id?" - Well, that's super easy like everything else:
```javascript
Reddit.subreddit("CatReactionGifs").post("2zmdf9").comment("cpkmvc4").exec(function(data){
	// Some super awesome code
})
```
"I want to delete my comment, please help!" - Alrighty! It's as easy as pie: 
```javascript
Reddit.login(user, pass).comment("t1_cq0ev3j").delete().exec(function(data){
    // Some super awesome code
})
```

### Post-specific
You can also delete a post, if you misspelled something:
```javascript
Reddit.login(user, pass).post("t3_31cvo9").delete().exec(function(data){
    // Some super awesome code
})
```

### Voting
Upvoting:
```javascript
Reddit.login(user, pass).post("t3_31bji2").upvote().exec(function(data){
    // Some super awesome code
})
```
Unvoting:
```javascript
Reddit.login(user, pass).post("t3_31bji2").unvote().exec(function(data){
    // Some super awesome code
})
```
Downvoting:
```javascript
Reddit.login(user, pass).post("t3_31bji2").downvote().exec(function(data){
    // Some super awesome code
})
```

### Searching
You can also search for every thread containing the word `cat`:
```javascript
Reddit.search("cat").exec(function(data){
	// Some super awesome code
})
```


## Queries
 - after - *postId*
 - before - *postId*
 - count - 1- 100
 - from - "hour", "week", "month", "year", "all"
 - limit - 1 - 100
 - sort - "hot", "top", "new", "controversial"

## Filters (User)
 - overview
 - comments
 - submitted
 - liked
 - disliked
 - hidden
 - saved

## Filters (Subreddit)
 - comments
 - hot
 - new
 - rising
 - controversial
 - top
 - gilded
 - promoted

[1]:http://mcordes.me/
[2]:http://mcordes.me/
[3]:http://mcordes.me/