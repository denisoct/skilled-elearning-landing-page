import { Button } from "@mantine/core";
import { FC } from "react";

import { Button1Props as Props } from "./Button1.types";

const Button1: FC<Props> = props => {
  const { label } = props;

  return (
    <Button
      radius="xl"
      bg="deadlyDepths"
      size="lg"
      fz={{ base: 16, xl: 18 }}
      styles={theme => ({
        root: { "&:hover": { backgroundColor: theme.colors.dustedPeri[6] } },
      })}
    >
      {label}
    </Button>
  );
};

export default Button1;
