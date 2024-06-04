'use client'
import { Flex, useBreakpointValue} from "@chakra-ui/react"
import { Profile } from "./Profile"
import { NotificatioNav } from "./NotificationNav"
import { SearchBox } from "./SearchBox"
import { Logo } from "./Logo"

export function Header () {
    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
    })
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
      <Logo/>
      {isWideVersion && <SearchBox/>}
      <Flex
        align="center"
        ml="auto">
            <NotificatioNav/>
            <Profile showProfileData={isWideVersion}/>
       </Flex>
    </Flex>
    )
}