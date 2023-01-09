import React, { useState } from 'react'
import Link from 'next/link'

import {
    FormControl,
    Input,
    FormLabel,
    InputRightElement,
    InputGroup,
    Button,
    Icon,
    Divider,
    Text,
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function LoginForm() {
    const [showPw, setShowPW] = useState(false)

    return (
        <div className="login-component">
            <Text
                fontStyle={'italic'}
                textAlign={'center'}
                color={'#f89a20'}
                fontSize={'2xl'}
            >
                Prijava
            </Text>
            <Divider borderColor={'#f89a20'} />

            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log('Logujem se...')
                }}
            >
                <div className="login-header">
                    {/* <div className="header-image">
                        <Image width={200} height={200} src="/T1.png" />
                    </div> */}
                    <Text color="#f89a20" fontSize="3xl">
                        Prijavite se na svoj nalog
                    </Text>
                    <Divider
                        marginTop="1rem"
                        marginBottom="1rem"
                        borderColor="#f89a20"
                    />
                    <Text
                        fontSize={'lg'}
                        color={'#5f5f5f'}
                        fontStyle={'italic'}
                        textDecoration="underline"
                    >
                        Registracijom i prijavom ostvarujete ubrzavanje procesa
                        naplate prilikom zavrsetka kupovine, uvid u prethodne
                        narudzbe i mnoge druge...
                    </Text>
                    <Divider marginTop="1rem" borderColor="#f89a20" />
                </div>
                <FormControl>
                    <FormLabel fontSize={'lg'} color={'#5f5f5f'}>
                        E-mail
                    </FormLabel>
                    <Input
                        color="#5f5f5f"
                        autoComplete={'off'}
                        outlineColor={'transparent'}
                        _hover={{ borderColor: '#f89a20' }}
                        _focusVisible={{ borderColor: '#f89a20' }}
                        borderColor={'#f89a20'}
                        type={'email'}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize={'lg'} color={'#5f5f5f'}>
                        Lozinka
                    </FormLabel>
                    <InputGroup>
                        <Input
                            color="#5f5f5f"
                            autoComplete={'off'}
                            outlineColor={'transparent'}
                            _hover={{ borderColor: '#f89a20' }}
                            _focusVisible={{ borderColor: '#f89a20' }}
                            borderColor={'#f89a20'}
                            type={showPw ? 'text' : 'password'}
                        />
                        <InputRightElement>
                            <Button
                                background={'transparent'}
                                _hover={{ background: 'transparent' }}
                                _active={{ background: 'transparent' }}
                                onClick={() => setShowPW(!showPw)}
                            >
                                {showPw ? (
                                    <Icon color={'#5f5f5f'} as={FaEyeSlash} />
                                ) : (
                                    <Icon color={'#5f5f5f'} as={FaEye} />
                                )}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl
                    width={'100%'}
                    display="flex"
                    justifyContent={'center'}
                >
                    <Button
                        width={'25rem'}
                        _hover={{
                            backgroundColor: '#f89a2099',
                        }}
                        _active={{
                            backgroundColor: '#f89a20',
                        }}
                        backgroundColor={'#f89a20'}
                        color={'#fff'}
                        type={'submit'}
                    >
                        Prijavi se
                    </Button>
                </FormControl>
                <FormControl
                    width={'100%'}
                    display="flex"
                    flexDir={'column'}
                    alignItems="center"
                >
                    <div className="login-reg-section">
                        <Text
                            fontStyle={'italic'}
                            color={'#5f5f5f'}
                            fontSize={'lg'}
                        >
                            Nemate nalog?{' '}
                            <span className="login-reg-link">
                                <Link href="registracija">Registrujte se!</Link>
                            </span>
                        </Text>
                    </div>
                </FormControl>
            </form>
        </div>
    )
}

export default LoginForm
