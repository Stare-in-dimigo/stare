import styles from '@/styles/Home/Intro.module.css'

export default function Intro() {
    return (
        <div className={styles.container}>
            <img src='/logo.svg' />
            <h1>당신의 입장에서 바라보는 정보보안</h1>
        </div>
    )
}
