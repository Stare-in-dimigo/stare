import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <div className={styles.logo}>
                        <h1>Make the world<br/>stare at you.</h1>
                        <p>안녕하세요,<br/>
                            정보보호와 해킹에 대해<br/>
                            연구하고 있는 동아리 STARE입니다.</p>
                    </div>
                    <img className={styles.logoimage} src='/Home/LogoImage.svg'/>
                    <img className={styles.blacksmoke} src='/Home/blacksmoke.svg'/>
                    <a href="#lecture" className={styles.scroll}>스크롤해서 더보기<span></span><span></span></a>
                </div>
                <div id="lecture" className={styles.lecture}>
                    <h1 className={styles.lectureText}>여러 해킹 분야를 기초부터</h1>
                    <div className={styles.lectureItems}>
                        <div className={styles.lectureItem}>
                            <div className={styles.lectureItemImage}><img src="/Home/rev.svg"/></div>
                            <p className={styles.lectureItemTitle}>REV</p>
                        </div>
                        <div className={styles.lectureItem}>
                            <div className={styles.lectureItemImage}><img src="/Home/pwn.svg"/></div>
                            <p className={styles.lectureItemTitle}>PWN</p>
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
            </div>
        </div>
    )
}
