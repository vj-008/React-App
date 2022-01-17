import Form from "../components/Form";
import AboutUs from "../components/AboutUs";

export const RoutesObj = [
  {
    path: "/",
    elements: <Form />,
  },
  {
    path: "/aboutus/:id",
    elements: <AboutUs />,
  },
];
