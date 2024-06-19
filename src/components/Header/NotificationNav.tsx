import { HStack, Icon } from "@chakra-ui/react";
import { RiNavigationLine, RiUserAddLine } from "react-icons/ri";

export function NotificatioNav () {
    return (
        <HStack
<<<<<<< HEAD
            spacing={["6", "8"]}
            mx={["6","8"]}
            pr={["6","8"]}
=======
            spacing="6"
            mx="8"
            pr="8"
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700">
                <Icon as={RiNavigationLine} fontSize="20"/>
                <Icon as={RiUserAddLine} fontSize="20"/>
            </HStack>
    )
}