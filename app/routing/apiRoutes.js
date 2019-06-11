var friendsData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        friendsData.push(req.body);
        let newest = friendsData.length - 1;
        friendsData[newest].difference = [];

        Array.min = function( array ){
            return Math.min.apply( Math, array );
        };

        var minimum = Array.min(friendsData[newest].difference);

        function getSum(total, num) {
            return total + num;
        };

        function findDifference(arr1, arr2){
            let arr3 = arr1.map(parseInt);
            console.log(arr3);

            for (var i = 0; i < friendsData.length -1; i++){
                arr4 = arr2[i].scores.map(parseInt);
                console.log(arr4);

                for (var j = 0; j < friendsData[i].scores.length; j++){
                    let diff = [];
                    diff.push(Math.abs(arr3[j] - arr4[j]));
                    friendsData[newest].difference.push(diff.reduce(getSum));
                };
            };
            console.log(friendsData[newest].difference)

            for(var l = 0; l < friendsData[newest].difference.length; l++){

                if(friendsData[newest].difference[l] === minimum){
                    return friendsData[l];
                };
            }
        }

        findDifference(friendsData[newest].scores, friendsData)   
    });

    app.post("/api/clear", function(req, res) {
        friendsData.length = 0;
    
        res.json({ ok: true });
    });
};