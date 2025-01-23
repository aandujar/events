import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    route("/", "./App.tsx"),
    route("event", "./view/EventsView.tsx"),
    route("event/:id", "./view/EventDetail.tsx"),
  ] satisfies RouteConfig;