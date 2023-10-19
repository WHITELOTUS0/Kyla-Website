const {PrismaClient} = require('@prisma/client')

/***************************************AUTH CONTROLLER********************************************************/
const prisma = new PrismaClient();

exports.register = async(req,res)=>{

    try {
        const { lastName, firstName, password, email, grade } = req.body
        //check whether field exists
        if (!password || !lastName || !firstName ||!email ||!grade) {
            return res.status(201).json({
                success: false,
                message: "This Field Cannot be empty"
            })
        }
        /* Check whether user exists */
        const existingUser = await prisma.user.findUnique({
            where: {
              email: email
            }
          });
          
        if(existingUser){
            return res.json({
                existingUser,
                message: "User exist"
            })
        }
        /* Create a User */
        const newUser = await prisma.user.create({
               data :{
                    password: password,
                    lastName: lastName,
                    firstName: firstName,
                    email: email,
                    grade : grade
               }
           })
    

        return res.json({
            newUser
        })
    } catch (error) {
        return res.json({
            error: error
        })
    } finally{
       prisma.$disconnect()
    }
}