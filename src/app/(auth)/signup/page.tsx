import { Button } from "@/components/ui/button";
import { websitePath } from "@/paths";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div>
      Signup Page
      <Button asChild variant={"outline"} size={"icon"}>
        <Link href={{ pathname: websitePath() }}>
          <HomeIcon height={20} width={20} />
        </Link>
      </Button>
    </div>
  );
};

export default SignupPage;
