import { Button } from "@/components/ui/button";
import { websitePath } from "@/paths";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const SigninPage = () => {
  return (
    <div>
      Signin Page
      <Button asChild variant={"outline"} size={"icon"}>
        <Link href={{ pathname: websitePath() }}>
          <HomeIcon height={20} width={20} />
        </Link>
      </Button>
    </div>
  );
};

export default SigninPage;
