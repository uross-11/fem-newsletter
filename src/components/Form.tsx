import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FormControl from "./chakra/FormControl";
import Flex from "./chakra/Flex";
import FormLabel from "./chakra/FormLabel";
import Spacer from "./chakra/Spacer";
import FormErrorMessage from "./chakra/FormErrorMessage";
import Input from "./chakra/Input";
import Button from "./chakra/Button";
import Text from "./chakra/Text";
// import { cookies } from "next/headers";

const schema = yup.object({
  email: yup
    .string()
    .email("Valid email required.")
    .required("Email is required."),
});

export type FormValues = {
  email: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  async function onSubmit(data: FormValues) {
    await sleep(1000);
    alert(JSON.stringify(data, null, 2));
    // cookies().set("email", data.email);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormControl isInvalid={Boolean(errors.email?.message)}>
        <Flex>
          <FormLabel m="0" fontSize="xs" fontWeight="bold">
            Email address
          </FormLabel>
          <Spacer />
          {Boolean(errors.email?.message) && (
            <FormErrorMessage
              m="0"
              fontSize="xs"
              fontWeight="bold"
              color="fem.tomato"
            >
              {errors.email?.message}
            </FormErrorMessage>
          )}
        </Flex>
        <Input
          type="email"
          h="3.5rem"
          mt="0.5rem"
          mb="1.5rem"
          _invalid={{
            background: "rgba(255, 97, 85, 0.15)",
            color: "fem.tomato",
            borderColor: "fem.tomato",
            borderWidth: "1px",
            _placeholder: { color: "fem.tomato" },
          }}
          _focusVisible={{
            borderColor: "fem.darkSlateGrey",
            borderWidth: "1px",
            _invalid: { borderColor: "fem.tomato" },
          }}
          borderRadius="0.5rem"
          placeholder="email@company.com"
          {...register("email")}
        />
        <Button
          position="relative"
          borderRadius="0.5rem"
          h="3.5rem"
          type="submit"
          _hover={{
            _before: { opacity: 0 },
            boxShadow: "0px 16px 32px 0px rgba(255, 97, 85, 0.50)",
          }}
          _active={{
            _before: { opacity: 0 },
          }}
          _loading={{
            _before: { opacity: 0 },
          }}
          bgGradient="linear(to-b, #FF6A3A 0%, #FF527B 100%)"
          overflow="hidden"
          _before={{
            position: "absolute",
            content: `""`,
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            bg: "fem.darkSlateGrey",
            transition: "220ms",
          }}
          color="white"
          w="full"
          mb={10}
          isLoading={isSubmitting}
        >
          <Text zIndex={1} position="relative">
            Subscribe to monthly newsletter
          </Text>
        </Button>
      </FormControl>
    </form>
  );
};