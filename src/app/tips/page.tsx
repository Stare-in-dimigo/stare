
"use client";

import { useState, useEffect } from 'react';
import styles from '@/styles/Tips.module.css';

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
                <h1>더보기</h1>
            </span>
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.betweenName}>
                            <h2>긴급 공지입니다 여러분</h2>
                        </div>
                        <p>지금 백현서가 배가 고픕니다</p>
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
