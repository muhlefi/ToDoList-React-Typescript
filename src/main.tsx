import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./reduxtoolkit/store"; // Import your Redux store

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>
);
