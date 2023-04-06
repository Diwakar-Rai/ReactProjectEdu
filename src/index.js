import { createRoot } from "react-dom/client";
import App from "./App";
import AppContext from "components/ContextApi/AppContext";
import BootcampContext from "components/ContextApi/BootcampContext";
import CourseContext from "components/ContextApi/CourseContext";
createRoot(document.getElementById("root")).render(
  <AppContext>
    <BootcampContext>
      <CourseContext>
        <App />
      </CourseContext>
    </BootcampContext>
  </AppContext>
);
