import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="پسورد جدید (حداقل 8 کاراکتر)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "این فیلد الزامی است",
            minLength: {
              value: 8,
              message: "پسورد باید حداقل از 8 کاراکتر باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="تکرار پسورد" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "این فیلد الزامی است",
            validate: (value) =>
              getValues().password === value || "رمز عبور مطابقت ندارد",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          لغو
        </Button>
        <Button disabled={isUpdating}>به روزرسانی پسورد</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
