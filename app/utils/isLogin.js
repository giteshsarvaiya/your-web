import { Client, Account, Databases, ID, Query  } from "appwrite";



export const isLogin =async (id) => {
    console.log(id)
   
    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64ff77a619e2d6d3c6e3');
    const account = new Account(client);
    account.createOAuth2Session('google', `http://localhost:3000/dashboard`, 'http://localhost:3000');
    const session = await account.getSession('current');
    return session;

  }