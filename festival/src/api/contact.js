import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
    from: email,
    to: 'tsalasarancibia@gmail.com',
    subject: `Envío de formulario de contacto desde`,
    html: `<p>Tiene un nuevo envío de formulario de contacto</p><br>
    <p><strong>Name: </strong> ${name} </p><br>
    <p><strong>Phone: </strong> ${phone} </p><br>
    <p><strong>Email: </strong> ${email} </p><br>
    <p><strong>Message: </strong> ${message} </p><br>

    `,
    });
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};