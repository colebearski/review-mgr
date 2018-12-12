import React from "react";
// Shallow: render top level component
// Deep: renders all of the nested components
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Review from "./Review";

describe("Review", () => {
  test("Render the Review Component", () => {
    const wrapper = shallow(<Review />);

    expect(wrapper).toMatchSnapshot();
  });
});
