import User from "@/app/(models)/User";
import connectDB from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const PUT = async () => {
  const user = await currentUser();

  try {
    await connectDB();
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const existingUser = await User.findById(user.publicMetadata.userMongoId);
    if (!existingUser)
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json(
      { favourites: existingUser.favourites },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching user favourites", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
