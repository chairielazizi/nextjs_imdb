import User from "@/app/(models)/User";
import connectDB from "@/lib/db";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

interface Favourite {
  movieId: string;
}

export const PUT = async (req: NextRequest) => {
  const user = await currentUser();
  const client = await clerkClient();

  try {
    await connectDB();
    const data = await req.json();
    // if(!user) return new Response("Unauthorized", {status: 401});
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const existingUser = await User.findById(user.publicMetadata.userMongoId);
    if (
      existingUser?.favourites?.some(
        (fav: Favourite) => fav.movieId === data.movieId
      )
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        user.publicMetadata.userMongoId,
        { $pull: { favourites: { movieId: data.movieId } } },
        { new: true }
      );
      const updatedFavs = updatedUser.favourites.map(
        (fav: Favourite) => fav.movieId
      );
      await client.users.updateUserMetadata(user.id, {
        publicMetadata: { favourites: updatedFavs },
      });
      return NextResponse.json(updatedUser, { status: 200 });
    } else {
      const updateUser = await User.findByIdAndUpdate(
        user.publicMetadata.userMongoId, //get user id from clerk public metadata
        {
          $addToSet: {
            favourites: {
              movieId: data.movieId,
              title: data.title,
              image: data.image,
              description: data.overview,
              releaseDate: data.releaseDate,
              rating: data.voteAverage,
            },
          },
        },
        { new: true }
      );
      const updatedFavs = updateUser?.favourites?.map(
        (fav: Favourite) => fav.movieId
      );
      await client.users.updateUserMetadata(user.id, {
        publicMetadata: { favourites: updatedFavs },
      });
      return NextResponse.json(updateUser, { status: 200 });
    }
  } catch (error) {
    console.error("Error adding favourites to the user: ", error);
    return NextResponse.json(
      { error: "Error adding favourites to the user" },
      { status: 500 }
    );
  }
};
