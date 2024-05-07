import bcrypt from "bcrypt";
import User from "@/lib/models/user";
import dbConnect from "@/lib/db";

export async function POST(req: Request) {
  const { email, userName, password } = await req.json();

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return Response.json(
        { message: "Email is already taken. Please choose another email." },
        { status: 400 }
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await new User({
      userName,
      email,
      password: hashedPassword,
    }).save();

    return Response.json(
      { message: "Registration Successful!" },
      { status: 200 }
    );
  } catch (error) {
    Response.json(
      { message: `An error occured while registering user. Error: ${error}` },
      { status: 500 }
    );
  }
}
