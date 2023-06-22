import { Button } from "@mantine/core";
import { FC } from "react";

import { Button2Props as Props } from "./Button2.types";

const Button2: FC<Props> = props => {
  const { label } = props;

  return (
    <Button
      variant="gradient"
      gradient={{ from: "#FF6F48", to: "#F02AA6", deg: 180 }}
      radius="xl"
      size="lg"
      fz={{ base: 16, xl: 18 }}
      styles={{ root: { "&:hover": { opacity: 0.5 } } }}
    >
      {label}
    </Button>
  );
};

export default Button2;
