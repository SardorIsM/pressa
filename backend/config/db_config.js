import pg  from "pg"

const { Pool } = pg


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pressa',
  password: '6823572',
  port: 5432,
})

export default pool