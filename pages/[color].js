import colors from "../data/colors.json"
import Layout from "../components/layout"

export async function getStaticPaths() {
  // loop through the colors array
  const paths = colors.map(color => ({
    // return an object with params.color set to the color's name
    params: { color: color.name },
  }))

  // Paths will look like this:
  // [
  //   { params: { color: 'Marsala' } },
  //   { params: { color: 'Illuminating'} }
  //   ...
  // ]
  return { paths, fallback: false }
}

// can edit this and the data file to be simpler since
// only using color names, no hex
export async function getStaticProps({ params }) {
  // find the info for just one color
  const color = colors.find(color => color.name === params.color)
  // return it in the necessary format.
  return { props: { color } }
}

export default function Color({ color }) {
  return (
    <Layout>
      <div className="color-page" style={{ backgroundColor: color.hex }}>
        <h1>{color.name}</h1>
      </div>
    </Layout>
  )
}
