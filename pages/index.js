import Home from '../components/LayoutComponents/Home'
import { db } from '../util/db.server'

// console.log(prisma)
export default function LandingPage({ strasno, res }) {
    // console.log(prisma, req)
    console.log(strasno, res)
    return (
        <div className="homepage">
            <Home />
        </div>
    )
}

export async function getServerSideProps(req) {
    // console.log(prisma)
    const res = await db.korisnici.findMany()

    // console.log('REQUEST' + `${req}`, 'PRISMA' + prisma)

    return {
        props: {
            strasno: 'sveto',
            res,
        },
    }
}
