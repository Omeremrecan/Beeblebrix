import renderer from "react-test-renderer";
import {Card} from "components/Card/default/Card.component";

it("shows title correctly", () => {
  const component = renderer.create(<Card title="test title" imgSrc="" href="" />);

  expect(
    component.root.findByProps({ className: "card--title" }).children
  ).toContain("test title");
});

