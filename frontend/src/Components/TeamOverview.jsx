import React, { Component } from "react";
import "./TeamOverview.css";
import { Stack } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
} from "@chakra-ui/react";
import theme from "../index.js";

class TeamOverview extends Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <div>
          <div className="myTeams">My Teams</div>
          <div className="teamBox">
            <Stack variant="outline" spacing="0.5">
              <button className="teamButtonActive">The Nook Agency</button>
              <button className="teamButton">Freelancing</button>
              <button className="teamButton">+ Add another team</button>
            </Stack>
            <div className="teamToDo">
              <Tabs isFitted>
                <TabList>
                  <Tab>Upcoming</Tab>
                  <Tab>Overdue</Tab>
                  <Tab>Completed</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>You have no upcoming tasks.</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Great job! You don't have any overdue tasks.</p>
                  </TabPanel>
                  <TabPanel>
                    <p>You haven't completed any tasks.</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </ChakraProvider>
    );
  }
}

export default TeamOverview;
