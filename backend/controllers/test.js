const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const {compareScores} = require('../utils/matchUser')

exports.testRoute = async(req,res)=>{
  try {
    let studentToCompare = {
        userId: 13,
        attempt: [
            {
                questionId: 9,
                answerId: 90
            },
            {
                questionId: 10,
                answerId: 105
            },
            {
                questionId: 2,
                answerId: 20
            }
        ]
    };

    const users = await prisma.quizAttempt.findMany({
        where: {
            userId: {
                not: 13
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