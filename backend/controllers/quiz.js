const {PrismaClient} = require('@prisma/client')

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
        /* Return success  */
        return res.status(201).json({
            message:"Quiz Attempt successFull",
            success: true
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