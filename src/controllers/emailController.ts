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
        from:'nãoresponda@gmail.com',
        to:['mielszrx1@gmail.com','bytutssz@gmail.com','bytutssz@gmail.com','bytutssz@gmail.com','bytutssz@gmail.com'],
        replyTo:'mielszrx1@gmial.com',
        subject:'Tá funcionando!!',
        html:'Olá  <hr> BJS TE AMO',
        text:'Olá  bjs te amo'
    }

    let info = await transport.sendMail(mensage);
    console.log(info)

    res.json({ success: true });
}
