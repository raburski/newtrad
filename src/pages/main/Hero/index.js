import Link from 'next/link'
import styles from './styles.module.css'

export default function Hero(){
    return (
        <div className={styles.container}>
            <Link href="/architects">Show traditional architects in your region ➡️</Link>
        </div>
    )
}