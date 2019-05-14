import Layout from '../components/Layout'

export default ({statusCode}) =>(
  <Layout title="Opps, it's an error!!">
  {statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Couldn't get that page, sorry :(`}
    
  </Layout>
)