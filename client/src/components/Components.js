import React, { Component } from "react";
import Input from "./Input";
import Badge from "./Badge";
import Divider from "./Divider";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar/Sidebar";
import { Avatar } from "./Avatar/";
import Button from "./Button/Button";

class Components extends Component {
  render() {
    return (
      <div className="w-100 flex">
        {/* <Sidebar /> */}
        <div className="">
          <h1 className="font-bold text-4xl my-5 mx-5 flex ">Components</h1>
          <div className="">
            <div className="mx-5 my-3">
              <h3 className="font-bold text-3xl my-5">Input fields</h3>
              <Input />
              <Avatar name="Chidinma" color="green" />
              <Avatar name="maxwell" color="blue" />
              <br />
              <Searchbar />
              <br />
              <Button bgColor="red" size="sm">
                small
              </Button>
              <Button bgColor="red" size="md">
                regular
              </Button>
              <Button bgColor="red" size="lg">
                large
              </Button>
            </div>

            <Divider />
            <div className="mx-5 my-3">
              <h1 className="font-bold text-3xl my-5">Badges</h1>
              <Badge color="red" rounded="sm">
                Overdue
              </Badge>
              <Badge color="blue" rounded="full">
                In progess
              </Badge>
              <Badge color="green" width="32">
                Completed
              </Badge>
              <Badge color="indigo" rounded="full" width="40">
                Completed
              </Badge>
              <Badge color="yellow">In Review</Badge>
              <Badge color="gray">To do</Badge>
            </div>
            <Divider />
            <div className="mx-5 my-3">
              <h1 className="font-bold text-3xl my-5">Dividers</h1>
              <Divider width="24" />
              <div className="my-4"></div>
              <Divider width="" />
              <div className="my-4"></div>
              <Divider width="60" />
              <div className="my-4"></div>
              <Divider width="1/4" />
              <div className="my-4"></div>
              <Divider width="4/5" />
            </div>
            <Divider />
            <div className="mx-5 my-3">
              <h1 className="font-bold text-3xl my-5">Breadcrumbs</h1>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Components;
