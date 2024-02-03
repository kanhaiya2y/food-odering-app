import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold mt-20">
            Welcome to our platform! sign-up.
        </h1>
        <SignUp />
    </div>
</div>
  );
}