import { db } from '../../util/db.server'
import { hash } from 'bcrypt'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const dataGiven = req.body
        const hashedPw = await hash(req.body.lozinka, 10)
        console.log(hashedPw)
        res.json(dataGiven)
    } else {
        const nesto = await db.korisnici.findMany()
        console.log(nesto)

        res.json("It's GET method!")
    }
}
