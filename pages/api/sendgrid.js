import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	const body = JSON.parse(req.body);
	console.log("body", body);

	const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  Message: ${body.subject}`;

	try {
		await sendgrid
			.send({
				to: "vaibhav0820@gmail.com",
				from: "vaibhavcrane@me.com",
				subject: "New email from your portfolio",
				text: message,
				html: message.replace(/rn/g, "<br>"),
			})
			.then(() => {
				res.status(200).json({ status: "Ok" });
			});
	} catch (error) {
		console.log(error);
		return res.status(error.code).json(error);
	}
}

export default sendEmail;
