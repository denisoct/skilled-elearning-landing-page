import { Button } from "@mantine/core";
import { FC } from "react";

import { Button3Props as Props } from "./Button3.types";

const Button3: FC<Props> = props => {
  const { label } = props;

  return (
    <Button
      variant="gradient"
      gradient={{ from: "#4851FF", to: "#F02AA6", deg: 180 }}
      radius="xl"
      size="lg"
      fz={{ base: 16, xl: 18 }}
      styles={{ root: { "&:hover": { opacity: 0.5 } } }}
    >
      {label}
    </Button>
  );
};

export default Button3;
