const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const {compareScores} = require('../utils/matchUser')

exports.testRoute = async(req,res)=>{
  try {
    
    let studentToCompare = {
        userId: 59,
        attempt: [{"questionId":1,"answerId":13},{"questionId":2,"answerId":22},{"questionId":3,"answerId":33},{"questionId":4,"answerId":40},{"questionId":5,"answerId":50},{"questionId":6,"answerId":63},{"questionId":7,"answerId":71},{"questionId":8,"answerId":83},{"questionId":9,"answerId":92},{"questionId":10,"answerId":101}]
    };

    const users = await prisma.quizAttempt.findMany({
        where: {
            userId: {
                not: 59
            }
        },
    })
   
    const selected = compareScores(users,studentToCompare);

    return res.json({
        selected
    })
    
  } catch (error) {
    console.log('error', error)
  }finally{
     prisma.$disconnect();
  }
}

exports.getUsersQuiz = async(req,res)=>{
  try {
    const id = req.params['id'];
    const users = await prisma.user.findMany({
      where: {
          id: parseInt(id)
      },
      include: {
        attempts: true
      },
    })

    let studentToCompare = {
      userId: users[0].id,
      attempt: users[0].attempts[0].attempt
    };

    const allData = await prisma.quizAttempt.findMany({
      where: {
          userId: {
              not: parseInt(id)
          }
      },
    })
    const selected = compareScores(allData,studentToCompare);

    let maxKey = Object.entries(selected).reduce((max, entry) => {
      if (entry[1] > max[1]) {
          return entry;
      } else {
          return max;
      }
  }, [-1, -Infinity])[0]; // -Infinity is used to ensure that the first comparison always updates the maximum
  
 

  const matchedUser = await prisma.user.findFirst({
    where : {
       id : parseInt(maxKey)
    }
    })

    return res.json({
      maxKey,
      matchedUser, 
      selected
    })

 

  } catch (error) {
    console.log('error', error)
    return res.json({
      error
    })
  }
}