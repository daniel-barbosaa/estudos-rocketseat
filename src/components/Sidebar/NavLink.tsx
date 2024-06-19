<<<<<<< HEAD
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinksProps} from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "./ActiveLink";


interface NavLinksProps extends ChakraLinksProps{
    icon: ElementType,
    children: string,
    href: string
}
export function NavLink({icon, children, href, ...rest }: NavLinksProps) {
    console.log(href)
    return (
        <ActiveLink href={href} passHref >
        <ChakraLink display="flex" {...rest}>
=======
import { Icon, Link, Text, LinkProps as ChakraLinksProps} from "@chakra-ui/react";
import { ElementType } from "react";


interface NavLinksProps extends ChakraLinksProps{
    icon: ElementType,
    children: string
}
export function NavLink({icon, children, ...rest }: NavLinksProps) {
    return (
        <Link display="flex" {...rest}>
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">
                {children}
            </Text>
<<<<<<< HEAD
          </ChakraLink>
        </ActiveLink>
=======
          </Link>
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
    )
}