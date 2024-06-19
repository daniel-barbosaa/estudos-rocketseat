<<<<<<< HEAD

import { Box, Drawer, DrawerContent, DrawerOverlay, useBreakpointValue, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { useSidebarDrawer } from "@/contexts/SidebarDrawerContex";

export function Sidebar() {
  const {onClose,isOpen} = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isDrawerSidebar){
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav/>
=======
"use client";
import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import Link from "next/link";
export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <Link href="/dashboard">
          <NavLink  icon={RiDashboardLine}>Dashboard</NavLink>
          </Link>
          <Link href="/users">
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
          </Link>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </Stack>
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
    </Box>
  );
}
