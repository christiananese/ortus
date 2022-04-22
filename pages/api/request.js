import sendgrid from "@sendgrid/mail";
import dayjs from "dayjs";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const req = async (req, res) => {
  const {
    arrivalDate,
    departureDate,
    email,
    adults,
    children,
    firstName,
    lastName,
    tel,
    street,
    zipCode,
    location,
    country,
    yourMessage,
  } = req.body;

  if (!email && !tel) {
    return res.status(400).json({ error: "Email is required" });
  }

  const message = `
    Hallo Barbara,\r\n
    ${firstName} ${lastName} hat dir eine neue Anfrage gestellt:\r\n

    Zeitraum: ${dayjs(arrivalDate).format("DD.MM.YYYY")}  - ${dayjs(
    departureDate
  ).format("DD.MM.YYYY")}\r\n

    Erwachsene: ${adults}\r\n
    Kinder: ${children}\r\n

    E-Mail: ${email}\r\n
    Tel: ${tel}\r\n
    Adresse: ${street}, ${zipCode} ${location} ${country}\r\n

    ${yourMessage}\r\n
  `;

  sendgrid.send({
    to: "info@ortus.bz.it",
    from: "info@ortus.bz.it",
    subject: "Neue Anfrage",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  try {
    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default req;
