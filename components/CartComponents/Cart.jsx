import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Text,
    Divider,
    CardFooter,
    Icon,
    Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { useGlobalContext } from '../../context/GlobalContext'
import SingleItem from './SingleItem'

function Cart() {
    const removeItem = (id) => {
        setItems((prevState) => {
            return prevState.filter((item) => Number(item.id) !== Number(id))
        })
    }

    const { isCart, updateTotalPrice, items, setItems } = useGlobalContext()
    return (
        <>
            {/* <Icon
        display={isCart ? "inline-block" : "none"}
        position={"absolute"}
        color={"#f89a20"}
        right={100}
        top={"4.8rem"}
        border={"none"}
        fontSize={"30px"}
        as={FaAngleUp}
      /> */}
            <Card
                animation={'ease-in'}
                display={isCart ? 'inline-block' : 'none'}
                position={'absolute'}
                //   className="cart-container"
                right={'1.2rem'}
                top={'5.4rem'}
                backgroundColor={'#fff'}
                border={'1px solid #f89a20'}
                zIndex={999}
                maxHeight={'300px'}
                overflowY={'auto'}
                width={'350px'}
                variant={'outline'}
            >
                <CardBody height={'inherit'}>
                    {!items.length ? (
                        <Text textAlign={'center'}>Korpa je prazna!</Text>
                    ) : (
                        items.map((item) => {
                            return (
                                <SingleItem
                                    removeItem={removeItem}
                                    key={item.id}
                                    details={item}
                                />
                            )
                        })
                    )}
                </CardBody>

                <CardFooter
                    padding={1}
                    backgroundColor={'#f89a20'}
                    position={'sticky'}
                    bottom={'0'}
                    width={'100%'}
                    height={'3.5rem'}
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                >
                    <Button
                        color="#f89a20"
                        backgroundColor="#fff"
                        width={'30%'}
                        fontSize={'16px'}
                        padding={'1px'}
                    >
                        <Link href={'/cart'}>Vidi korpu</Link>
                    </Button>
                    <Button
                        color="#f89a20"
                        backgroundColor="#fff"
                        width={'30%'}
                        fontSize={'16px'}
                        padding={'1px'}
                    >
                        <Link href={'/cart-order'}>Naruči</Link>
                    </Button>
                    <Button
                        color="#f89a20"
                        backgroundColor="#fff"
                        width={'30%'}
                        fontSize={'16px'}
                        padding={'1px'}
                    >
                        <Link href={'/'}>Plati odmah</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
        //   <div className="cart-container">
        // </div>
    )
}

export default Cart
