import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Textarea,
} from '@chakra-ui/react'
function QueryForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [number, setNumber] = useState()
    const [shortDesc, setShortDesc] = useState('')
    const [detailDesc, setDetailDesc] = useState('')

    const updateName = (value) => {
        setName(value)
    }
    const updateEmail = (value) => {
        setEmail(value)
    }

    const updateNumber = (value) => {
        setNumber(value)
    }
    const updateTitle = (value) => {
        setShortDesc(value)
    }
    const updateDetailDesc = (value) => {
        setDetailDesc(value)
    }

    return (
        <div className="query-form">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log(
                        name,
                        email,

                        number,
                        shortDesc,
                        detailDesc
                    )
                }}
            >
                <FormControl className="name-part">
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

                <FormControl className="number-part" isRequired>
                    <FormLabel>Broj telefona</FormLabel>
                    <Input
                        value={number}
                        onChange={(e) => updateNumber(e.target.value)}
                        type={'number'}
                    />
                </FormControl>
                <FormControl className="short-desc-part">
                    <FormLabel>Naslov upita</FormLabel>
                    <Input
                        placeholder="npr. Upit vezano za Samsung S10..."
                        value={shortDesc}
                        onChange={(e) => updateTitle(e.target.value)}
                        type={'text'}
                    />
                </FormControl>
                <FormControl className="detail-desc-part" isRequired>
                    <FormLabel>Detaljni opis</FormLabel>
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
                    _active={{ backgroundColor: '#f89a2099' }}
                    type="submit"
                >
                    Posalji upit
                </Button>
            </form>
        </div>
    )
}

export default QueryForm
