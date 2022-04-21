import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0
    // && rect.left >= 0
    // rect.bottom <=
    //   (window.innerHeight || document.documentElement.clientHeight) &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export default function Home() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const heroImgRef = useRef<HTMLPictureElement>(null);
  const cardRef = useRef<HTMLPictureElement>(null);

  function onScroll() {
    const scrollPosition = window.scrollY;
    // decrease divisor to increase scale rate
    heroTextRef.current &&
      (heroTextRef.current.style.transform = `scale(${
        1.5 - scrollPosition / 500
      })`);

    // decrease divisor to increase scroll rate
    const scrollRatio = 1 - scrollPosition / 575;
    let mql = window.matchMedia("(min-width: 1024px)");

    if (mql.matches && cardRef.current && isInViewport(cardRef.current)) {
      console.log("scrollPosition :>> ", scrollPosition);
      cardRef.current.style.transform = `scale(${100 + (scrollPosition / 25)}%)`;
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Efe-osa</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <header className={styles.hero}>
          <h1 className={styles.title} ref={heroTextRef}>
            Efe Osawaru Oyelade
          </h1>
        </header>
        <h3 className={styles.description}>
          I am a frontend developer from Abuja,Nigeria.
        </h3>
        <p className={styles.subtitle}>
          These are some of the projects I've worked on
        </p>
        <section>
          <figure className={styles.portfolioCard} ref={cardRef}>
            <Image
              objectFit={"cover"}
              objectPosition={"center"}
              layout="fill"
              alt="compare-the-hair"
              src="/cth.png"
            />
            <figcaption className={styles.portfolioCardTextBox}>
              <a
                className={styles.cardTitle}
                href="https://comparehair.co.uk/"
                target="_blank"
              >
                Compare The Hair
              </a>
              <p className={styles.cardInfo}>
                A hair marketplace for hair and supplies to remove the
                frustration out of the hair buying process by connecting you
                with the best and most reliable hair sellers.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.portfolioCard}>
            <Image
              objectFit={"cover"}
              objectPosition={"center"}
              layout="fill"
              alt="the-days-to-follow"
              src="/tdtf.png"
            />
            <figcaption className={styles.portfolioCardTextBox}>
              <a
                className={styles.cardTitle}
                href="http://thedaystofollow.com/"
                target="_blank"
              >
                The Days To Follow
              </a>
              <p className={styles.cardInfo}>
                This short 2D animation takes a look at the lives of two sisters
                whose lives are changed forever when they attend an END SARS
                protest.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.portfolioCard}>
            <Image
              objectFit={"cover"}
              objectPosition={"center"}
              layout="fill"
              alt="kemilade"
              src="/equal-measures.png"
            />
            <figcaption className={styles.portfolioCardTextBox}>
              <a
                className={styles.cardTitle}
                href="http://equalmeasures2030.org"
                target="_blank"
              >
                Equal Measures 2030
              </a>
              <p className={styles.cardInfo}>
                It is a collaboration of national, regional, and global leaders
                from feminist networks, civil society, international
                development, and the private sector. They collect data and
                evidence with advocacy and action on gender equality, to
                transform the lives of women and girls and realize the SDGs.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.portfolioCard}>
            <Image
              objectFit={"cover"}
              objectPosition={"center"}
              layout="fill"
              alt="kemilade"
              src="/rise-alt.png"
            />
            <figcaption className={styles.portfolioCardTextBox}>
              <a
                className={styles.cardTitle}
                href="https://rise-innovation.uk/"
                target="_blank"
              >
                Rise Research &amp; Innovation
              </a>
              <p className={styles.cardInfo}>
                Rise helps local businesses take charge of their innovation,
                capitalise on new opportunities and become more productive,
                competitive and resilient.
              </p>
            </figcaption>
          </figure>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/efe-osa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/efe-osa-osawaru-oyelade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="linkedin" />
        </a>
        <a
          href="https://medium.com/@Efe-osa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/medium.svg" alt="medium" />
        </a>
        <a
          href="mailto:eosawaruoyelade@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/mail.svg" alt="mail" />
        </a>
      </footer>
    </div>
  );
}
