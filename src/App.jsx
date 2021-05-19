import "modern-normalize/modern-normalize.css";

import { injectGlobal } from "@emotion/css";

import colors from "./colors";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    background-color: ${colors.slate};
    color: ${colors.lightToupe};
  }
`;

const App = () => <>Welcome to the app.</>;

export default App;
