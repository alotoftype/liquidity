import Layout from '../layouts/Main';
import Staff from '../components/staff';

export default () => (
    <Layout title="About Page">
        <section className="about">
            <p className="container is-centered">
                Liquidity started as a small party in the back room of a
                punk bar in Bushwick, Brooklyn to address the lack of
                diversity in NYC underground dance music.
            </p>
        </section>
        <section className="staff-members">
            <h2>staff</h2>
            <div className="columns is-multiline">
                <Staff
                    url="https://via.placeholder.com/900x1200/FF806B/FFFFFF"
                    name="KATIE SHANE"
                    title="founder"
                />
                <Staff
                    url="https://via.placeholder.com/900x1200/FF806B/FFFFFF"
                    name="MEENA PARASHAR"
                    title="founder"
                />
                <Staff
                    url="https://via.placeholder.com/900x1200/FF806B/FFFFFF"
                    name="EM FANG"
                    title="Designer & Partner"
                />
            </div>
        </section>
    </Layout>
);
