<<<<<<< HEAD
import { Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react"
=======
'use client'
import { Flex} from "@chakra-ui/react"
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
import { Profile } from "./Profile"
import { NotificatioNav } from "./NotificationNav"
import { SearchBox } from "./SearchBox"
import { Logo } from "./Logo"
<<<<<<< HEAD
import { useSidebarDrawer } from "@/contexts/SidebarDrawerContex"
import { RiMenuLine } from "react-icons/ri"

export function Header () {
    const {onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
    })
=======

export function Header () {
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
    return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center">
<<<<<<< HEAD
        {!isWideVersion && (
          <IconButton aria-label="Open navigation" mr="2" icon={<Icon as={RiMenuLine}/>} fontSize="24" variant="unstyled" onClick={onOpen}/>
        )}
      <Logo/>
      {isWideVersion && <SearchBox/>}
=======
      <Logo/>
      <SearchBox/>
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
      <Flex
        align="center"
        ml="auto">
            <NotificatioNav/>
<<<<<<< HEAD
            <Profile showProfileData={isWideVersion}/>
=======
            <Profile/>
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
       </Flex>
    </Flex>
    )
}