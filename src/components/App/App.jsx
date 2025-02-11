import "./App.css";
import Navbar from "../Navbar/Navbar";
import Front from "../Front/Front";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router";

/* This App is brought to you by the hecking_squad */
/* Who is the squad? */

function App() {
  const sections = [
    {
      sectionName: "What is BlossomHack?",
      subtitle: "",
    },
    // {
    //   sectionName: "Our Events",
    //   subtitle: "",
    // },
    {
      sectionName: "FAQ",
      subtitle: "",
    },
    // {
    //   sectionName: "Sponsors",
    //   subtitle: "",
    // },
    {
      sectionName: "Our Team",
      subtitle: "",
    },
    {
      sectionName: "Hosted By",
      subtitle: "",
    },
    {
      sectionName: "Get in Touch",
      subtitle: "",
    },
    {
      sectionName: "Schedule",
      subtitle: "",
    },
    {
      sectionName: "Map",
      subtitle: "",
    },
  ];

  return (
    <div className="App">
      <Navbar />

      <Front />
      <Page sections={sections} />
      <hr />
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  );
}
export default App;
