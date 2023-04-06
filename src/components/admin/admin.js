import { AiFillFolderAdd } from "react-icons/ai";

export const adminData = {
  sidebarData: [
    {
      icon: <AiFillFolderAdd />,
      linkTo: "/admin",
      styles: {
        // background: "#98bec3",
        height: 40,
        width: "100%",
        borderBottom: "1px solid white",
        display: "flex",
        alignItems: "center",
        margin: "5px 0",
        background: "rgba #a9ccd310 !important",
        boxShadow: "0 5px 5px 0 rgba( 31, 38, 135, 0.2 )",
        borderRadius: "5px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        link: {
          color: "#333",
        },
        span: {
          margin: "0 5px",
          fontSize: 18,
        },
      },
      listText: "All Bootcamp",
    },
    {
      icon: <AiFillFolderAdd />,
      linkTo: "/admin/userTable",
      styles: {
        height: 40,
        width: "100%",
        borderBottom: "1px solid white",
        display: "flex",
        alignItems: "center",
        margin: "5px 0",
        background: "rgba #a9ccd310 !important",
        boxShadow: "0 5px 5px 0 rgba( 31, 38, 135, 0.2 )",
        borderRadius: "5px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        link: {
          color: "#333",
        },
        span: {
          margin: "0 5px",
          fontSize: 18,
        },
      },
      listText: "All Users",
    },
    {
      icon: <AiFillFolderAdd />,
      linkTo: "",
      styles: {
        height: 40,
        borderBottom: "1px solid white",
        display: "flex",
        alignItems: "center",
        margin: "5px 0",
        background: "rgba #a9ccd310 !important",
        boxShadow: "0 5px 5px 0 rgba( 31, 38, 135, 0.20 )",
        borderRadius: "5px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        link: {
          color: "#333",
          width: "100%",
        },
        span: {
          margin: "0 5px",
          fontSize: 18,
        },
      },
      listText: "Delete Courses",
    },
  ],
};
