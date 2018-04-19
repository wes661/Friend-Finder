var path = require("path");
var friends = require('../app/data/friends.js');



var getFriends = function showFriends(app){
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var newFriend = req.body
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    })

} 

module.exports = getFriends;

