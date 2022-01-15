import { StyledDummy } from "./dummy.styles";
import DummySVG from "./logo.svg";

export const Dummy: React.FC = () => {
  return (
    <StyledDummy>
      Dummy
      <DummySVG />
    </StyledDummy>
  );
};
