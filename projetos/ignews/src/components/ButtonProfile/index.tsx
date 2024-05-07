import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal
  } from '@chakra-ui/react'
import styles from './style.module.scss'

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import { useSession } from 'next-auth/react'


export function ButtonProfile () {

    const session = useSession()
    
    
    return (
        <Menu >
            <MenuButton >
            <Avatar name={`${session.data?.user?.name}`}  />
            </MenuButton>
            <Portal>
                <MenuList className={styles.menuListContent}>
                <MenuItem className={styles.MenuListItem}>Menu 1</MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
                </MenuList>
            </Portal>
        </Menu>
    )
       
   
}