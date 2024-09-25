
import {writeFile} from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(req){
    const data = await req.formData();
    const file = data.get('file');

    //the parameter name inside the data.get is based on what is written in frontend

    if(!file){
        return NextResponse.json({message:'No image found', success: false});
    }

    //converting the image we want to recieve to buffer
    const byteData = await file.arrayBuffer();

    const buffer = Buffer.from(byteData);

    //Now we take path where we want to upload file right now we are taking public later can send to DB
    const path = `./public/${file.name}`;
    //file contains all the information that we clg in frontend

    await writeFile(path, buffer);
    //writefile takes parameter path where we want to upload and buffer of image that we want to upload

    return NextResponse.json({message: 'File uploaded succesful', success:true});
}