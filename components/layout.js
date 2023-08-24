import Head from "next/head"
import Script from "next/script"
import styles from "../styles/colors.css"

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cool Fun Learning Next.js App!</title>
        {/* Script not working? Need to investigate more. 
        Maybe something with app/pages? */}
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout
