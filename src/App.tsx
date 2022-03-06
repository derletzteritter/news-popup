import React from 'react';
import './App.css';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import NrkFeed from "./features/nrk/NrkFeed";

function App() {
	return (
		<div className="App">
			<Tabs variant="enclosed" mt={2}>
				<TabList>
					<Tab>NRK</Tab>
					<Tab>VG</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<NrkFeed />
					</TabPanel>
					<TabPanel>
						Loading VG feed
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}

export default App;
