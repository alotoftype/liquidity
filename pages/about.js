import Layout from '../layouts/Main';
import Staff from '../components/staff';

export default () => (
    <Layout >
      <section className="about">
    <p>is a party by queer/women people who are tired
of being harassed on the dancefloor, who want to see more diversity behind the decks, and to amplify those that may be marginalized elsewhere.
(But mostly we just love to dance to powerful beats.)
Our bookings are queer, trans, non-binary, and gender non- conforming folx, people of color, and women.</p>
</section>
  <section class="staff-members">
  <h2>staff</h2>
  <div className="container">
  <Staff url="https://via.placeholder.com/700x950" name="KATIE SHANE" title="employee"/>
  <Staff url="https://via.placeholder.com/700x950" name="MEENA PARASHAR" title="employee"/>
  <Staff url="https://via.placeholder.com/700x950" name="EM FANG" title="employee"/>
  </div>
  </section>
    </Layout>
)
