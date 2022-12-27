import Link from 'next/link'
import React from 'react'

function myorder() {
    return (
        <div>
            <Link href={'/nalog/narudzbe/narudzba:1'}>First order</Link>
        </div>
    )
}

export default myorder
