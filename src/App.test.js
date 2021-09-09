import ReactDOM from 'react-dom'
import React from "react";
import SocialJSApp from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
