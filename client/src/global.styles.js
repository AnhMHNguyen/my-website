import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		--color-primary: #DA7F8F;
		--color-secondary: #A7BBC7;
		--color-blue: #E1E5EA;
		--color-background: #FAF3F3;
		--font-title: 'Hammersmith One', sans-serif;
	}
	body {
		font-family: 'Source Sans Pro', sans-serif;
		background-color: #FAF3F3;
		margin: 0;
	}
	a {
		text-decoration: none;
		color: black;
	}
	* {
		box-sizing: border-box;
	}
	li {
		list-style-type: none;
	}
`;