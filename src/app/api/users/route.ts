import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const uri = "mongodb+srv://mustafamandviwala45:S0gq3CrUF3L7k7A8@cluster0.xhy61xa.mongodb.net/"; 
const client = new MongoClient(uri);

export const POST = async (request: any) => {
  try {
    const { email, password } = await request.json();
    console.log("Email and password of user::",email,password);
    await client.connect();
    const db = client.db("test");
    const usersCollection = db.collection("users");
    
    const existingUser = await usersCollection.findOne({ email });
    console.log("User existing user",existingUser);
    if (!existingUser) {
      return new NextResponse("User does not exist", { status: 409 });
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      return new NextResponse("Invalid credentials", { status: 401 });
    }

    // Send user data as JSON
    const userResponse = {
      id: existingUser._id.toString(),
      email: existingUser.email,
      name: existingUser.name, // Add any other fields you want to return
    };

    return NextResponse.json(userResponse, { status: 200 });

  } catch (error) {
    console.error("Error Getting user:", error);
    return new NextResponse("Internal Server Error", { status: 500 });

  } finally {
    await client.close();
  }
};
