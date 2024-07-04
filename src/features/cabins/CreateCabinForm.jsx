import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="اسم اتاق" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "این فیلد الزامی است",
          })}
        />
      </FormRow>

      <FormRow label="حداکثر ظرفیت" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "این فیلد الزامی است",
            min: {
              value: 1,
              message: "ظرفیت باید حداقل 1 باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="قیمت" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "این فیلد الزامی است",
            min: {
              value: 1,
              message: "قیمت نمیتواند 0 باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="تخفیف" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "این فیلد الزامی است",
            validate: (value) =>
              +value <= +getValues().regularPrice ||
              "تخفیف نمیتواند از قیمت اتاق بیشتر باشد",
          })}
        />
      </FormRow>

      <FormRow label="توضیح برای اتاق" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "این فیلد الزامی است",
          })}
        />
      </FormRow>

      <FormRow label="عکس اتاق">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "این فیلد الزامی است",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          لغو
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "ویرایش اتاق" : "ساخت اتاق جدید"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
