import { createClient } from 'pexels';

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_ID);
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {});
