const nodemailer = require("nodemailer");

const { EMAIL } = process.env;

exports.sendVerificationEmail = (email, name, url) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: "bljrmyrlkjmstred",
    },
  });
  const mailOption = {
    from: EMAIL,
    to: email,
    subject: "Social Media Verification",
    html: `<div style="max-width:600px"><div style="column-gap:24px;display:flex;border-bottom:1px solid #000;padding-bottom:14px"><div><img src="https://i.ibb.co/SPxc3Zf/icon-1.png" alt=""></div><p style="font-family:sans-serif">Confirm Email</p></div><p>Hi ${name},</p><p>Thanks for sign up in Facebook. Please verify your email by click confirm to continue</p><p>Verification Link:</p><a href="${url}" style="font-family:sans-serif;padding:7px 33px;background:#0c88ef;text-decoration:none;color:#fff;display:inline-block;margin:10px 0" href="#">Confirm</a><p>from CIT ©️ Facebook. CIT Platforms, Inc., Attention: Community Support, 1 Facebook Way, Menlo Park, CA 94025 This message was sent to shawon@gmail.com. To help keep your account secure, please don't forward this email.</p></div>`,
  };

  transporter.sendMail(mailOption, (err, res) => {
    if (err) {
      return err;
    } else {
      return res;
    }
  });
};
