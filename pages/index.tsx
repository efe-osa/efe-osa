import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Efe-osa</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" rel="stylesheet"/>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Coming soon!
        </h1>

        <p className={styles.description}>
         Under Construction 🚧
        </p>
      </main>

      <footer className={styles.footer}>
       <a
          href="https://github.com/efe-osa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="github"/>
        </a>
        <a
          href="https://www.linkedin.com/in/efe-osa-osawaru-oyelade"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src="/linkedin.svg" alt="linkedin"/>
        </a>
        <a
          href="https://medium.com/@Efe-osa"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src="/medium.svg" alt="medium"/>
        </a>
        <a href="mailto:eosawaruoyelade@gmail.com"
            target="_blank"
          rel="noopener noreferrer"
          >
          <img src="/mail.svg" alt="mail"
          />
        </a>
      </footer>
    </div>
  )
}
