/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GPT_API: process.env.NEXT_PUBLIC_GPT_API,
        DB_ID: process.env.NEXT_PUBLIC_DB_ID,
        USER_DETAILS_ID: process.env.NEXT_PUBLIC_USER_DETAILS_ID,
        GPT_DETAILS_ID: process.env.NEXT_PUBLIC_GPT_DETAILS_ID,
        DETAILS_ID: process.env.NEXT_PUBLIC_DETAILS_ID,
        PEXELS_ID: process.env.NEXT_PUBLIC_PEXELS_ID,
        PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
      },
}

module.exports = nextConfig
