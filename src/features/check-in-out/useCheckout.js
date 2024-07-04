import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "خارجشده",
      }),

    onSuccess: (data) => {
      toast.success(`رزرو #${data.id} با موفقیت خارج شد`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("مشکلی پیش آمده"),
  });

  return { checkout, isCheckingOut };
}
