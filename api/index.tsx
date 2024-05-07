import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/', (c) => {
  return c.res({
    image: (
      <img src="https://tomato-geographical-pig-904.mypinata.cloud/ipfs/QmRifngre2mRi4tL9YkkUL4gDYV5KqqD1DfNiMd4Eis5Av"/>
    ),
    intents: [
      <Button action='/2'>Get started!</Button>
    ],
  })
})

app.frame('/2', (c)=> {
  return c.res({
    image: (
      <img src="https://tomato-geographical-pig-904.mypinata.cloud/ipfs/QmPCqYQv6C1MNWHCU2z6kK6keScEwerVz2jy6qFtTtyjMR/2.jpg"/>
    ),
    intents: [
      <Button action='/'>Home</Button>,
      <Button action='/3'>Next </Button>
    ],
  })
} )

app.frame('/3', (c)=> {
  return c.res({
    image: (
      <img src="https://tomato-geographical-pig-904.mypinata.cloud/ipfs/QmPCqYQv6C1MNWHCU2z6kK6keScEwerVz2jy6qFtTtyjMR/3.jpg"/>
    ),
    intents : [
      <Button action='/2'> Back</Button>,
      <Button action='/4'> Next</Button>
    ]
  })
})

app.frame('/4', (c)=> {
  return c.res({
    image: (
      <img src="https://tomato-geographical-pig-904.mypinata.cloud/ipfs/QmPCqYQv6C1MNWHCU2z6kK6keScEwerVz2jy6qFtTtyjMR/4.jpg"/>
    ),
    intents : [
      <Button action='/3'> Back</Button>,
      <Button action='/5'> Next</Button>
    ]
  })
})

app.frame('/5', (c)=> {
  return c.res({
    image: (
      <img src="https://tomato-geographical-pig-904.mypinata.cloud/ipfs/QmPCqYQv6C1MNWHCU2z6kK6keScEwerVz2jy6qFtTtyjMR/5.jpg"/>
    ),
    intents : [
      <Button action='/4'> Back</Button>,
      <Button action='/'> Home</Button>,
      <Button action="https://pro.framedl.xyz">Play the game!</Button>,
      <Button.Link href="https://zora.co/collect/base:0x402ae0eb018c623b14ad61268b786edd4ad87c56/1">Pro Pass</Button.Link>
    ]
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
