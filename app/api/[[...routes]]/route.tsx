/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { handle } from 'frog/vercel'
import { serveStatic } from 'frog/serve-static'
import type { Metadata } from 'next'
import { getFrameMetadata, isFrameRequest } from 'frog/next'

// import { neynar } from 'frog/hubs'
// import { neynar } from 'frog/middlewares'
// import { questions } from '@/data/questions'
//import { ApplicantDataType } from '@/data/answer'
//import { NeynarAPIClient } from "@neynar/nodejs-sdk";

// const neynarApiKey = 'NEYNAR_FROG_FM';
// const client = new NeynarAPIClient(neynarApiKey);

// import { db, addDoc, collection, updateDoc, doc } from "../../../utils/firebaseConfig"

// //stores information about the user
// const mockApplicantData: ApplicantDataType = {

//   q01: "",
//   q02: "",
//   q03: "",
//   q04: "",
//   q05: "",

//   id: "",
//   // some user data
//   fid: "",
//   displayName: "",
//   Points: 0,
//   FavoriteArtist: "",
//   pfpUrl: "",
//   username: "",

//   //Additional field for compatibility with the database.
//   q00: "",
// };

// async function addApplicant(applicantData: ApplicantDataType) {
//   try {
//     const docRef = await addDoc(collection(db, 'applicants'), applicantData);

//     const id = docRef.id;
//     await updateDoc(doc(db, 'applicants', id), {id});
//     // console.log('Applicant written with ID: ', docRef.id);
//   } catch (error) {
//     // console.error('Error creatinng applicant: ', error);
//   }
// }

// const neynarMiddleware = neynar({
//   apiKey: 'NEYNAR_FROG_FM',
//   features: ['interactor', 'cast'],
// })

// // export async function generateMetadata(): Promise<Metadata> {
// //   const url = process.env.VERCEL_URL || 'http://localhost:3000'
// //   const frameMetadata = await getFrameMetadata(`${url}/api`)
// //   return {
// //     other: frameMetadata,
// //   }
// // }
// const app = new Frog({
//   assetsPath: '/',
//   basePath: '/api',
//   title: 'FansFrame'
//   imageAspectRatio: '1.91:1',
//   //Supply a hub to enable frame verification
//   // hub:neynar({apiKey:'NEYNAR_FROG_FM'})
// }).frame('/', (c) => {
//   return c.res({
//     action:'/page/home',
//     image:'httpcrazy',
//     intents: [
//       <Button>Apply</Button>,
//     ],
//   })
// }).frame('/page/home', neynarMiddleware, (c) => {
//   const { displayName } = c.var.interactor|| {}
//   const { frameData } = c
//   const { fid } : any=frameData
//   return c.res({
//     action:'/page/0',
//     image: (
//       <div
//        style={{
//         alignItems:'center',
//         color:'white',
//         display:'flex',
//         flexDirection:'column',
//         justifyContent:'center',
//         backgroundImage:'url(httpuiuiui)',
//         backgroundSize: '100% 100%',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         width: '100%',
//         height: '100%',
//         fontSize: 60,
//         letterSpacing: -2,
//         fontWeight: 700,
//         textAlign: 'center',
//         overflow: 'hidden',
//        }}>
//         <p>A{displayName||'give out here'}, please continue if you are a fan of ...</p>

//         <p style={{
//           marginTop: 20,
//         }}>Are you ready for the quiz?</p>
//        </div>
//     ),
//     intents:[
//       <Button>Are you sure?</Button>,
//     ],
//   })
// }).frame('/page/:id', (c) => {
//   const { id } = c.req.param();
//   const { buttonValue, inputText } = c;
//   const value = inputText || buttonValue;
//   (mockApplicantData as any)[q0${parseInt(id)} as keyof ApplicantDataType] = value as string;
//   return c.res({
//     action: (
//       parseInt(id) + 1 < (questions.length) ? /page/${parseInt(id) + 1} : '/finish'
//       // /page/${parseInt(id) + 1}
//     ),
//     image: (
//       <div
//         style={{
//           alignItems: 'center',
//           color: 'white',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           backgroundImage: 'url(http://www.ita.br/)',
//           backgroundSize: '100% 100%',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           width: '100%',
//           height: '100%',
//           fontSize: 75,
//           letterSpacing: -2,
//           fontWeight: 700,
//           textAlign: 'center',
//           overflow: 'hidden',
//         }}
//       >
//         <p style={{
//           wordWrap: 'break-word', // This is correct for breaking long words
//           whiteSpace: 'normal', // Ensures that the whitespace inside the <p> element behaves normally
//           overflowWrap: 'break-word', // Use this for breaking onto the next line, ensures compatibility
//           textAlign: 'center', // This centers your text
//         }}>
//           {questions[parseInt(id)].question}
//         </p>
//       </div>
//     ),
//     intents: [
//       ...(questions[parseInt(id)].type === 'options'
//         ? questions[parseInt(id)].options.map((option) => <Button value={option}>{option}</Button>)
//         : [
//           <TextInput placeholder="Type your answer here" />,
//           <Button>
//             {(parseInt(id) + 1 === questions.length) ? 'Submit Application' : 'Send Answer'}
//           </Button>,
//         ]
//       )
//     ]
//   })
// }).frame('/finish', neynarMiddleware, (c) => {
//   const { buttonValue, inputText, frameData } = c;
//   const value = inputText || buttonValue;
//   const {
//     username,
//     displayName,
//     followerCount,
//     pfpUrl,
//   } = c.var.interactor || {}

