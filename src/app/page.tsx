import styles from "@/styles/Home/page.module.css";
import Intro from "@/components/Home/Intro";
import LectureIntro from "@/components/Home/LectureIntro";
import Vision from "@/components/Home/Vision";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Intro/>
                <LectureIntro/>
                <Vision/>
            </div>
        </div>
    )
}
