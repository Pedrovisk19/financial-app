import { ChakraProvider } from "@chakra-ui/react";
import "../styles/navbar.css";
import "../styles/main.css";
import "../styles/global.css";
import "../styles/criptos.css";
import "../styles/seeAll.css";
import "../styles/addContacts.css";

function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default App;
