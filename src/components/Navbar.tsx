'use client'

import { useState } from 'react'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img src='/logo.svg' className={styles.navbar__logo} />
        <div onClick={() => setIsOpen(!isOpen)} className={styles.menu}>
          <div className={isOpen ? `${styles.bar} ${styles.bar1}` : styles.bar}></div>
          <div className={isOpen ? `${styles.bar} ${styles.bar2}` : styles.bar}></div>
          <div className={isOpen ? `${styles.bar} ${styles.bar3}` : styles.bar}></div>
        </div>
        <div className={isOpen ? `${styles.navbar__links} ${styles.open}` : styles.navbar__links}>
          <ul>
            <li><a onClick={closeSidebar} href='/'>Home</a></li>
            <li><a onClick={closeSidebar} href='/lecture'>Lecture</a></li>
            <li><a onClick={closeSidebar} href='/issue'>Issue</a></li>
            <li><a onClick={closeSidebar} href='/advanced'>Advanced</a></li>
            <li><a onClick={closeSidebar} href='/tips'>Tips</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
