import React from "react";
import { Carousel } from "@mantine/carousel";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import { Container, createStyles, Flex, Image, Text } from "@mantine/core";
import exp from "../assets/weDo-1.jpg";
import './testimonial.css'

const useStyles = createStyles((theme) => ({
  imgDiv: {
    width: "60px",
    height: "60px",
    marginBottom: "20px",
    borderRadius: "100%",
    overflow: "hidden",
  },
  bgColor: {
    backgroundColor:'white',
    border: `1px solid ${theme.colors.primary[6]}`,
  },
  slideContainer: {
    width: "100%",
    padding: "50px 0",
    backgroundColor:'whitesmoke'
  },
}));
const Testimonial = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.slideContainer}>
      <Text
        c={"primary"}
        fz={"3xl"}
        fw={"bolder"}
        ta={"center"}
        mb={50}
        tt="uppercase"
      >
        Testimonial
      </Text>
      <Carousel
        withIndicators
        height="350px"
        slideSize="700px"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        align="center"
        nextControlIcon={<BsArrowRight fontWeight='bolder'/>}
        previousControlIcon={<BsArrowLeft/>}
      >
        <Carousel.Slide className={classes.bgColor} p={"lg"} mx={"lg"}>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            h={"100%"}
          >
            <div className={classes.imgDiv}>
              <Image src={exp} height={60}></Image>
            </div>
            <Text fw={"bold"} fz={"xl"}>
              Mark Richard
            </Text>
            <Text>University Teacher</Text>
            <Text w={600} lh="30px" mt={20}>
              <span>
                <RiDoubleQuotesL />
              </span>
              Thanks to Udemy Business, Booz Allen has armed our workforce,
              specifically its data scientists, with highly relevant and
              in-demand tech skills that are enabling consultants to stay ahead
              of big data trends and raise the bar on proficiency, skills, and
              competencies to meet client demand.
              <span>
                <RiDoubleQuotesR />
              </span>
            </Text>
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide className={classes.bgColor} p={"lg"} mx={"lg"}>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            h={"100%"}
          >
            <div className={classes.imgDiv}>
              <Image src={exp} height={60}></Image>
            </div>
            <Text fw={"bold"} fz={"xl"}>
              Mark Richard
            </Text>
            <Text>University Teacher</Text>
            <Text w={600} lh="30px" mt={20}>
              <span>
                <RiDoubleQuotesL />
              </span>
              Thanks to Udemy Business, Booz Allen has armed our workforce,
              specifically its data scientists, with highly relevant and
              in-demand tech skills that are enabling consultants to stay ahead
              of big data trends and raise the bar on proficiency, skills, and
              competencies to meet client demand.
              <span>
                <RiDoubleQuotesR />
              </span>
            </Text>
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide className={classes.bgColor} p={"lg"} mx={"lg"}>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            h={"100%"}
          >
            <div className={classes.imgDiv}>
              <Image src={exp} height={60}></Image>
            </div>
            <Text fw={"bold"} fz={"xl"}>
              Mark Richard
            </Text>
            <Text>University Teacher</Text>
            <Text w={600} lh="30px" mt={20}>
              <span>
                <RiDoubleQuotesL />
              </span>
              Thanks to Udemy Business, Booz Allen has armed our workforce,
              specifically its data scientists, with highly relevant and
              in-demand tech skills that are enabling consultants to stay ahead
              of big data trends and raise the bar on proficiency, skills, and
              competencies to meet client demand.
              <span>
                <RiDoubleQuotesR />
              </span>
            </Text>
          </Flex>
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
};

export default Testimonial;
