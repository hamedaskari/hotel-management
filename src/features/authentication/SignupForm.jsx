import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm({ Role }) {
  const { signup, isLoading, setRole } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password, nationalID, nationality }) {
    setRole(Role);

    signup(
      nationalID
        ? { fullName, email, nationalID, nationality }
        : { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="نام و نام خانوادگی" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "این فیلد الزامی است" })}
        />
      </FormRow>

      <FormRow label="آدرس ایمیل" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "این فیلد الزامی است",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "لطفا یک ایمیل معتبر را وارد کنید",
            },
          })}
        />
      </FormRow>

      {Role === "Admin" ? (
        <>
          <FormRow
            label="رمز (حداقل 8 کاراکتر)"
            error={errors?.password?.message}
          >
            <Input
              type="password"
              id="password"
              disabled={isLoading}
              {...register("password", {
                required: "این فیلد الزامی است",
                minLength: {
                  value: 8,
                  message: "رمز باید حداقل 8 کاراکتر باشد",
                },
              })}
            />
          </FormRow>

          <FormRow label="تکرار رمز" error={errors?.passwordConfirm?.message}>
            <Input
              type="password"
              id="passwordConfirm"
              disabled={isLoading}
              {...register("passwordConfirm", {
                required: "این فیلد الزامی است",
                validate: (value) =>
                  value === getValues().password ||
                  "رمز باید مطابقت داشته باشد",
              })}
            />
          </FormRow>
        </>
      ) : (
        <>
          <FormRow label="کد ملی" error={errors?.nationalID?.message}>
            <Input
              type="text"
              id="nationalID"
              disabled={isLoading}
              {...register("nationalID", {
                required: "این فیلد الزامی است",
              })}
            />
          </FormRow>
          <FormRow label="ملیت" error={errors?.nationality?.message}>
            <Input
              type="text"
              id="nationality"
              disabled={isLoading}
              {...register("nationality", {
                required: "این فیلد الزامی است",
              })}
            />
          </FormRow>
        </>
      )}
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          لغو
        </Button>
        <Button disabled={isLoading}>ساخت کاربر جدید</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
