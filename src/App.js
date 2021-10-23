import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.div`
	&.container {
		width: 90%;
		margin: 0 auto;
		background: salmon;
	}
`;

function App() {
	return (
		<Container className="container">
			<Box className="box">
				<Typography variant="h1">Hola Mundo</Typography>
				<Button variant="contained">Login</Button>
			</Box>
			<Header></Header>
		</Container>
	);
}

export default App;
