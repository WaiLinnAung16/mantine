import { Button, Container, Flex, Grid, Image, Text } from '@mantine/core'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import category from '../assets/category.svg'
import {BsArrowRight} from 'react-icons/bs'
const Event = () => {
  return (
    <div>
        <Container size={'xl'} py={50}>
            <Text
            c={"primary"}
            fz={"3xl"}
            fw={"bolder"}
            ta={"center"}
            mb={'sm'}
            tt="uppercase"
        >
            Upcoming Events
        </Text>
        <Text w={'80%'} ta='center' mx={'auto'}>Our mission is to help create better education that will help move society forward. At The Forward Society, we believe that, together, we can move forward and create a positive impact.</Text>
        <div>
            <Grid columns={2}>
                <Flex>
                    <Text>26 Jun</Text>
                    <Flex>
                        <Text>Supplymentory education of what you need</Text>
                        <Flex>
                            <Text>Start Date 22 Jan 2003</Text>
                            <Text>End Date 22 Jan 2003</Text>
                        </Flex>
                    
                        <Flex>
                            <Text><Image src={category}></Image> Event Categoty - Creative</Text>
                            <Text><Image src={category}></Image> Event Categoty - Creative</Text>
                            <Text><Image src={category}></Image> Event Categoty - Creative</Text>
                            <Text><Image src={category}></Image> Event Categoty - Creative</Text>
                            <Text><Image src={category}></Image> Event Categoty - Creative</Text>
                        </Flex>
                        <Button
                            rightIcon={<BsArrowRight fontSize={20} />}
                            mt={"xl"}
                            size="md"
                            >
                            Join Now
                        </Button>
                    </Flex>
                </Flex>
            </Grid>
        </div>
        </Container>
    </div>
  )
}

export default Event