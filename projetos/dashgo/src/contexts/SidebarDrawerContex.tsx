'use client'
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useContext } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode
}
type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarProvider ({children}: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)