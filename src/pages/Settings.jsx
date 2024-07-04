import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row>
      <Heading as="h1">به روز رسانی تنظیمات</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
