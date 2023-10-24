import Link from 'next/link'
import styles from './styles.module.css'

export default function Footer(){
    return (
        <div className={styles.navbar}>
            <Link href="/">some links for better seo</Link>
        </div>
    )
}