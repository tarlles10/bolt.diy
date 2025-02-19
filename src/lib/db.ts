import { createClient } from 'libsql-client';

const db = createClient({
  url: 'libsql://local.db' // In-memory database for WebContainer
});

export default db;
