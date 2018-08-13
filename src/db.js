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
            id: 0,
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
            id: 1,
            model: 'Q7',
            engine: '3.0L TFSI V6 engine',
            infotainmentSystem: [
              'CD',
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
        demands: [
          {
            id: 0,
            pickUpLocation: 0,
            dropOffLocation: 0,
            earliestPickUpTime: String(
              new Date('Mon, 13 August 2018 13:30:00').getTime()
            ),
            latestDropOffTime: String(
              new Date('Mon, 13 August 2018 15:30:00').getTime()
            ),
            carFeatures: [
              'A3',
              '2.0L TFSI four-cylinder engine',
              'USB',
              'chestnut brown'
            ]
          },
          {
            id: 1,
            pickUpLocation: 0,
            dropOffLocation: 0,
            earliestPickUpTime: String(
              new Date('Mon, 12 August 2018 08:30:00').getTime()
            ),
            latestDropOffTime: String(
              new Date('Mon, 12 August 2018 19:00:00').getTime()
            ),
            carFeatures: ['Q7', '3.0L TFSI V6 engine', 'CD', 'Pistachio beige']
          }
        ]
      }),
    100
  )
)
