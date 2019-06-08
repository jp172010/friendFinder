var friendsData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        friendsData.push(req.body);

        let newest = friendsData.length - 1;
        function getSum(total, num){
            return total + num;
        };
        let int = friendsData[newest].scores.map(parseInt)
        console.log(int)
        //let sum = int.reduce(getSum);
        //friendsData[newest].sum = sum;

        //function findFriend(arr){
          //  for(var i = 0; i < friendsData.length -1; i++)
           // friendsData[newest].sum - arr[i].sum
       // };
        
        
    });

    app.post("/api/clear", function(req, res) {
        friendsData.length = 0;
    
        res.json({ ok: true });
    });
};