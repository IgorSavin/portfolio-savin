import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Post = ({ router }) =>(
  <Layout title={router.query.title}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam dolores facere, vero assumenda tempore quibusdam quae, tempora consectetur in reprehenderit atque aliquid delectus blanditiis sapiente dolorem cumque veniam et!</p>
  </Layout>
)

export default withRouter(Post);