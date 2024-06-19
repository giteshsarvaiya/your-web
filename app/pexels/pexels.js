import { createClient } from 'pexels';

const client = createClient('etFEhmaTjId1fuyXJgwNWBxSPc7M4UxIj86XMh6xriKYD');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {});
