import React from "react";
import { shallow } from "enzyme";
import DescriptionDialog from "./DescriptionDialog";

describe("DescriptionDialog", () => {
  //new task form initial render
  it("renders without crashing", () => {
    shallow(<DescriptionDialog />);
  });
});
