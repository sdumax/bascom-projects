import React, { Component } from "react";
import { HiSearch } from "react-icons/hi";
import Accordion from "../components/Accordion";
import ProjectCup from "../components/ProjectCup";
import { Sidebar } from "../components/Sidebar/";
import landing from "../img/landing.svg";

class Home extends Component {
  state = {
    search: false,
  };
  renderSearch() {
    this.setState({
      ...this.state,
      search: !false,
    });
  }
  render() {
    return (
      <main className="bg-gray-100 md:px-32 container overflow-y-auto h-screen">
        <div className="text-gray-500 pt-8 pb-5 text-2xl font-semibold flex justify-center items-center">
          <h2 className="mr-5 ">Home</h2>
          <span>
            <HiSearch />
          </span>
          <div className=""></div>
        </div>
        {/* <Accordion /> */}
        <div className="grid grid-cols-3 mt-12 pb-20">
          <img src={landing} alt="" className="w-48 ml-auto mr-12 pb-0 " />
          <div className="text-gray-500 col-span-2">
            <h3 className="mx-auto text-gray-700 font-bold text-4xl mb-4">
              Good evening, Max!
            </h3>
            <h5 className="mx-auto text-xl">
              Welcome back to your project, pick up from where you left off and
              those dreams come through.
            </h5>
            {/* <div className="flex ">
              <ProjectCup name="Bascom Projects" />
              <ProjectCup name="Pace time e" />
              <ProjectCup name="I2talk" />
            </div> */}
          </div>
        </div>
        <div className="mb-20">
          <Accordion homeSortName="Task Due Soon">
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
          </Accordion>
          <Accordion homeSortName="Task Due Soon">
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
          </Accordion>
          <Accordion homeSortName="Task Due Soon">
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
            <ProjectCup name="bascom project" to="/project/:projectId" />
          </Accordion>
        </div>
      </main>
    );
  }
}

export default Home;
