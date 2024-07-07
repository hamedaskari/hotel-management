import { useMutation } from "@tanstack/react-query";
import { signupAdmin, signupGuest } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useState } from "react";

export function useSignup() {
  const [Role, setRole] = useState();
  console.log(Role);
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: Role === "Admin" ? signupAdmin : signupGuest,
    onSuccess: (user) => {
      toast.success("اکانت با موفیقت ساخته شد!");
    },
  });

  return { signup, isLoading, setRole };
}
