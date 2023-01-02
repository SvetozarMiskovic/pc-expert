import {
    Avatar,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Text,
} from '@chakra-ui/react'
import React from 'react'

function Account() {
    return (
        <div className="account-component">
            <Text
                fontSize={'2xl'}
                textAlign="center"
                color={'#f89a20'}
                fontStyle="italic"
            >
                Nalog
            </Text>
            <Divider marginBottom="0.8rem" borderColor={'#f89a20'} />
            <div className="account-body">
                <div className="account-body-features">
                    <Avatar size={'2xl'} src="/sveto.jpeg" />
                    <Button
                        _hover={{
                            backgroundColor: '#f89a2099',
                        }}
                        _active={{
                            backgroundColor: '#f89a20',
                        }}
                        backgroundColor={'#f89a20'}
                        color={'#fff'}
                        type="button"
                    >
                        Uredi profil
                    </Button>
                    <Button
                        _hover={{
                            backgroundColor: '#f89a2099',
                        }}
                        _active={{
                            backgroundColor: '#f89a20',
                        }}
                        backgroundColor={'#f89a20'}
                        color={'#fff'}
                        type="button"
                    >
                        Moje narudzbe
                    </Button>
                </div>
                <div className="account-body-info">
                    <FormControl className="single-account-item">
                        <FormLabel color={'#f89a20'} fontStyle="italic">
                            Ime i prezime
                        </FormLabel>
                        <Input
                            outline={'1px solid #f89a20'}
                            border="none"
                            value={'Svetozar Miskovic'}
                            disabled
                            type={'text'}
                        />
                    </FormControl>
                    <FormControl className="single-account-item">
                        <FormLabel color={'#f89a20'} fontStyle="italic">
                            Email
                        </FormLabel>
                        <Input
                            outline={'1px solid #f89a20'}
                            border="none"
                            disabled
                            type={'email'}
                        />
                    </FormControl>
                    <FormControl className="single-account-item">
                        <FormLabel color={'#f89a20'} fontStyle="italic">
                            Broj telefona
                        </FormLabel>
                        <Input
                            outline={'1px solid #f89a20'}
                            border="none"
                            disabled
                            type={'number'}
                        />
                    </FormControl>
                    <FormControl className="single-account-item">
                        <FormLabel color={'#f89a20'} fontStyle="italic">
                            Adresa
                        </FormLabel>
                        <Input
                            outline={'1px solid #f89a20'}
                            border="none"
                            disabled
                            type={'text'}
                        />
                    </FormControl>
                    <FormControl className="single-account-item">
                        <FormLabel color={'#f89a20'} fontStyle="italic">
                            Ulica
                        </FormLabel>
                        <Input
                            outline={'1px solid #f89a20'}
                            border="none"
                            disabled
                            type={'text'}
                        />
                    </FormControl>
                    <FormControl className="single-account-item">
                        <FormLabel color={'#f89a20'} fontStyle="italic">
                            Grad
                        </FormLabel>
                        <Input
                            outline={'1px solid #f89a20'}
                            border="none"
                            disabled
                            type={'text'}
                        />
                    </FormControl>
                    <FormControl className="single-account-item">
                        <FormLabel color={'#f89a20'} fontStyle="italic">
                            Postanski broj
                        </FormLabel>
                        <Input
                            outline={'1px solid #f89a20'}
                            border="none"
                            disabled
                            type={'number'}
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default Account
