import {
  Anchor,
  Container,
  createStyles,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import React from "react";
import Logo from "../assets/Logo.png";

const useStyles = createStyles((theme) => ({
  style: {
    padding: "15px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    marginBottom: "10px",
    position: "fixed",
    width: "100%",
    zIndex: "10",
    backdropFilter: "blur(100px)",
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary[6],
    ":hover": {
      textDecoration: "none",
    },
  },
}));
const Navbar = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.style}>
      <Container size={"xl"}>
        <Flex justify="space-between" align="center">
          <div>
            <Image src={Logo} height={60} />
          </div>
          <Flex justify="space-between" align="center" miw={300}>
            <Anchor className={classes.link}>Home</Anchor>
            <Text>About</Text>
            <Text>Blogs</Text>
            <Text>Events</Text>
            <Text>Contact</Text>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
