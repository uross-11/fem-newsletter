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
    <Box as="main" bg="white" h="100vh">
      <Box
        pos="relative"
        h="284px"
        w="full"
        // maxW="sm"
        borderBottomRadius="2xl"
        overflow="hidden"
      >
        <Image
          src="/illustration-sign-up-mobile.svg"
          alt="Sign up illustration"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box mx={6}>
        <Heading as="h1" fontSize="2.5rem" mt={10} fontWeight="bold">
          Stay updated!
        </Heading>
        <Text my={6} size="md">
          Join 60,000+ product managers receiving monthly updates on:
        </Text>
        <VStack spacing="10px" mb={10}>
          <Flex w="full" alignItems="start" gap={4} minH="3rem">
            <Image src="/check.svg" alt="" height={21} width={21} />
            Product discovery and building what matters
          </Flex>
          <Flex w="full" alignItems="start" gap={4} minH="3rem">
            <Image src="/check.svg" alt="" height={21} width={21} />
            Measuring to ensure updates are a success
          </Flex>
          <Flex w="full" alignItems="start" gap={4}>
            <Image src="/check.svg" alt="" height={21} width={21} />
            And much more!
          </Flex>
        </VStack>
      </Box>
      <Form />
    </Box>
  );
}
