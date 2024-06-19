import { cache } from 'react'
import { Client, Account, Databases, ID, Query  } from "appwrite";



export const getuserDetails =async (id) => {
    console.log(id)
   
    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64ff77a619e2d6d3c6e3');

    const databases = new Databases(client);

          let promiseCheckAppwriteforuserDetails = await databases.listDocuments(
            "6569c7cd36b3636efb40",
            "65c1ec501ee5708d5452",
            [Query.equal("$id", `${id}`)]
          );
          return (promiseCheckAppwriteforuserDetails)

  }