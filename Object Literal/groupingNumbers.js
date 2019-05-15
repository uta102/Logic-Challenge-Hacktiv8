function grouping (scores) {
    // Your code here
    var a = {
        pass : [],
        fail : []
    }
    
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] > 75){
            a.pass.push(scores[i])
        } else{
            a.fail.push(scores[i])
        }
    } return a
  }
  
  console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
  // { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }
  
  console.log(grouping([]));
  // { pass: [], fail: [] }