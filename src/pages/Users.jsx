import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">ساخت کاربر جدید (ادمین)</Heading>
      <SignupForm Role={"Admin"} />
      <Heading as="h1">ساخت کاربر جدید (مهمان)</Heading>
      <SignupForm Role={"Guest"} />
    </>
  );
}

export default NewUsers;
