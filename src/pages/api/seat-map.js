// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

const getTrueFalse = (value = 0.5) => {
  return Math.random() < value
}
const a = {
  "seatData": [
    {
      "areaCode": "A",
      "rowCode": "M",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "N"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "B",
      "rowCode": "L",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "15",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "16",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "17",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "B",
      "rowCode": "K",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "N"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "N"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "N"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "N"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "N"
        },
        {
          "isWalkway": false,
          "seatNo": "15",
          "isAvail": "N"
        },
        {
          "isWalkway": false,
          "seatNo": "16",
          "isAvail": "N"
        },
        {
          "isWalkway": false,
          "seatNo": "17",
          "isAvail": "N"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "B",
      "rowCode": "J",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "15",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "16",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "17",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "B",
      "rowCode": "H",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "15",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "16",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "17",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "B",
      "rowCode": "G",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "C",
      "rowCode": "F",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "C",
      "rowCode": "E",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "C",
      "rowCode": "D",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y",
          "isPreferred": true
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "C",
      "rowCode": "C",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "C",
      "rowCode": "B",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "C",
      "rowCode": "A",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": false,
          "seatNo": "01",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "02",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "03",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "04",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "05",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "06",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "07",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "08",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "09",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "10",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "11",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "12",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "13",
          "isAvail": "Y"
        },
        {
          "isWalkway": false,
          "seatNo": "14",
          "isAvail": "Y"
        },
        {
          "isWalkway": true
        }
      ]
    },
    {
      "areaCode": "C",
      "rowCode": "",
      "seats": [
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        },
        {
          "isWalkway": true
        }
      ]
    }
  ],
  "categoryData": [
    {
      "areaCode": "A",
      "areaName": "ROYAL",
      "price": 550
    },
    {
      "areaCode": "B",
      "areaName": "CLUB",
      "price": 360
    },
    {
      "areaCode": "C",
      "areaName": "EXECUTIVE",
      "price": 330
    }
  ]
}
export default function handler(req, res) {
  if (getTrueFalse(0.1)) {
    res.status(500).json({ error: "Internal Server Error" });
  }
  if (!req.body.timeSlot) {
    res.status(400).json({ error: "timeSlot is required" });
  }

  res.status(200).json({
    ...a,
    seatData: a.seatData
        .filter(() => getTrueFalse(0.8))
        .map(x => ({
          ...x,
          seats: x.seats
              .map(seat => ({
                ...seat,
                isPreferred: getTrueFalse(0.2),
                isAvail: getTrueFalse(0.75)}
              ))
        }))
  });
}
