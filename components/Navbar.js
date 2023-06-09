import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/" style={{color:"white" ,textDecoration: 'none'}}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/About"  style={{color:"white" ,textDecoration: 'none'}}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}