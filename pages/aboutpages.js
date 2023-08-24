import Intro from "../app/components/intro"
import Link from "next/link"
import styles from "../app/globals.css"

export default function AboutPages() {
  return (
    <div className={styles.main}>
      <h1>About Pages Routing</h1>
      <div>
        <Intro />
        <p>
          This page looks a little different because it is not inheriting from
          the Layout that the pages in /app are using.
        </p>
        <p>
          In the pages directory style, all the main content is in the pages
          folder, which is in the top level, sibling to node modules and the
          readme, etc. The folder structure is used to automagically build
          routes. Then you have some other folders for other stuff, like:
        </p>
        <ul>
          <li>
            app: the "new way", see this page for details
            <ul>
              <li>
                <Link href="../about-app">About APP Routing</Link>
              </li>
            </ul>
          </li>

          <li>
            pages: this folder has to be named pages, and is used as a part of
            the routing, holds _app.js (the kind of parent/root folder for
            everything), index.js (the "home" page, or landing page, whatever,
            it's at the root of the url, like when devving it's at
            http://localhost:3000/)
          </li>
          <li>
            pages/{`<whatever>`}: wahtever folders are in here are automagically
            made into routes, pretty cool
          </li>
          <li>
            components: this holds child components, components that are used in
            pages, like a date component, also holds the layout component that
            is used to provide consistent layout and styling, and in the case of
            the tutorial the styles for that component, a css module file, is
            also stored there
          </li>
          <li>
            lib: holds utility type code, functions for dealing with whatever
            "business" type logic, also can be named whatever, but I think
            convention is something like lib, or utils
          </li>
          <li>
            posts: I think this could be anything, like mysupercoolposts, or
            whatever. I don't think it's part of the build structure that next
            uses to build routing, and it's used to hold content, in the case of
            the Next.js official tutorial, that content is blog posts in the
            form of markdown files.
          </li>
          <li>
            public: not sure, except the favicon and the images folder is in
            here, so maybe also fonts or other media or something, needs to be
            named this I think
          </li>
          <li>public/images: where images live</li>
          <li>
            styles: where global styles are kept, can be regular css, sass, or
            css modules, and other options, I think
          </li>
          <li>
            .next: holds files I haven't messed with yet, my guess is they are
            generated and never or not often directly touched by the dev
          </li>
        </ul>
      </div>
      <Link href="/">{`<=`} Go Back Home</Link>
    </div>
  )
}
