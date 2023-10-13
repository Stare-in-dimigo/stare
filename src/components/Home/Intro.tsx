import styles from "@/styles/Home/Intro.module.css";

export default function Intro() {
    return (
        <div className={styles.introContainer}>
            <div className={styles.logo}>
                <h1>
                    <img className={styles.blacksmoke} src='/Home/blacksmoke.svg'/>
                    Make the world<br/>stare at you.
                </h1>
                <p>안녕하세요,<br/>
                    정보보호와 해킹에 대해<br/>
                    연구하고 있는 동아리 STARE입니다.</p>
            </div>
            <img className={styles.logoimage} src='/Home/LogoImage.svg'/>
            <a href="#lecture" className={styles.scroll}>스크롤해서 더보기<img src="/Home/arrow.svg"/></a>
        </div>
    )
}
