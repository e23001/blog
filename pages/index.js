import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const Home = props => (
  <Container>
    <Hero {...props} />
  </Container>
)

const getStaticProps = async context => ({
  props: {
    title: 'CUBE',
    subtitle: 'アウトプットしていくサイト',
    imageOn: true
  }
})
export { getStaticProps }
export default Home

// const Home = () => {
//   return (
//     <Container>
//       <Meta />
//       <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
//     </Container>
//   )
// }

// export default Home
