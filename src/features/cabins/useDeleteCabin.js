import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinAPI,
    onSuccess: () => {
      toast.success(`Cabin Successfully deleted`);

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message + ` in row`),
  });

  return { isDeleting, deleteCabin };
}
