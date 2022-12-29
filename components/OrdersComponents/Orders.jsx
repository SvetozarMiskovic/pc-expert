import {
    Divider,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react'

import React from 'react'
import OrderForm from './OrderForm'
import QueryForm from './QueryForm'

function Orders() {
    return (
        <div className="orders-component">
            <Text
                textAlign={'center'}
                fontStyle={'italic'}
                color={'#f89a20'}
                fontSize={'2xl'}
            >
                Narudzbe i upiti
            </Text>
            <Divider borderColor={'#f89a20'} />
            <div className="orders-tabs">
                <Tabs isFitted>
                    <TabList>
                        <Tab color={'#f89a20'}>Posaljite narudzbu</Tab>
                        <Tab color={'#f89a20'}>Posaljite upit</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <OrderForm />
                        </TabPanel>
                        <TabPanel>
                            <QueryForm />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Orders
