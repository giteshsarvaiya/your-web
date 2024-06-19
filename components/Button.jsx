"use client"
import React from 'react'
import { Client, Account, Databases, ID, Query  } from "appwrite";
import axios from 'axios';
import {useState, useEffect, useCallback} from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Input, Button} from "@nextui-org/react";



// login button
const ButtonLogin = ({logo}) => {

  const [login, setLogin] = useState(0)
  const [userData, setUserData] = useState({email:"",
displayName:""
})

 const handleLogin = useCallback(()=>{

    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64ff77a619e2d6d3c6e3');
    const account = new Account(client);
    // account.createOAuth2Session('google', `http://localhost:3000/dashboard`, 'http://localhost:3000');


      async function fetchdata(account) {
          const session = await account.getSession('current');
          console.log(session.provider);
          console.log(session.providerUid);
          console.log(session.providerAccessToken);

          const peopleApiUrl = 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses';
          const googleResponse = await axios.get(peopleApiUrl, {
            headers: {
              Authorization: `Bearer ${session.providerAccessToken}`,
            },
          });
          
          console.log('Google Response:', googleResponse.data);
          setUserData({email:googleResponse.data.emailAddresses[0].value,
            displayName:googleResponse.data.names[0].displayName
          });
          console.log(userData)

// database-query {checking if the user already exists in database and if if does not exist, adding it to the database}

          const databases = new Databases(client);

          let promiseCheckAppwriteforuserDetails = databases.listDocuments(
            "6569c7cd36b3636efb40",
            "65c1ec501ee5708d5452",
            [Query.equal("email", `${googleResponse.data.emailAddresses[0].value}`)]
          );

// checking if the user exists in the database

          promiseCheckAppwriteforuserDetails.then(
            async function ({total, documents}){
              if (total === 0) {
// if the user does not exist, add the user to database.
                console.log("adding to database")

                const promiseCreateDocument = databases.createDocument(
                  '6569c7cd36b3636efb40',
                  '65c1ec501ee5708d5452',
                  ID.unique(),
                  {email:googleResponse.data.emailAddresses[0].value,
                displayName:googleResponse.data.names[0].displayName,}
              );
              promiseCreateDocument.then(function (response) {
                console.log(response);
                account.createOAuth2Session('google', `http://localhost:3000/dashboard/${response.id}`, 'http://localhost:3000');
              }, function (error) {
                console.log(error);
              });
              } else {
// if the user exists already, fetch his or her details and display on the screen
                console.log("found in database")
                account.createOAuth2Session('google', `http://localhost:3000/dashboard/${documents[0].$id}` , 'http://localhost:3000');
                console.log(documents[0])
                setUserData({displayName:`${documents[0].displayName}`})
              }
            }

          )
      
   }
   fetchdata(account)
      }, [login]);



  return ( <>
<Button color="primary" variant="bordered" className='w-full' onPress={handleLogin} >
          <Image
          alt="Google logo"
          height={20}
          radius="lg"
          src={logo}
          width={20}
        />
            Sign in with Google
          </Button>  
</>
  );
}

// logoutbutton
const ButtonLogout = () => {

  function handleLogout(){
    
    const client = new Client();



client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64ff77a619e2d6d3c6e3') // Your project ID
;
const account = new Account(client);
const promise = account.deleteSession('current');

promise.then(function (response) {
    console.log("logoutdone"); 
    redirect("/")
}, function (error) {
    console.log(error); // Failure
});
    
  }

  return ( <>
<Button color="primary" variant="bordered" className='w-full' onPress={handleLogout} >          <Image
          alt="Google logo"
          height={20}
          radius="lg"
          width={20}
        />
            Logout
          </Button>  
</>
  );
}

// signup button

const ButtonSignup = ({logo}) => {

  const [userData, setUserData] = useState({email:"",
displayName:""
})

 const handleLogin = useCallback(()=>{

    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64ff77a619e2d6d3c6e3');
    const account = new Account(client);
    account.createOAuth2Session('google', `http://localhost:3000/dashboard`, 'http://localhost:3000');


      async function fetchdata(account) {
          const session = await account.getSession('current');
          console.log(session.provider);
          console.log(session.providerUid);
          console.log(session.providerAccessToken);
          // console.log(session.providerAccessTokenExpiry);
          // const response = await axios.get(`https://people.googleapis.com/v1/people/${session.providerUid}`);
        
          // setPersonData(response.data);
          // console.log(response)
          const peopleApiUrl = 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses';
          const googleResponse = await axios.get(peopleApiUrl, {
            headers: {
              Authorization: `Bearer ${session.providerAccessToken}`,
            },
          });
          
          console.log('Google Response:', googleResponse.data);
          setUserData({email:googleResponse.data.emailAddresses[0].value,
            displayName:googleResponse.data.names[0].displayName
          });
          console.log(userData)

// database-query {checking if the user already exists in database and if if does not exist, adding it to the database}

          const databases = new Databases(client);

          let promiseCheckAppwriteforuserDetails = databases.listDocuments(
            "6569c7cd36b3636efb40",
            "65c1ec501ee5708d5452",
            [Query.equal("email", `${googleResponse.data.emailAddresses[0].value}`)]
          );

// checking if the user exists in the database

          promiseCheckAppwriteforuserDetails.then(
            async function ({total, documents}){
              if (total === 0) {
// if the user does not exist, add the user to database.
                console.log("adding to database")

                const promiseCreateDocument = databases.createDocument(
                  '6569c7cd36b3636efb40',
                  '65c1ec501ee5708d5452',
                  ID.unique(),
                  {email:googleResponse.data.emailAddresses[0].value,
                displayName:googleResponse.data.names[0].displayName,}
              );
              promiseCreateDocument.then(function (response) {
                console.log(response);
                account.createOAuth2Session('google', `http://localhost:3000/dashboard/${response.id}`, 'http://localhost:3000');
              }, function (error) {
                console.log(error);
              });
              } else {
// if the user exists already, fetch his or her details and display on the screen
                console.log("found in database")
                account.createOAuth2Session('google', `http://localhost:3000/dashboard/${documents[0].$id}` , 'http://localhost:3000');
                console.log(documents[0])
                setUserData({displayName:`${documents[0].displayName}`})
              }
            }

          )
      
   }
   fetchdata(account)
      }, [login]);



  return ( <>
<Button color="primary" variant="bordered" className='w-full' onPress={handleLogin} >
          <Image
          alt="Google logo"
          height={20}
          radius="lg"
          src={logo}
          width={20}
        />
            Sign in with Google
          </Button>  
</>
  );
}

export { ButtonLogin, ButtonLogout, ButtonSignup }