import { Button, Icon, Text } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'

function SinglePhone({ src, price, name }) {
    return (
        <div className="single-phone-holder">
            <div className="single-phone-header">
                <Text fontSize={'xl'} color={'#f89a20'}>
                    {name}
                </Text>
            </div>
            <div className="single-phone-image">
                <Image width={125} height={125} src={src} />
            </div>
            <div className="single-phone-price">
                <Text fontSize={'xl'} textAlign="center" color={'#f89a20'}>
                    {price}
                </Text>
                <Button
                    _hover={{
                        backgroundColor: '#f89a2099',
                    }}
                    _active={{
                        backgroundColor: '#f89a20',
                    }}
                    backgroundColor={'#f89a20'}
                    color={'#fff'}
                >
                    Dodaj <Icon as={FaShoppingCart} />
                </Button>
            </div>
            <Text fontSize={'lg'} className="single-phone-garanty">
                GARANCIJA
            </Text>
        </div>
    )
}

export default SinglePhone