//   const { fid }: any = frameData;
//   (mockApplicantData as any)[q0${questions.length} as keyof ApplicantDataType] = value as string;

//   mockApplicantData.id = fid; //this value changes when going through the db
//   mockApplicantData.fid = fid;

//   mockApplicantData.username = username as string;
//   mockApplicantData.displayName = displayName as string;
//   mockApplicantData.followerCount = followerCount as number;
//   mockApplicantData.pfpUrl = pfpUrl as string;

//   // catch this bug in the future
//   mockApplicantData.q00 = "";

//   // console.log('mockApplicantData', mockApplicantData);
//   addApplicant(mockApplicantData);

//   return c.res({
//     image: (
//       <div
//         style={{
//           alignItems: 'center',
//           color: 'white',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           backgroundImage: 'url(htASDADSASDng)',
//           backgroundSize: '100% 100%',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           width: '100%',
//           height: '100%',
//           fontSize: 85,
//           letterSpacing: -2,
//           fontWeight: 700,
//           textAlign: 'center',
//           overflow: 'hidden',
//         }}
//       >
//         <p>Application submitted 📨</p>
//         <p style={{
//           fontSize: 48,
//           marginTop: 10,
//         }}>Thank you, now share with your {followerCount || 'many'} followers!</p>
//       </div>
//     ),
//     intents: [
//       <Button.Redirect location="https://warpcast.com/~/compose?embeds[]=DDDDDDDDDDDD/">Share</Button.Redirect>,
//       <Button.Redirect location="https://warpcast.com/~/channel/CCCCCCCCCCC">Follow Us</Button.Redirect>,
//       <Button.Redirect location="https://AAAAAAAAA">Website</Button.Redirect>,
//       <Button.Redirect location="https://t.me/BBBBBBBBBBh">Join Us</Button.Redirect>,
//     ],
//   })
// })

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  browserLocation: '/dev',
  title: 'Frog Frame',
})

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  

  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            ? `Você comeu ${fruit ? `${fruit.toUpperCase()} hoje!` : 'hoje?'}` 
            : 'O que você comeu hoje?'}
        </div>
      </div>
    ),
    intents: [
      <Button
       action="/like"
       value="apple"
      >
        Apple
      </Button>,
      <Button
       action="/like"
       value="orange"
      >
        Orange
      </Button>,
      <Button
       action="/like"
       value="banana"
      >
        Banana
      </Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.frame('/like', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue

  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            ? `Você gostou de ${fruit}?`
            //? `Você comeu ${fruit ? `${fruit.toUpperCase()} hoje!` : 'hoje?'}` 
            : 'Responde direito?'}
        </div>
      </div>
    ),
    intents: [
      <Button
       action="/yes"
       value="yes"
      >
        Yes
      </Button>,
      <Button
       action="/no"
       value="no"
      >
        No
      </Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.frame('/yes', (c) => {
  return c.res({
    image: 'https://i.ytimg.com/vi/R3UACX5eULI/maxresdefault.jpg',
    intents: [
      <Button.Link href="https://www.youtube.com/watch?v=T8b92CQM3z0">
        ei_gabriel
      </Button.Link>
    ]
  })
})

app.frame('/no', (c) => {
  return c.res({
    image: (
      <div style={{color: 'white', display: 'flex', fontSize:60 }}>
        perform a transaction
      </div>
    ),
    intents: [
      <TextInput placeholder="Value (ETH)" />,
      <Button.Transaction target="mint">Mint</Button.Transaction>
    ]
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
