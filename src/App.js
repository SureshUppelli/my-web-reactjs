import * as React from "react";
//eslint-disable-next-line
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Screens/home";
import About from "./Screens/about";
import Services from "./Screens/services";
import Portfolio from "./Screens/portfolio";
import Team from "./Screens/team";
import Blog from "./Screens/blog";
import Contact from "./Screens/contact";

export default function App() {
  return (
    <div>
      {/* <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p> */}

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Portfolio />} />
        <Route path="/partners" element={<Team />} />
        <Route path="/careers" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}



function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
