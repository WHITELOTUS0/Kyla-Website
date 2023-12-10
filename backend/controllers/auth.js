const {PrismaClient} = require('@prisma/client')
const bcrypt = require('bcryptjs')
const { hashPassword } = require('../utils/hash')
const jwt = require('jsonwebtoken');
const { resetEmail } = require('../utils/resetMail');
const randToken = require('rand-token')

/***************************************AUTH CONTROLLER********************************************************/
const prisma = new PrismaClient();

exports.register = async(req,res) => {

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
                message: "User exists"
            })
        }
        /********************************* Create a User ************************/
        var pass = await hashPassword(password) //hash password

        const newUser = await prisma.user.create({
               data :{
                    password: pass,
                    lastName: lastName,
                    firstName: firstName,
                    email: email,
                    grade : grade
               }
           })
    
        

        return res.status(200).json({
             message : "User Created Successfully"
        })

    } catch (error) {
        console.log('error', error)
        return res.status(500).json({
            error: error
        })
    } finally{
       prisma.$disconnect()
    }
}

/**************************************** LOGIN ****************************************************/

exports.login = async(req,res) => {
    try {
        const {password, email } = req.body
        if(!password || !email) {
            return res.status(201).json({
                success: false,
                message: "This Field Cannot be empty"
          })
        }
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        /* Check user existance */
        if(!user){
            return res.status(201).json({
                success: false,
                message: "Invalid Credentials"
          })
        }
        /* Compare password */
        const passwordCompare = await bcrypt.compare(password, user.password)

        if(!passwordCompare){
            return res.status(201).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
        /* Password success */
        const jwt_token = await jwt.sign({user},process.env.JWT_SECRET, { expiresIn: '1440m' })

        return res.status(201).json({
            success: true,
            login:true,
            user,
            jwt_token
        })
    } catch (error) {
        console.log(error)
    } finally {
      prisma.$disconnect();
    }
}

/*****************************************CHANGE PASSWORD*********************************************/


exports.generatePasswordToken = async(req,res)=>{
    try {
        const {email} = req.body;
        if(!email) {
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
        /* If user Exists, send a password */
         if(existingUser){
            const token = randToken.generate(10);
           /* Store reset token */
            const resetToken = await prisma.user.update({
                where: {
                    email: email
                },
                data: {
                    reset_token: token
                }
             });
            /* Send Mail */
            const response = await resetEmail(email,token);
            console.log('token', token)

            return res.status(201).json({
                message: "Reset Token Sent to your email",
                succes:true
            })
         }
        /********************EMAIL NOT SENT*************************** */
        return res.status(201).json({
            success:false,
            message: "Email Does not exist"
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            error:error
        })
    } finally{
       prisma.$disconnect();
    }
}


exports.updatePassword = async(req,res)=>{
    try {
        const {reset_token,  password} = req.body;

        if(!reset_token || !password) {
            return res.status(201).json({
                success: false,
                message: "Missing Parameters"
          })
        }

        const user = await prisma.user.findFirst({
            where: {
                reset_token: reset_token
            }
          });

        if(!user){
            return res.status(201).json({
                success: false,
                message: "Token expired"
            })
        }

        const new_password = await hashPassword(password)

        /* Update password */
        const updatedUser = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                password: new_password
            }
        });
        /* Clear token */
        const clearToken = await prisma.user.update({
            where: {
               email: email
            },
            data: {
               reset_token: null
            }
        });

        res.status(201).json({
            success:true,
            message:"Password updated Successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            error:error
        })
    }finally{
      
        prisma.$disconnect();
    }
}