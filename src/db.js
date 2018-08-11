module.exports = new Promise(res =>
  setTimeout(
    () =>
      res({
        users: [
          {
            id: 0,
            name: "Mat",
            gender: "M",
            age: 30
          },
          {
            id: 1,
            name: "Juliane",
            gender: "F",
            age: 25
          }
        ],
        cars: [],
        demands: []
      }),
    100
  )
)
