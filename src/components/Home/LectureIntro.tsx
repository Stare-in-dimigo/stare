import styles from "@/styles/Home/LectureIntro.module.css"

export default function LectureIntro() {
    return (
        <div id="lecture" className={styles.lectureIntroContainer}>
            <h1 className={styles.lectureText}>여러 해킹 분야를 기초부터</h1>
            <div className={styles.lectureItems}>
                <div className={styles.lectureItem}>
                    <div className={styles.lectureItemImage}><img src="/Home/pwn.svg"/></div>
                    <p className={styles.lectureItemTitle}>PWN</p>
                </div>
                <div className={styles.lectureItem}>
                    <div className={styles.lectureItemImage}><img src="/Home/rev.svg"/></div>
                    <p className={styles.lectureItemTitle}>REV</p>
                </div>
                <div className={styles.lectureItem}>
                    <div className={styles.lectureItemImage}><img src="/Home/web.svg"/></div>
                    <p className={styles.lectureItemTitle}>WEB</p>
                </div>
                <div className={styles.lectureItem}>
                    <div className={styles.lectureItemImage}><img src="/Home/crypto.svg"/></div>
                    <p className={styles.lectureItemTitle}>CRYPTO</p>
                </div>
            </div>
        </div>
    )
}
