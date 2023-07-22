import { redirect } from "next/navigation";
import Text from "@/components/chakra/Text";
import Button from "@/components/chakra/Button";

export default function Page() {
  // if (true) {
  //   redirect("/");
  // }

  return (
    <div>
      <Text>Thanks for subscribing!</Text>
      <Text>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </Text>

      <Button>Dismiss message</Button>
    </div>
  );
}
