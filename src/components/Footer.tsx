import styles from '@/styles/Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/Stare-in-dimigo" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
            </a>
            <h1>&copy; 2023 STARE. All rights reserved.</h1>
        </div>
    )
}
