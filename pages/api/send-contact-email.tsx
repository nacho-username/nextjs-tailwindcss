/* eslint-disable import/no-anonymous-default-export */
import { Client } from 'postmark'

const client = new Client(process.env.POSTMARK_API_TOKEN)

export default async function (req: any, res: any) {
  try {
    const { name, email, phone, message } = req.body
    const response = await client.sendEmailWithTemplate({
      From: process.env.POSTMARK_FROM_EMAIL,
      To: email,
      Bcc: process.env.POSTMARK_TO_ADDRESS,
      ReplyTo: email,
      TemplateId: 31079077,
      TemplateModel: {
        name,
        email,
        phone,
        message,
      },
    })

    // Return success response
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error: any) {
    // Return error response
    res.status(500).json({ message: error.message })
  }
}
