import { createClient } from 'pexels';

const client = createClient('etFEhmaTjId1fuyXJgwNWBxSPc7M4UxIj86XMh6xriKYDpyME5ulWXKi');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {});
