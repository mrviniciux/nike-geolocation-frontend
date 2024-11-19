import Head from 'next/head';
import Navbar from '../navbar/Navbar';
import Pitchbar from './Pitchbar';
import Subheader from './Subheader';

const Header = () => (
  <>
    <Head>
      <title>Nike Geolocation</title>
      <meta
        name="description"
        content="Nike, Centauro, Fisia, NWB, Onefan, X3M, Fit Dance"
      />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <Subheader />
    <Navbar />
    <Pitchbar />
  </>
);

export default Header;
