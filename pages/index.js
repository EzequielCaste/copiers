import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SimpleMap from '../components/MapInfo';
import Servicios from '../components/Servicios';
import Showcase from '../components/Showcase';

export default function Home() {
  console.log(window.navigator.language);
  return (
    <Layout>
      <Hero />
      <Servicios />
      <Showcase />
      <Contact />
      <SimpleMap />
    </Layout>
  );
}
