const {PrismaClient} = require('@prisma/client')
const {finalCompare} = require('../utils/match.functions')
const {sendEmail} = require('../utils/mailer')

const prisma = new PrismaClient();

exports.storeQuiz = async (req,res) => {
    try {

         const { userId, attemptedQuiz } = req.body
        if(!userId || !attemptedQuiz){
           return res.status(201).json({
                message: "Empty Fields",
                success:false
            })
        }
        /* Check if user has attempted Quiz */
        const user=  await prisma.user.findFirst({
            where: { 
              id: userId,
              isQuizAttempted: true 
            },
          });
          
          if(user){
            return res.status(201).json({
                message: "Already Attempted A quiz",
                success:false
            })
          }
        
        /****************** Store quiz *************** */
        const quizData = await prisma.quizAttempt.create({
            data:{
                userId,
                attempt: attemptedQuiz
            }
          
        })
        /* update user isAttempt */
        await prisma.user.update({
            where: { id: userId },
            data: { isQuizAttempted: true },
        })
        /* Match User After Quiz Attempt */
         const users = await prisma.user.findMany({
                where: {
                    id: parseInt(userId)
                },
                include: {
                attempts: true
                },
            })
        
          let studentToCompare = {
            userId: users[0].id,
            attempt: users[0].attempts[0].attempt,
            email: users[0].email
          };
          /* Query all Avaliabale quizes */
          const allData = await prisma.quizAttempt.findMany({
            where: {
                userId: {
                    not: parseInt(userId)
                }
            },
          })
          /* Compare */
          const comparedResults = await finalCompare(allData,studentToCompare)
          /* send mails*/
          comparedResults.map(async(email)=>{
             await sendEmail(email, "nn", "ll")
          })
        /* Return success  */
        return res.status(201).json({
            message:"Quiz Attempt successFull",
            success: true,
            comparedResults
        })
    } catch (error) {
        console.log('error', error)
        return res.json({
            error: error
        })
    }finally{
      prisma.$disconnect()
    }
}

/* get all quizes */

exports.getAllQuizes = async(req,res) => {
    try {
        const quizes = await prisma.quizAttempt.findMany();
        return res.status(200).json({
            quizes,
            success:true
        })
    } catch (error) {

        console.log('error', error)
        return res.json({
            error: error
        })
    }finally{
        prisma.$disconnect()
    }
}