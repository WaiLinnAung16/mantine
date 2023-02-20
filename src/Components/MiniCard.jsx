import {
  Container,
  createStyles,
  Flex,
  Group,
  Image,
  Text,
} from "@mantine/core";
import React from "react";
import student from "../assets/student.svg";
import volunteer from "../assets/volunteer.svg";
import events from "../assets/events.svg";
import follower from "../assets/follower.svg";

const cards = [
  {
    id: 1,
    icon: student,
    title: "Youth Educated",
    num: 500,
  },
  {
    id: 2,
    icon: volunteer,
    title: "Volunteer",
    num: 500,
  },
  {
    id: 3,
    icon: events,
    title: "Events",
    num: 50,
  },
  {
    id: 4,
    icon: follower,
    title: "Followers",
    num: 50,
  },
];
const useStyles = createStyles((theme) => ({
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0067f3",
    borderRadius: "100%",
    width: "60px",
    height: "60px",
  },
  bgColor: {
    backgroundColor: theme.colors.indigo[0],
    borderRadius: "5px",
  },
}));
const MiniCard = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Container size={"xl"} py={30}>
        <Flex justify={"center"} align={"center"} gap="xl">
          {cards.map((card) => (
            <Flex
              key={card.id}
              direction="column"
              align="center"
              justify="center"
              p={30}
              w={500}
              className={classes.bgColor}
            >
              <div className={classes.circle}>
                <Image src={card.icon} width={30}></Image>
              </div>
              <Text fw={600} mt={10}>
                {card.title}
              </Text>
              <Text c={"primary"} fw={"bolder"} fz={"2xl"}>
                {card.num}+
              </Text>
            </Flex>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default MiniCard;
