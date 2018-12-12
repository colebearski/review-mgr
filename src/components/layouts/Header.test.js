import React from "react";
// Shallow: render top level component
// Deep: renders all of the nested components
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Header from "./Header";

describe("Header", () => {
  test("Rendering the functional header component", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
