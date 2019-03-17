import Layout from '../layouts/Main';
import Mix  from '../components/mix';
import css from '../sass/styles.scss'

export default () => (
  <Layout title="Mixes Page">
    <section className="mixes">
    <h2>Liquidity Mixes</h2>
    <div className="container">
      <Mix title="Devoye" />
      <Mix title="Zephyr Ann" />
      <Mix title="KFEELZ" />
      <Mix title="Muscle Cars" />
      <Mix title="Katie Shane" />
    </div>
    </section>
  </Layout>
)