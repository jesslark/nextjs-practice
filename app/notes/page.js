import Link from "next/link"

export default function Notes() {
  return (
    <>
      <h1>Notes About Learning Next.js</h1>
      <section>
        <p>
          Used this{" "}
          <a
            href="https://nextjs.org/learn/basics/create-nextjs-app
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            official tutorial
          </a>{" "}
          to start learning, comments on that below.
        </p>
        <p>
          Used this{" "}
          <a
            href="https://welearncode.com/beginners-guide-nextjs/
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            fun tutorial
          </a>{" "}
          as a jumping off place to see what I could build semi-independently.
          It has more about using APIs and deployment, so that will be fun to
          check out.
        </p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>
          Where do you keep tests? What's a good test suite for Next, does React
          Testing Library work with it?
        </p>
        <p>
          styles organization feels a little clunky, i guess styles are in the
          code with the js, or in files with the js, but also other styles are
          in the styles folder?
        </p>
        <p>
          a little confused about static rendering with data vs server side
          rendering, and also, how does the "renderer" or whatever know it's
          time to get new data and re-render the static page? or does it just
          assume the only time it should look for changes is a whole new build?
        </p>
        <p>
          Curious if there are conventions about ordering imports. I am mostly
          doing alpha right now but sometimes that seems weird.
        </p>
        <p>
          A little confused that in some places I see Head as a component and in
          others I see a metadata constant. Will need to learn more. Might be an
          old way / new way thing?
        </p>
      </section>
      <section>
        <h2>What Seems Super Cool</h2>
        <p>
          the file structure being the directory structure and all the magic
          dynamic routing and etc is very cool
        </p>
        <p>
          next accounts for CLS whish is THE WORST so that is super cool (CLS =
          cumulative layout shift), for example like when you go to click cancel
          and the page shifts and you order 100,000 of something you don't
          really erven want one of, etc
        </p>
        <p>
          very cool how classnames are given generated names to keep them unique
          but also retain the name you gave them for easy debug
        </p>
      </section>
      <section>
        <h2>
          What Seems Pretty Weird, Probably Indicating a Lack of Contextual
          Knowledge On My Part
        </h2>
        <p>
          I kind of hate the app routing thing where everything is called
          "page.js". I find that really annoying to navigate in the IDE. I bet
          there are ways to solve this in the IDE with some settings changes, or
          maybe I am wrong and it doesn't actually HAVE to be this way? Will
          have to learn more.
        </p>
      </section>
      <section>
        <h2>How Stuff Works Notes</h2>
        <section>
          <h3>Gotchas</h3>
          <p>
            If your markup is incorrect, such as an h tag nested in a p tag, or
            an li tag without a parent ul, you'll get a "hydration failure"
            error. So far that has been the issue every time I have had a
            hydration failure, so check that early.
          </p>
          <p>
            If stuff just breaks weird and makes no sense, restart the server.
          </p>
          <p>
            If you're silly like me, don't forget to check the server log for
            consoles and etc, anything server side won't show in the browser
            console, obv, but easy to forget.
          </p>
        </section>
        <section>
          <h3>Script Component</h3>
          <p>
            Adding a script into the head component with a script tag works, but
            does not give a clear idea of when it would load with respect to the
            other JavaScript code fetched on the same page. If a particular
            script is render-blocking and can delay page content from loading,
            this can significantly impact performance. When possible, instead
            use the Script component, it handles optimization automagically.
            Unfortunately, can't get the Script component to work.
          </p>
          <h3>Head Component</h3>
          <p>
            Seems weird to have to put it in every file, will experiment with
            putting it in a container file or a layout file.
          </p>
          <h3>Link Component</h3>
          <p>
            Super fast, I am told anyway. It feels pretty snappy. I read that
            the a tag slows everything way down, so only use that for external
            links. And remember to include the security stuff.
          </p>
          <h3>getStaticProps</h3>
          <p>
            It just runs, I guess? Tutorial had a problem with writing part of
            it async and not including await. Testing determined it worked both
            ways.
          </p>
          <h3>getStaticPaths</h3>
          <p>
            An array of IDs for using with files that are like
            [someParameter].js - thos square brackets are actually part of the
            filename.
          </p>
          <h3> Component</h3>
          <p></p>
        </section>
      </section>
      <section>
        <h2>Problems with the Next.js Tutorial</h2>
        <p>
          Script component doesn't work, fails silently as far as I can tell.
          Posted{" "}
          <a
            href="https://github.com/vercel/next.js/discussions/35064
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            here on github discussions
          </a>{" "}
          to try to figure it out.
        </p>
        <p>
          Tutorial is just plain broken in a couple places. With React and JS
          knowledge it's possible to figure it out but it feels bad that the
          official tutorial is like that.
        </p>
        <p>
          Tutorial has WAY too much "extra". There was no need to have all these
          dependencies. A beginner getting started style tutorial should be
          hello world, and build on that incrementally.
        </p>
        <p>Dependencies:</p>
        <ul>
          <li>"date-fns": "^2.30.0",</li>
          <li>"gray-matter": "^4.0.3",</li>
          <li>"next": "latest",</li>
          <li>"react": "18.2.0",</li>
          <li>"react-dom": "18.2.0",</li>
          <li>"remark": "^14.0.3",</li>
          <li>"remark-html": "^15.0.2"</li>
        </ul>
      </section>
    </>
  )
}
