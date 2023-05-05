import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


export const contato = async (req: Request, res: Response) => {

    let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure:false,
        auth: {
            user: process.env.EMAIL as string,
            pass: process.env.SENHA as string
        }
    });

    let mensage = {
        from:req.query.name,
        to:['mielszrx1@gmail.com'],
        replyTo:'mielszrx1@gmial.com',
        subject:req.query.subject,
        html:'',
        text:req.query.mensage
    }

    await transport.sendMail(mensage);

    res.json({ success: true });
}
