// const nodemailer = require("nodemailer");
// const googlePass = process.env.GOOGLE_APP_PASS
// // Create a nodemailer transporter with your email service credentials
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // e.g., 'Gmail'
//   auth: {
//     user: 'z.fike@eagles.oc.edu', // Your email address
//     pass: googlePass // Your email password
//   }
// });
// // Function to send a test email
// async function sendEmail(recipient) {
//   try {
//     // Configure the email data
//     const mailOptions = {
//       from: 'z.fike@eagles.oc.edu',
//       to: recipient,
//       subject: 'No Subject, Test Email',
//       text: 'Test' // Include your test content
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//     return 'Email sent successfully.';
//   } catch (error) {
//     console.error(error);
//     throw 'Email could not be sent.';
//   }
// }

// // Function to send a test email
// // Function to send an admin notification email
// async function adminNotification(userDetails) {
//   try {
//     // Configure the email data
//     const mailOptions = {
//       from: 'z.fike@eagles.oc.edu',
//       to: ['z.fike@eagles.oc.edu', 'jaxen.mcray@eagles.oc.edu'],
//       subject: 'Student Accommodation Request',
//       text: `${userDetails.fName} ${userDetails.lName} has made a request for accommodations.
//             \nPlease review the request.`,
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//     return 'Email sent successfully.';
//   } catch (error) {
//     console.error(error);
//     throw 'Email could not be sent to admin.';
//   }
// }

// async function confirmationEmail(recipient) {
//   try {
//     const mailOptions = {
//       from:'z.fike@eagles.oc.edu',
//       to: recipient.to,
//       subject: 'Accommodation Request Confirmation',
//       html: ` Thank you for submitting your request for accommodations. We require supporting documentation to fulfill<br>
//               your request.<br>
//               Documentation must be from an appropriate, qualified professional who has seen you within the past 18<br>
//               months and must contain the following information:<br>
//               1. You are a person with a disability.<br>
//               2. The diagnosis (what is the disability?)<br>
//               3. Information about the necessary classroom accommodations you will need to<br>
//               successfully complete the semester. There must be a nexus between the disability and<br>
//               the accommodations requested.<br>
//               4. Name and credentials (license #, etc.) of the diagnostic clinician.<br>
//               Documentation may be emailed to me, but it must be on official letterhead. If your doctor’s office is<br>
//               unwilling to email me (this is the most likely scenario), they may mail the document to you. Then, scan<br>
//               and email it to me.<br>
//               Once the information is submitted, we will schedule a time to meet to discuss the details (in person or via<br>
//               video conference). After our meeting, I will email your professors your specific ADA academic<br>
//               accommodations letter. Accommodations <b>MUST BE RENEWED EACH SEMESTER.</b><br>
//               Please let me know if you have any other questions or concerns. I look forward to hearing from you.<br>
//               Sincerely,<br>
//               Student Success Services`
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//     return 'Email sent successfully.';

//   } catch (error) {
//     console.error(error);
//     throw 'Email could not be sent.';
//   };
// };

// // users include the sender and recipient. Sender => from | recipient => to
// async function approvalEmail(users) {
//   try {
//     const mailOptions = {
//       from: users.from,
//       to: users.to,
//       subject: 'Accommodation Request Approved',
//       text: 'Your accommodations have been approved.'
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//     return 'Email sent successfully.';

//   } catch (error) {
//     console.error(error);
//     throw 'Email could not be sent.';
//   };
// };

// // users include the sender and recipient. Sender => from | recipient => to
// async function denialEmail(users) {
//   try {
//     const mailOptions = {
//       from: users.from,
//       to: users.to,
//       subject: 'Accommodation Request Declined',
//       text: 'Your accommodations have been declined. Reach out to your student success advisor'
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//     return 'Email sent successfully.';

//   } catch (error) {
//     console.error(error);
//     throw 'Email could not be sent.';
//   };
// };

// module.exports = {
//   sendEmail,
//   adminNotification,
//   confirmationEmail,
//   approvalEmail,
//   denialEmail,
// };