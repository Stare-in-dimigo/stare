'use client'

import {useState, useEffect} from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const closeSidebar = () => {
        setIsOpen(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <a onClick={closeSidebar} href='/'>
                    <img src='/logo.svg' className={styles.navbar__logo}/>
                </a>
                <div onClick={() => setIsOpen(!isOpen)} className={styles.menu}>
                    <div className={isOpen ? `${styles.bar} ${styles.bar1}` : styles.bar}></div>
                    <div className={isOpen ? `${styles.bar} ${styles.bar2}` : styles.bar}></div>
                    <div className={isOpen ? `${styles.bar} ${styles.bar3}` : styles.bar}></div>
                </div>
                <div className={isOpen ? `${styles.navbar__links} ${styles.open}` : styles.navbar__links}>
                    <ul>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/'); }} href='/' className={currentPath === '/' ? styles.active : ''}>Home</Link></li>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/lecture'); }} href='/lecture' className={currentPath === '/lecture' ? styles.active : ''}>Lecture</Link></li>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/issue'); }} href='/issue' className={currentPath === '/issue' ? styles.active : ''}>Issue</Link></li>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/advanced'); }} href='/advanced' className={currentPath === '/advanced' ? styles.active : ''}>Advanced</Link></li>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/tips'); }} href='/tips' className={currentPath === '/tips' ? styles.active : ''}>Tips</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
