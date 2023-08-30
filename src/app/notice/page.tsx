
"use client";

import { useState, useEffect } from 'react';
import styles from '@/styles/Notice/Notice.module.css';

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNoticeClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseClick = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <img src='/cat.svg' />
            <span className={styles.noticetrigger} onClick={handleNoticeClick}>
                <h1>This is Notice</h1>
            </span>
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.betweenName}>
                            <h2>대충 이 공지의 제목</h2>
                        </div>
                        <p>블라블라</p>
                        <p>야다야다</p>
                        <p>블라블라</p>
                        <p>야다야다</p>
                        <p>오 배좀 고픈데</p>
                        <div className={styles.betweenName}>
                            <p>Important Notice</p>
                        </div>
                        <button className={styles.modalButton} onClick={handleCloseClick}>Close</button>
                        
                    </div>
                </div>
            )}
        </div>
    );
}