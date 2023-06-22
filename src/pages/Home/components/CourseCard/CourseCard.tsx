import { Anchor, Card, Image, Stack, Text } from "@mantine/core";
import { FC } from "react";

import { CourseCardProps as Props } from "./CourseCard.types";

const CourseCard: FC<Props> = props => {
  const { src, title, description } = props;

  return (
    <Card
      radius="md"
      padding="xl"
      shadow="0px 25px 50px 0px rgba(6, 22, 141, 0.04)"
      pos="relative"
      sx={{ overflow: "visible" }}
    >
      <Image src={src} alt={`${title} icon`} width={56} pos="relative" bottom={40} />
      <Stack align="flex-start">
        <Text fz={{ base: 20, xl: 24 }} fw={800} c="deadlyDepths">
          {title}|
        </Text>
        <Text c="topShelf">{description}</Text>
        <Anchor
          href="#"
          c="flamboyantFlamingo"
          underline={false}
          weight={700}
          fz={18}
          sx={theme => ({ "&:hover": { color: theme.colors.taffyPink[6] } })}
        >
          Get Started
        </Anchor>
      </Stack>
    </Card>
  );
};

export default CourseCard;
