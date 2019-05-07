import Link from 'next/link'
import Layout from '../components/Layout'


export default () => (
  <Layout title="About">
    <Link href="/">
      <a>Go home</a>
    </Link>
    <p>A React.js developer</p>
    <img src="/static/React-logo.png" alt="React" height="150px" />
  </Layout>
)
