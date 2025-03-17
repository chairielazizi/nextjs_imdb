import { SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <div className="flex justify-center mt-10 h-screen">
      <SignIn />
    </div>
  );
};

export default page;
