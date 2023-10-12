import styles from  "@/styles/Home/Vision.module.css";

export default function Vision() {
    return (
        <div className={styles.visionContainer}>
            <div className={styles.box}>
                <img src="/Home/icon2.svg" />
                <h1>해킹 초보자를 대상으로<br />
                    <strong>쉽고 간단하게</strong> 해킹을 알려주는 웹</h1>
            </div>
            <div className={styles.box}>
                <img src="/Home/icon.svg" />
                <h1>추가적인 <strong>교육 사이트</strong>들과<br />
                    각종 <strong>보안 관련 이슈</strong></h1>
            </div>
        </div>
    )
}
