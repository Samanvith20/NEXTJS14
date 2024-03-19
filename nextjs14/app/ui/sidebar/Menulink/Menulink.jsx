'use client'

import Link from "next/link"
import styles from '@/app/ui/sidebar/menuLink/menuLink.module.css'
import { usePathname } from "next/navigation"


const MenuLink = ({item}) => {
    const pathname = usePathname()
  return (
    <div className={`${styles.container} ${pathname === item.path && styles.active}`}>
      <Link href={item.path} >
        {item.icon}
        {item.title}
      </Link>
    </div>
  )
}

export default MenuLink