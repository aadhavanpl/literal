import '../styles/globals.css'
import '../styles/variables.css'
import '../styles/media-queries.css'

import '../assets/fonts/stylesheet.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
	return <>
	<Navbar />
		<Component {...pageProps} />
	<Footer />
	</>
}

export default MyApp