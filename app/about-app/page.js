import Intro from "../components/intro"
import Link from "next/link"

export default function AboutApp() {
  return (
    <>
      <h1>About APP Routing</h1>
      <div>
        <Intro />
        <p>
          In the app directory style, all the main content is in the app folder,
          which is in the top level, sibling to node modules and the readme,
          etc. The folder structure is used to automagically build routes. Then
          you have some other folders for other stuff, like:
        </p>
        <ul>
          <li>
            pages: deprecated, kinda, at least it's the "old way", see this page
            for details
            <ul>
              <li>
                <Link href="../../aboutpages">About PAGES Routing</Link>
              </li>
            </ul>
          </li>
          <li>
            app/{`<whatever>`}: whatever folders are in here are automagically
            made into routes, but only if there is a "page.js" file inside it -
            I think!
          </li>
          <li>
            way less here because the tutorial app used the other routing style,
            will add more as I learn
          </li>
        </ul>
      </div>
    </>
  )
}
