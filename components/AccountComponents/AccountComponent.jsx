import Link from 'next/link'
import React from 'react'

function AccountComponent() {
    return (
        <div className="account-wrapper container">
            AccountComponent
            <Link href="/nalog/narudzbe">See orders</Link>
        </div>
    )
}

export default AccountComponent
