let test = [10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10]

let bowlingScore = function(rolls){
  let frame1 = []
  // for the 1st 9 frames in the arr, checking 
  // if each score is 10, push to new frame & push 0 after it
  //else, push the number

  while(frame1.length < 9){
    if (rolls[0]===10){
      rolls.splice(0,1)
      frame1.push([10, 0]);
    } else {
      frame1.push (rolls.splice(0,2))
    }
  }


  let frame2 = frame1.map(function(x){
    return {
      rolls: x,
      score: x.reduce(function(prev, curr){
        return prev + curr}, 0)
      }
  })

  frame2 = frame2.map(function(z){
    if(frame2.indexOf(z) < 7){
      if (z.score ===10){
        // for each object, if frame value is 10, add score of next 2 rolls
        if (z.rolls.includes(10)){
          let res = []
          frame2.slice(frame2.indexOf(z)+1,
          frame2.indexOf(z)+3).forEach(function(e){
            e.rolls.forEach(function(f){
              while (res.length < 2){
                res.push(f)
              }
            })
        })
     return res.reduce(function(prev, curr){
       return prev + curr}, z.score)
     }else {
       //add next roll to z score
       let res2 = []
       frame2.slice(frame2.indexOf(z)+1,
       frame2.indexOf(z)+2).forEach
       (function(e){
         e.rolls.forEach(function(f){
           while (frame2.length<1){
             frame2.push(f)
           }
         })
       })

       return frame2.reduce(function(prev, curr){
         return prev + curr}, z.score)
       }
     } else {
       return z.score
     }
    } else if (frame2.indexOf(z)===7) {
      if (z.score ===10){
        if (z.rolls.includes(10)){
          let res3 = []
          frame2.slice(frame2.indexOf(z)+1,
          frame2.indexOf(z)+2).forEach(
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
          frame2.slice(frame2.indexOf(z)+1,
          frame2.indexOf(z)+2).forEach (
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
  console.log(frame2)
  console.log(rolls)
  rolls.forEach(function(d){
    frame2.push(d)
  })
return frame2.reduce (function(prev, curr){
  return prev + curr
})
}

bowlingScore(test)