import "modern-normalize/modern-normalize.css";

import { injectGlobal } from "@emotion/css";

import colors from "./colors";
import AddressPage from "./pages/AddressPage";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    background-color: ${colors.slate};
    color: ${colors.toupe};
  }
`;

const App = () => <AddressPage />;

export default App;
