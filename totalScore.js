let test = [10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10]

let bowlingScore = function(rolls){
  let arr = []
  // for the 1st 9 frames in the arr, checking 
  // if each score is 10, push to new frame & push 0 after it
  //else, push the number

  while(arr.length < 9){
    if (rolls[0]===10){
      rolls.splice(0,1)
      arr.push([10, 0]);
    } else {
      arr.push (rolls.splice(0,2))
    }
  }


  let arr2 = arr.map(function(x){
    return {
      rolls: x,
      score: x.reduce(function(prev, curr){
        return prev + curr}, 0)
      }
  })
  console.log(arr2)
  arr2 = arr2.map(function(z){
    if(arr2.indexOf(z) < 7){
      if (z.score ===10){
        // for each object, if frame value is 10, add score of next 2 rolls
        if (z.rolls.includes(10)){
          let res = []
          arr2.slice(arr2.indexOf(z)+1,
          arr2.indexOf(z)+3).forEach(function(e){
            e.rolls.forEach(function(f){
              while (res.length < 2){
                res.push(f)
              }
            })
        })
     return res.reduce(function(prev, curr){
       return prev + curr}, z.score)

     } else {
       //add next roll to z score
       let res2 = []
       arr2.slice(arr2.indexOf(z)+1,
       arr2.indexOf(z)+2).forEach
       (function(e){
         e.rolls.forEach(function(f){
           while (res2.length<1){
             res2.push(f)
           }
         })
       })

       return res2.reduce(function(prev, curr){
         return prev + curr}, z.score)
       }
     } else {
       return z.score
     }
    } else if (arr2.indexOf(z)===7) {
      if (z.score ===10){
        if (z.rolls.includes(10)){
          let res3 = []
          arr2.slice(arr2.indexOf(z)+1,
          arr2.indexOf(z)+2).forEach(
            function(e){
             e.rolls.forEach(function(f){
               while(res3.length <1){
                 res3.push(f)
               }
             }) 
            })
          res3.push(rolls.slice(0,1).reduce(function(prev, curr){
            return prev + curr}))
            return res3.reduce(function(prev, curr){
              return prev + curr}, z.score)
        } else {
          let res4 = []
          arr2.slice(arr2.indexOf(z)+1,
          arr2.indexOf(z)+2).forEach (
            function(e){
              e.rolls.forEach(function(f){
                while (res4.length <1){
                  res4.push(f)
                }
              })
            })
            return res4.reduce(function(prev, curr){
              return prev + curr}, z.score)
        }
      } else {
        return z.score
      }
    } else {
      if (z.score ===10){
        if(z.rolls.includes(10)){
          console.log (z.score + rolls.slice(0,2).reduce(function(prev, curr)
          {return prev +curr}))
          return z.score+rolls.slice(0, 2).reduce(function(prev, curr)
          {return prev + curr})
        } else {
          return z.score+rolls.slice(0, 1).reduce(function(prev, curr)
          {return prev+curr})
        }
      } else {
        return z.score
      }
    }
  })
  console.log(arr2)
  console.log(rolls)
  rolls.forEach(function(d){
    arr2.push(d)
  })
return arr2.reduce (function(prev, curr){
  return prev + curr
})
}

bowlingScore(test)