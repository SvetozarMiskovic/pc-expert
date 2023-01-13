import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Textarea,
    Button,
} from '@chakra-ui/react'
import React, { useState } from 'react'

function OrderForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState()
    const [shortDesc, setShortDesc] = useState('')
    const [detailDesc, setDetailDesc] = useState('')

    const updateName = (value) => {
        setName(value)
    }
    const updateEmail = (value) => {
        setEmail(value)
    }
    const updateAddress = (value) => {
        setAddress(value)
    }
    const updateNumber = (value) => {
        setNumber(value)
    }
    const updateShortDesc = (value) => {
        setShortDesc(value)
    }
    const updateDetailDesc = (value) => {
        setDetailDesc(value)
    }

    return (
        <div className="order-form">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log(
                        name,
                        email,
                        address,
                        number,
                        shortDesc,
                        detailDesc
                    )
                }}
            >
                <FormControl className="name-part" isRequired>
                    <FormLabel>Ime i prezime</FormLabel>
                    <Input
                        onChange={(e) => updateName(e.target.value)}
                        type={'text'}
                        value={name}
                    />
                </FormControl>
                <FormControl className="email-part" isRequired>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                        value={email}
                        onChange={(e) => updateEmail(e.target.value)}
                        type={'email'}
                    />
                </FormControl>
                <FormControl className="address-part" isRequired>
                    <FormLabel>Adresa stanovanja</FormLabel>
                    <Input
                        value={address}
                        onChange={(e) => updateAddress(e.target.value)}
                        type={'text'}
                    />
                </FormControl>
                <FormControl className="number-part" isRequired>
                    <FormLabel>Broj telefona</FormLabel>
                    <Input
                        value={number}
                        onChange={(e) => updateNumber(e.target.value)}
                        type={'number'}
                    />
                </FormControl>
                <FormControl className="short-desc-part">
                    <FormLabel>Kratki opis</FormLabel>
                    <Input
                        value={shortDesc}
                        onChange={(e) => updateShortDesc(e.target.value)}
                        type={'text'}
                    />
                </FormControl>
                <FormControl className="detail-desc-part" isRequired>
                    <FormLabel>Detaljne informacije</FormLabel>
                    <Textarea
                        resize={'none'}
                        height={'350px'}
                        value={detailDesc}
                        onChange={(e) => updateDetailDesc(e.target.value)}
                        size={'md'}
                        placeholder="Napisite nesto..."
                    ></Textarea>
                </FormControl>
                <Button
                    backgroundColor={'#f89a20'}
                    color={'#fff'}
                    className="order-submit"
                    _hover={{
                        backgroundColor: '#f89a2099',
                    }}
                    type="submit"
                >
                    Naruci
                </Button>
            </form>
        </div>
    )
}

export default OrderForm
