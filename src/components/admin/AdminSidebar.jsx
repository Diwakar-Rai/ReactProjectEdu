import React from "react";
import { adminData } from "./admin";
import ListItem from "components/reusable/ListItem";
import {SiSololearn} from "react-icons/si"
const AdminSidebar = () => {
  // console.log(adminData);
  return (
      <>
          <section className="sidebarTop">
              <article><SiSololearn/></article>
              <article>LearnTimes</article>
              
          </section>
      <ul style={{
        paddingLeft:0}}>
        {adminData.sidebarData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem val={item} />
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default AdminSidebar;
