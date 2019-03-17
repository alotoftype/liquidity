import Head from 'next/head'
import  css from "../sass/styles.scss";
import Header from '../components/header';
import Nav from '../components/navigation';
import Footer from '../components/footer';



export default ({children, title = 'This is the default title', css}) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav/>
    </header>
    <main>
      { children }
    </main>
    <Footer>
      Footer
    </Footer>
  </div>
)