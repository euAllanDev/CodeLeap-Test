import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await api.get("/");
      return response.data.results;
    }
  });
}