import  css from "../sass/styles.scss";
import Layout from "../layouts/Main";
import img from '../images/2.jpg';
//import  PIXI from 'pixi.js';


export default()  => (
<Layout>
<section className={css.greeting}>
<h2>Intro text to start</h2>
<img src={img} alt=""/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro harum ab magni asperiores obcaecati temporibus dolore, numquam veritatis ratione eos modi rem, officiis voluptatibus mollitia nisi deserunt quis odit?</p>
</section>
</Layout>
)
