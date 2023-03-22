import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import BlogPostDetails from "./components/BlogPostDetails";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog/:postId" component={BlogPostDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;

// Now that you have installed the necessary dependencies, let's start by setting up React Router. In your src folder, create a new file called routes.js. Inside this file, import the necessary components from react-router-dom and define your routes:
// This sets up two routes: one for the homepage (Home component) and another for individual blog post pages (BlogPostDetails component). You'll need to create these components and place them in the src/components directory.