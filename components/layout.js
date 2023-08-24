import Head from "next/head"
import styles from "../styles/colors.css"

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cool Fun Learning Next.js App!</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout
