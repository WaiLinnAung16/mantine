import {
  Button,
  Container,
  createStyles,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import polygon from "../assets/home-polygon.svg";
import girl from "../assets/hero-girl.png";

const useStyles = createStyles(() => ({
  bgColor: {
    backgroundColor: "whitesmoke",
    paddingTop: "100px",
  },
  lh: {
    lineHeight: "80px",
  },
  relative: {
    position: "relative",
  },
  absolute: {
    position: "absolute",
    top: -60,
    left: 20,
  },
}));
const Hero = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.bgColor}>
      <Container py={50} size={"xl"}>
        <Flex justify="space-between" align="center">
          <div>
            <Text fw={900} fz="xxl" c="primary" w={700} className={classes.lh}>
              Together We Move Forward
            </Text>
            <Text mt={"md"} w={500}>
              Are you a youth looking forward to learning new skills, or are you
              a youth passionate about community development? If you are, The
              Forward Society is your destination.
            </Text>
            <Button
              rightIcon={<BsArrowRight fontSize={20} />}
              mt={"xl"}
              size="md"
            >
              Join Now
            </Button>
          </div>
          <div className={classes.relative}>
            <Image src={polygon} height={500}></Image>
            <Image src={girl} className={classes.absolute} width={430}></Image>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Hero;
