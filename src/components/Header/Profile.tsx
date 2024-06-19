import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
<<<<<<< HEAD
interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
=======

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
        <Text>Daniel Barbosa</Text>
        <Text color="gray.300" fontSize="small">
          danielmendess.dev@gmail.com
        </Text>
      </Box>
<<<<<<< HEAD
      )}
=======
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
      <Avatar
        size="md"
        name="Daniel Barbosa"
        src="https://github.com/daniel-barbosaa.png"
      />
    </Flex>
  );
}
