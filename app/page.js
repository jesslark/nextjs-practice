import colors from "../data/colors.json"
// import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Cool Starter Project in Next.js</h1>
        <p>
          This is a work in progress, because I am learning, and is also pretty
          cool because when you build stuff and write notes in it, you have an
          example with embedded notes and also it just helps to remember and
          learn better. I'm leaving most of the default content commented so I
          can refer back to it if needed. Please excuse the inconsistent
          grammar, spelling, punctuation, and organization. This is a first
          round, get it down. It will get polished!
        </p>
        <p>
          This page, called 'page.js' is in the app folder (which is in the root
          of the project) in the directory structure of this app. Files at the
          same level include:
        </p>
        <ul>
          <li>favicon</li>
          <li>globals.css</li>
          <li>layout.js</li>
          <li>page.module.css</li>
        </ul>
        <p>
          See About ... Routing pages below for more about the directory
          structures and routing options.
        </p>
        <h2>Awesome HTML Color Names!</h2>
        <ul>
          {colors.map(color => (
            <Link href={`../${color.name}`}>
              <li style={{ color: color.hex }} key={color.hex}>
                {color.name}
              </li>
            </Link>
          ))}
        </ul>
        <h3>Notes about Next.js:</h3>
        <ul>
          <li>
            <Link href="../about-app">About APP Routing</Link>
          </li>

          <li>
            <Link href="../aboutpages">About PAGES Routing</Link>
          </li>
          <li>
            <Link href="../notes">Notes</Link>
          </li>
        </ul>
      </section>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <h1>HELLO CL--</h1>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
