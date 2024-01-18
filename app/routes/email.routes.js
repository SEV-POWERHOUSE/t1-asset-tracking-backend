// module.exports = (app) => {
//     const express = require('express')
//     const router = express.Router()
//     const emailSender = require('../services/emailSender.js')

//     //Generic (can be used to test the email service)
//     router.post('/standard', emailSender.sendEmail)

//     //Confirmation email
//     router.post('/confirm', async (req, res) => {
//         try {
//             const emailDetails = {
//                 to: req.body.to,
//             }

//             const result = await emailSender.confirmationEmail(emailDetails)
//             res.status(200).send(result)
//         } catch (error) {
//             console.error(error)
//             res.status(500).send("error sending confirmation email")
//         }
//     })

//     //Accommodation approval email
//     router.post('/approve', async (req, res) => {
//         try {
//             const emailDetails = {
//                 from: req.body.from,
//                 to: req.body.to,
//             }

//             const result = await emailSender.approvalEmail(emailDetails)
//             res.status(200).send(result)
//         } catch (error) {
//             console.error(error)
//             res.status(500).send("error sending approval email")
//         }
//     })

//         //Accommodation denial email
//         router.post('/deny', async (req, res) => {
//             try {
//                 const emailDetails = {
//                     from: req.body.from,
//                     to: req.body.to,
//                 }

//                 const result = await emailSender.denialEmail(emailDetails)
//                 res.status(200).send(result)
//             } catch (error) {
//                 console.error(error)
//                 res.status(500).send("error sending denial email")
//             }
//         })

//         //Amin notification email
//         router.post('/notify', async (req, res) => {
//             try {
//                 const emailDetails = {
//                     fName: req.body.fName,
//                     lName: req.body.lName
//                 }

//                 const result = await emailSender.adminNotification(emailDetails)
//                 res.status(200).send(result)
//             } catch (error) {
//                 console.error(error)
//                 res.status(500).send("error sending notification email")
//             }
//         })

//     app.use("/accommodations-t1/sendEmail", router)
// }
