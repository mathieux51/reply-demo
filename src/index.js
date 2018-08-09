const Hapi = require("hapi")

const config = require("./config")
const api = require("./routes/api")

async function main() {
  try {
    const server = new Hapi.Server(config.hapi)
    server.decorate("request", "db", db)

    await server.register(api)
    console.log(`Endoints mounted`)

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  } catch (err) {
    console.log(err)
  }
}
main()
