var nodemailer = require("nodemailer");

function sendEmail(username, password, email) {
  /*var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "appshoppingtad@gmail.com",
      pass: "hoangdat285",
    },
  });*/

  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "mail.phongdaotao.com",
    port: 25,
    secure: false,
    auth: {
      user: "sinhvien@phongdaotao.com",
      pass: "svtdtu",
    },
  });

  var mailOptions = {
    from: "ABCXYZ@company.com",
    to: `${email}`,
    subject:
      "CHÚC MỪNG BẠN ĐÃ ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG TẠI VÍ ĐIỆN TỬ METAMASK",
    text: `Đây là thông tin tài khoản và mật khẩu của bạn để có thể đăng nhập vào hệ thống.Vui lòng thay đổi mật khẩu lần đầu sau khi đăng nhập
        Tài khoản: ${username}
        Mật khẩu: ${password}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email đã được gửi thành công" + info.response);
    }
  });
}

module.exports = sendEmail;
