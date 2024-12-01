import { endpoints, mutator } from "@/axios";
import { ILoginPayload, IRegisterPayload, ISignupResponse } from "@/types/type";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";


export function useLogin() {
    // const queryClient = useQueryClient();
    const { mutateAsync, data, isPending, error, isError } = useMutation<
     ISignupResponse,
      any,
      ILoginPayload
    >({
      mutationFn: (values: ILoginPayload) =>
        mutator({ method: "POST", data: values, url: endpoints.auth.login }),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
      },
    });
  
    return useMemo(
      () => ({
        login: mutateAsync,
        data,
        isLoggingIn: isPending,
        error,
        isError,
      }),
      [mutateAsync, data, isPending, error, isError]
    );
  }

  export function useRegister() {
    // const queryClient = useQueryClient();
    const { mutateAsync, data, isPending, isError, error } = useMutation<
       ISignupResponse,
      any,
      IRegisterPayload
    >({
      mutationFn: (values: IRegisterPayload) =>
        mutator({ method: "POST", data: values, url: endpoints.auth.register }),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
      },
    });
  
    return useMemo(
      () => ({
        signup: mutateAsync,
        data,
        isRegistering: isPending,
        error,
        isError,
      }),
      [mutateAsync, data, isPending, error, isError]
    );
  }