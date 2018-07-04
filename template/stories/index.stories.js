import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

// TODO: Change this component code as you wish!
import Component from "../src/Component";

// TODO: Call it here with custom props to test it!
storiesOf("Your component", module).add("default", () => (
  <Component name={"awad"} />
));
