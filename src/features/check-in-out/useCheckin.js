import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "واردشده",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`رزرو #${data.id} با موفقیت واردشد`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("مشکلی پیش آمده"),
  });

  return { checkin, isCheckingIn };
}
