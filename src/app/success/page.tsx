import { redirect } from "next/navigation";

export default function Page() {
  if (true) {
    redirect("/");
  }

  return <div>poop</div>;
}
