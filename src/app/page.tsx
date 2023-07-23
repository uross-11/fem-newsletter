"use client";
import Image from "next/image";
import { Form } from "@/components/Form";
import Box from "@/components/chakra/Box";
import Heading from "@/components/chakra/Heading";
import Text from "@/components/chakra/Text";
import VStack from "@/components/chakra/VStack";
import Flex from "@/components/chakra/Flex";

export default function Home() {
  return (
    <Flex
      as="main"
      h="100vh"
      alignItems={{ lg: "center" }}
      justifyContent={{ lg: "center" }}
      bg={{ base: "white", lg: "#36384D" }}
    >
      <Flex
        bg="white"
        h={{ base: "unset", lg: "40rem" }}
        w={{ base: "100%", lg: "58rem" }}
        borderRadius="36px"
        direction={{ base: "column", lg: "row-reverse" }}
        p={{ lg: "1.5rem 1.5rem 1.5rem 0" }}
        boxShadow="0px 15px 60px 0px rgba(0, 0, 0, 0.25)"
      >
        <Box
          pos="relative"
          h={{ base: "284px", lg: "full" }}
          w="full"
          m={{ base: "0 auto", lg: "unset" }}
          maxW="400px"
          borderBottomRadius="2xl"
          overflow="hidden"
        >
          <picture>
            <source
              media="(min-width:992px)"
              srcSet="/illustration-sign-up-desktop.svg"
            />
            <img
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              alt=""
              src="/illustration-sign-up-mobile.svg"
            />
          </picture>
        </Box>
        <Box mx="auto" px={6} maxW="26.4375rem">
          <Heading
            as="h1"
            fontSize={{ base: "2.5rem", lg: "3.5rem" }}
            mt={10}
            fontWeight="bold"
          >
            Stay updated!
          </Heading>
          <Text my={6} size="md">
            Join 60,000+ product managers receiving monthly updates on:
          </Text>
          <VStack spacing="10px" mb={10}>
            <Flex w="full" alignItems="start" gap={4} minH="3rem">
              <Image src="/icon-list.svg" alt="" height={21} width={21} />
              Product discovery and building what matters
            </Flex>
            <Flex w="full" alignItems="start" gap={4} minH="3rem">
              <Image src="/icon-list.svg" alt="" height={21} width={21} />
              Measuring to ensure updates are a success
            </Flex>
            <Flex w="full" alignItems="start" gap={4}>
              <Image src="/icon-list.svg" alt="" height={21} width={21} />
              And much more!
            </Flex>
          </VStack>
          <Form />
        </Box>
      </Flex>
    </Flex>
  );
}
