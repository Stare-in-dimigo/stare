
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
                <h1>더보기</h1>
            </span>
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.betweenName}>
                            <h2>긴급 공지입니다 여러분</h2>
                        </div>
                        <p>지금 백현서가 배가 고픕니다</p>
                        <p>뭘 좀 먹고싶은데 먹으면 안되는걸 알고있어요</p>
                        <p>진짜 어떡하지</p>
                        <p>매점도 안여는데</p>
                        <p>배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다배고프다</p>
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