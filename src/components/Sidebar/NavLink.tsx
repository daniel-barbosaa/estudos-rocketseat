import { Icon, Link, Text, LinkProps as ChakraLinksProps} from "@chakra-ui/react";
import { ElementType } from "react";


interface NavLinksProps extends ChakraLinksProps{
    icon: ElementType,
    children: string
}
export function NavLink({icon, children, ...rest }: NavLinksProps) {
    return (
        <Link display="flex" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">
                {children}
            </Text>
          </Link>
    )
}