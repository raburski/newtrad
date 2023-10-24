import Link from 'next/link'
import styles from './styles.module.css'

export default function NavBar(){
    return (
        <div className={styles.navbar}>
            <Link href="/">[LOGO]</Link>
            <Link href="/science">Science</Link>
            <Link href="/education">Education</Link>
            <Link href="/atlas">Atlas</Link>
            <Link href="/architects">Browse architects</Link>
        </div>
    )
}