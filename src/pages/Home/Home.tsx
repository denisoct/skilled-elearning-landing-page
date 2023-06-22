import {
  AppShell,
  Card,
  Flex,
  Footer,
  Group,
  Header,
  Image,
  MediaQuery,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import iconAnimation from "@assets/icon-animation.svg";
import iconBusiness from "@assets/icon-business.svg";
import iconCrypto from "@assets/icon-crypto.svg";
import iconDesign from "@assets/icon-design.svg";
import iconPhotography from "@assets/icon-photography.svg";
import imageHeroDesktop from "@assets/image-hero-desktop.png";
import imageHeroMobile from "@assets/image-hero-mobile.png";
import imageHeroTablet from "@assets/image-hero-tablet.png";
import logoDark from "@assets/logo-dark.svg";
import logoLight from "@assets/logo-light.svg";
import Button1 from "@components/Button1";
import Button2 from "@components/Button2";
import CourseCard from "./components/CourseCard";
import Button3 from "@/components/Button3";

const Home = () => {
  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1440px)");

  return (
    <AppShell
      padding={0}
      fixed={false}
      mt={{ base: 16, sm: 24 }}
      header={
        <Header height="auto" withBorder={false} px={{ xl: 160, sm: 40, base: 16 }}>
          <Group position="apart" align="center" h={55}>
            <Image src={logoDark} width={100} height="auto" alt="Skilled logo" />
            <Button1 label="Get Started" />
          </Group>
        </Header>
      }
      footer={
        <Footer
          height="auto"
          withBorder={false}
          bg="deadlyDepths"
          px={{ xl: 160, sm: 40, base: 16 }}
        >
          <Group position="apart" align="center" h={120}>
            <Image src={logoLight} width={100} height="auto" alt="Skilled logo" />
            <Button3 label="Get Started" />
          </Group>
        </Footer>
      }
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        align="center"
        px={{ xl: 160, sm: 40, base: 16 }}
      >
        <Stack align="flex-start" pr={{ xl: 210 }} mt={{ base: 30, sm: 0 }}>
          <Title c="deadlyDepths" weight={800} fz={40}>
            Maximize skill, minimize budget
          </Title>
          <Text c="topShelf" fz={{ xl: 18 }}>
            Our modern courses across a range of in-demand skills will give you the
            knowledge you need to live the life you want.
          </Text>
          <Button2 label="Get Started" />
        </Stack>
        <MediaQuery smallerThan="sm" styles={{ marginTop: 40 }}>
          <Image
            src={desktop ? imageHeroDesktop : tablet ? imageHeroTablet : imageHeroMobile}
            alt="Skilled logo"
          />
        </MediaQuery>
      </Flex>

      <SimpleGrid
        cols={1}
        breakpoints={[
          { minWidth: "sm", cols: 2 },
          { minWidth: "xl", cols: 3 },
        ]}
        mt={{ base: 0, sm: 40 }}
        bg="linear-gradient(180deg, #FFF 0%, #F0F1FF 100%)"
        px={{ xl: 160, sm: 40, base: 16 }}
        verticalSpacing="xl"
        pb={{ base: 80, xl: 140 }}
      >
        <Card
          bg="linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)"
          radius="md"
          padding="xl"
        >
          <Text fz={{ base: 24, xl: 32 }} weight={800} c="white" mt={{ sm: 40 }}>
            Check out our most popular courses!
          </Text>
        </Card>
        <CourseCard
          src={iconAnimation}
          title="Animation"
          description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
        />
        <CourseCard
          src={iconDesign}
          title="Design"
          description="Create beautiful, usable interfaces to help shape the future of how the web looks."
        />
        <CourseCard
          src={iconPhotography}
          title="Photography"
          description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        />
        <CourseCard
          src={iconCrypto}
          title="Crypto"
          description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
        />
        <CourseCard
          src={iconBusiness}
          title="Business"
          description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        />
      </SimpleGrid>
    </AppShell>
  );
};

export default Home;
