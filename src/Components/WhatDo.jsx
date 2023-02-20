import {
  Container,
  createStyles,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import weDo1 from "../assets/weDo-1.jpg";
import weDo2 from "../assets/weDo-2.jpg";
import weDo3 from "../assets/weDo-3.jpg";
const WhatDo = () => {
  const useStyles = createStyles(() => ({
    container: {
      backgroundColor: "whitesmoke",
      padding: "50px 0",
    },
    imgDiv: {
      width: "180px",
      height: "180px",
      marginBottom: "20px",
      borderRadius: "100%",
      overflow: "hidden",
    },
  }));
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Text c={"primary"} fz={"3xl"} fw={"bolder"} ta={"center"} mb={50}>
        What Do We Do
      </Text>
      <Container size={"xl"}>
        <SimpleGrid cols={3} spacing={"xl"}>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={10}
          >
            <div className={classes.imgDiv}>
              <Image src={weDo1} height={180}></Image>
            </div>
            <Text c={"primary"} fz={"2xl"}>
              Free educational events
            </Text>
            <Text w={250} ta={"center"}>
              We provide free events, workshops and webinars that promote youth
              development and learning.
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={10}
          >
            <div className={classes.imgDiv}>
              <Image src={weDo2} height={180}></Image>
            </div>
            <Text c={"primary"} fz={"2xl"}>
              Free educational consultation
            </Text>
            <Text w={250} ta={"center"}>
              We provide free events, workshops and webinars that promote youth
              development and learning.
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={10}
          >
            <div className={classes.imgDiv}>
              <Image src={weDo3} height={180}></Image>
            </div>
            <Text c={"primary"} fz={"2xl"}>
              Volunteering opportunities
            </Text>
            <Text w={250} ta={"center"}>
              We provide free events, workshops and webinars that promote youth
              development and learning.
            </Text>
          </Flex>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default WhatDo;
