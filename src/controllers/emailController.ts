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
    
    let {name,email,mensage,subject} = req.query as string;

    let mensage = {
        from:name,
        to:['mielszrx1@gmail.com'],
        replyTo:'mielszrx1@gmial.com',
        subject:subject,
        html:`Email:<strong>${email}</strong><br />
        Mensagem: <strong>${mensage}</strong>`,
        text:`Email:${email}||
        Mensagem: ${mensage}`
    }
    
    if(!email && !mensage){
        res.json({error:'Mensagem vazia, preencha o formulário corretamente para que possa ser feito o envio :)'});
        return;
    }
    
   

    await transport.sendMail(mensage);

    res.json({ success: true });
}
