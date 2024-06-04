import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Daniel Barbosa</Text>
        <Text color="gray.300" fontSize="small">
          danielmendess.dev@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Daniel Barbosa"
        src="https://github.com/daniel-barbosaa.png"
      />
    </Flex>
  );
}
