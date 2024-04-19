// import { createRoot } from "react-dom/client";
import TestRenderer from 'react-test-renderer';
import App from "./App";

test('App renders correctly', () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   const root = createRoot(div);
//   root.render(<App />);
//   root.unmount();
// });
