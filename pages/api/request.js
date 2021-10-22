import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const req = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const message = `
    plan: ${email}\r\n
  `;

  sendgrid.send({
    to: "christian.anese@gmail.com",
    from: "info@ortus.bz.it",
    subject: "WHAAAAT New Message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });
  /* templateId: "d-e9ca43eb4724468faa9e6bc4172b971f", */

  try {
    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default req;
