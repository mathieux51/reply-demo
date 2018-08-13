module.exports = new Promise(res =>
  setTimeout(
    () =>
      res({
        users: [
          {
            id: 0,
            name: 'Mat',
            gender: 'M',
            age: 30
          },
          {
            id: 1,
            name: 'Juliane',
            gender: 'F',
            age: 25
          }
        ],
        cars: [
          {
            id: 'a802eef6-0fb6-44f6-a587-b206dc8f8623',
            model: 'A3',
            engine: '2.0L TFSI four-cylinder engine',
            infotainmentSystem: [
              'CD',
              'USB',
              'Bluetooth',
              'video player',
              'Automotive navigation system'
            ],
            interiorDesign: {
              color: 'chestnut brown'
            },
            currentLocation: 0
          },
          {
            id: '2f417050-d66d-4321-80d9-3645adc83dc0',
            model: 'Q7',
            engine: '3.0L TFSI V6 engine',
            infotainmentSystem: [
              'CD',
              'USB',
              'Bluetooth',
              'WiFi',
              'video player',
              'Automotive navigation system'
            ],
            interiorDesign: {
              color: 'Pistachio beige'
            },
            currentLocation: 0
          }
        ],
        demands: []
      }),
    100
  )
)
