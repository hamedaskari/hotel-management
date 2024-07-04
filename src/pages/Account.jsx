import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">به روزرسانی اکانت</Heading>

      <Row>
        <Heading as="h3">به روزرسانی اطلاعات کاربری</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">به روزرسانی پسورد</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
