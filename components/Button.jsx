import React from 'react'
import Link from 'next/link';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Input, Button} from "@nextui-org/react";

const Button = () => {
  return ( <>
<Button color="primary" variant="bordered" className='w-full' onPress={()=>{createUser()}} >          <Image
          alt="Google logo"
          height={20}
          radius="lg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          width={20}
        />
            Sign in with Google
          </Button>  
</>
  );
}

export default Button