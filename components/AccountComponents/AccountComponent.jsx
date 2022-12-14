import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Account from './Account'

function AccountComponent() {
    return (
        <div className="account-wrapper">
            <Account />
        </div>
    )
}

export default AccountComponent
