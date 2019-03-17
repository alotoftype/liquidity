import  css from "../sass/styles.scss";
import Layout from "../layouts/Main";
import img from '../images/2.jpg';
//import  PIXI from 'pixi.js';


export default()  => (
<Layout title="Homepage">
<section className="greeting">
<img className="background" src={img} alt=""/>
<div className="homepage-content">
<h1>Intro text to start</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro harum ab magni asperiores obcaecati temporibus dolore, numquam veritatis ratione eos modi rem, officiis voluptatibus mollitia nisi deserunt quis odit?</p>
</div>
</section>
</Layout>
)
