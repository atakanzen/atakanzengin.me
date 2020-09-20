/**
 *
 * Lambda Function hosted on AWS to send e-mail with SendGridAPI
 *
 */

const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  const { email, name, message } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    const msg = {
      to: process.env.TO_EMAIL,
      from: {
        email: process.env.FROM_EMAIL,
        name: process.env.FROM_NAME
      },
      subject: `Message from ${email} | ${name}`,
      text: message,
      html: `<strong>${message}</strong>`
    };

    return await sgMail.send(msg);
  } catch (err) {
    return {
      msg: 'Error happened'
    };
  }
};
