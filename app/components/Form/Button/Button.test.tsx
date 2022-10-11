import {render, screen} from "@testing-library/react";
import Button from "./Button";

test('on initial render', () => {
  render(<Button>Click me</Button>)
})
