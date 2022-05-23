import Head from 'next/head';
import Navbar from '../navbar/Navbar';

const Header = () => (
  <>
    <Head>
      <title>Grupo SBF</title>
      <meta
        name="description"
        content="Nike, Centauro, Fisia, NWB, Onefan, X3M, Fit Dance"
      />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <Navbar />
  </>
);

export default Header;
