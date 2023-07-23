"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Text from "@/components/chakra/Text";
import Link from "@/components/chakra/Link";
import Heading from "@/components/chakra/Heading";
import Flex from "@/components/chakra/Flex";
import Image from "next/image";
import Loading from "./loading";

export default function Page() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const item = localStorage.getItem("email");

    if (!item) {
      redirect("/");
    }

    setEmail(item);
  }, []);

  if (!email) return <Loading />;

  return (
    <Flex
      maxW={{ base: "26.4375rem", lg: "unset" }}
      direction="column"
      height="100vh"
      pt={{ base: "150px", lg: "unset" }}
      mx={{ base: "auto", lg: "unset" }}
      px={{ base: "6", lg: "unset" }}
      alignItems={{ lg: "center" }}
      justifyContent={{ lg: "center" }}
      bg={{ base: "white", lg: "#36384D" }}
    >
      <Flex
        bg="white"
        h={{ base: "100%", lg: "520px" }}
        w={{ base: "100%", lg: "504px" }}
        borderRadius="36px"
        direction="column"
        p={{ lg: "3rem 4rem 4rem 4rem" }}
        boxShadow="0px 15px 60px 0px rgba(0, 0, 0, 0.25)"
      >
        <Image
          src="/icon-success.svg"
          alt="Checkmark image"
          width={64}
          height={64}
        />
        <Heading
          as="h1"
          fontSize={{ base: "2.5rem", lg: "3.5rem" }}
          mt={10}
          mb={6}
          fontWeight="bold"
        >
          Thanks for subscribing!
        </Heading>
        <Flex h="full" direction="column">
          <span style={{ paddingBottom: "40px", fontSize: "16px" }}>
            A confirmation email has been sent to <b>{email}</b>. Please open it
            and click the button inside to confirm your subscription.
          </span>
          <Link
            href="/"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            borderRadius="0.5rem"
            h="3.5rem"
            mt="auto"
            mb={{ base: "10", lg: "unset" }}
            _hover={{
              _before: { opacity: 0 },
              boxShadow: "0px 16px 32px 0px rgba(255, 97, 85, 0.50)",
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
            _active={{
              _before: { opacity: 0 },
            }}
            color="white"
            w="full"
          >
            <Text zIndex={1} fontWeight="bold" position="relative">
              Dismiss message
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

// <Flex
// >
// </Flex>
