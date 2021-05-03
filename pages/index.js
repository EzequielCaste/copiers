import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Servicios from '../components/Servicios';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Servicios />
      <Contact />
    </Layout>
  );
}
