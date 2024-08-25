import { MongoClient } from "mongodb";
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";

const uri = "mongodb+srv://mustafamandviwala45:S0gq3CrUF3L7k7A8@cluster0.xhy61xa.mongodb.net/"; 
const client = new MongoClient(uri);

export const POST=async (request:any)=>{

    try{
     const {email,password}=await request.json();
     await client.connect();
     const db = client.db("test");
     const usersCollection  = db.collection("users");
     const existingUser = await usersCollection.findOne({ email });
     if (existingUser) {
        return new NextResponse("User already exists", { status: 409 });
     }
     const hashedPassword = await bcrypt.hash(password, 10);
     const result = await usersCollection.insertOne({
        email,
        password: hashedPassword,
      });
      return new NextResponse("User has been created", { status: 201 });

    }catch(error){
        console.error("Error creating user:", error);
        return new NextResponse("Internal Server Error", { status: 500 });

    }finally {
        await client.close();
    }



}