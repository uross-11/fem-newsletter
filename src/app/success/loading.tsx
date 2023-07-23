"use client";
import { Flex, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      maxW={{ base: "26.4375rem", lg: "unset" }}
      bg={{ base: "white", lg: "#36384D" }}
      h="full"
      direction="column"
      height="100vh"
      pt={{ base: "150px", lg: "unset" }}
      mx={{ base: "auto", lg: "unset" }}
      px={{ base: "6", lg: "unset" }}
      justifyContent={{ lg: "center" }}
      alignItems={{ lg: "center" }}
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
        <SkeletonCircle flexShrink={0} h="64px" w="64px" />
        <SkeletonText
          mt={10}
          mb={6}
          noOfLines={2}
          skeletonHeight={{ base: "3rem", lg: "4rem" }}
        />
        <Flex h="full" direction="column">
          <SkeletonText pb={10} noOfLines={3} skeletonHeight="1rem" />
          <Skeleton
            h="3.5rem"
            mt="auto"
            mb={10}
            borderRadius="0.5rem"
            w="full"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
