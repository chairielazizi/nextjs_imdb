import User from "@/app/(models)/User";
import connectDB from "@/lib/db";

interface EmailAddress {
  email_address: string;
}

export const createOrUpdateUser = async (
  id: string,
  first_name: string,
  last_name: string,
  image_url: string,
  email_addresses: EmailAddress[]
) => {
  try {
    await connectDB();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profileImage: image_url,
          email: email_addresses[0].email_address,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log("Could not create or update user", error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connectDB();
    const user = await User.findOneAndDelete({ clerkId: id });
    return user;
  } catch (error) {
    console.log("Could not delete user", error);
  }
};
