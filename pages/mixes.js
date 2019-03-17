import Layout from '../layouts/Main';
import Mix  from '../components/mix';

export default () => (
  <Layout>
    <h2>Liquidity Mixes</h2>
    <section>
      <Mix title="Mix 1" />
      <Mix title="Mix 2" />
      <Mix title="Mix 3" />
      <Mix title="Mix 4" />
    </section>
  </Layout>
)