import axios from "axios";
import {Post, PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

type TestDtxProps = {
    posts: Post[]
}

const Test = ({posts}: TestDtxProps) => (<>
    <div>Test:</div>
    {posts.map(p => <div>{p.id}:{p.title}:{p.excepts}</div>)}
</>)


export async function getStaticProps() {
    const posts = await prisma.post.findMany()
    const basepath = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : `https://bykristy.herokuapp.com/api`
    const {data} = await axios.get('test', {baseURL: basepath})
    return {
        props: {posts}, // will be passed to the page component as props
    }
}

export default Test