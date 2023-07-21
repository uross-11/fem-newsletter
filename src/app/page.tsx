"use client";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  email: yup
    .string()
    .email("Email format is not valid.")
    .required("Email is required."),
});

type FormValues = {
  email: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await sleep(1000);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl isInvalid={Boolean(errors.email?.message)}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="poop" {...register("email")} />
          {!errors.email?.message ? (
            <FormHelperText>
              Enter the email you&apos;d like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
          <Button isLoading={isSubmitting} type="submit">
            Subscribe to monthly newsletter
          </Button>
        </FormControl>
      </form>
    </main>
  );
}
