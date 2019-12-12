const getFlightData = () => {
  const flights = [
    {
      callsign: 'DLH',
      wtCat: {
        h: {
          type: ['A333', 'A343', 'A345', 'A346', 'A359'],
          dest: [
            {
              ades: 'RJAA',
              ahdg: 95
            },
            {
              ades: 'OMDB',
              ahdg: 140
            },
            {
              ades: 'EDDM',
              ahdg: 305
            },
            {
              ades: 'EDDF',
              ahdg: 290
            }
          ]
        },
        m: {
          type: ['A319', 'A320', 'A321', 'A332', 'CRJ'],
          dest: [
            {
              ades: 'LROP',
              ahdg: 105
            },
            {
              ades: 'LYBE',
              ahdg: 170
            },
            {
              ades: 'LTFM',
              ahdg: 140
            },
            {
              ades: 'EDDM',
              ahdg: 310
            },
            {
              ades: 'EDDF',
              ahdg: 300
            }
          ]
        }
      }
    },
    {
      callsign: 'WZZ',
      wtCat: {
        m: {
          type: ['A320', 'A321'],
          dest: [
            {
              ades: 'EGGW',
              ahdg: 300
            },
            {
              ades: 'LFOB',
              ahdg: 285
            },
            {
              ades: 'EDDV',
              ahdg: 340
            },
            {
              ades: 'EKBI',
              ahdg: 350
            }
          ]
        }
      }
    }
  ]

  return flights;
};

const pickRandomArrayElem = (array) => {
  if ((array.length < 1) && (Array.isArray(array)))
    return null;

  const randomIndex = Math.round(Math.floor(Math.random() * array.length));
  return array[randomIndex];
}

const headingToVector = (hdgDeg) => {
  // X is positive if its direction is east
  // Y is positive if its direction is north

  const hdgRad = hdgDeg * (Math.PI/180);

  const x = Math.sin(hdgRad);
  const y = Math.cos(hdgRad);

  return [x, y];
}

class Track {

  callsign;
  sector = '--';
  type;
  wt;
  dest;
  flActual;
  flCleared;
  flExit;
  hdg;
  gspd;

  xSpd;
  ySpd;

  xPos;
  yPos;

  constructor () {
    const flights = getFlightData();
    const airlineSelected = pickRandomArrayElem(flights);

    const wtCatNames = Object.keys(airlineSelected.wtCat).map((key) => (key));
    const wtCatName = pickRandomArrayElem(wtCatNames);
    const wtCatSelected = airlineSelected.wtCat[wtCatName];
    const typeArr = wtCatSelected.type;
    const typeSelected = pickRandomArrayElem(typeArr);
    const destArr = wtCatSelected.dest;
    const destSelected = pickRandomArrayElem(destArr);

    const callsignNumber = ('000' + Math.round(Math.random()*999)).substr(-3);
    const flightLevel = pickRandomArrayElem([270, 280, 290, 300, 310, 320, 330]);
    const flExit = pickRandomArrayElem([270, 280, 290, 300, 310, 320, 330]);
    const vector = headingToVector(destSelected.ahdg);

    this.callsign = airlineSelected.callsign + callsignNumber;
    //this.sector = '--';
    this.type = typeSelected;
    this.wt = wtCatName.toUpperCase();
    this.dest = destSelected.ades;
    this.flActual = flightLevel;
    this.flCleared = flightLevel + Math.round((Math.random() * 60 - 30)/10) * 10;
    this.flExit = flExit;
    this.hdg = destSelected.ahdg;
    this.gspd = 250 + Math.round(Math.random()*200);
    this.xSpd = vector[0];
    this.ySpd = vector[1];
  }

  move = (spdMultiplier) => {
    this.xPos = this.xPos + this.xSpd * this.gspd * spdMultiplier;
    this.yPos = this.yPos - this.ySpd * this.gspd * spdMultiplier;
  }

  setPos = (x, y) => {
    this.xPos = x;
    this.yPos = y;
  }
};

export default Track;
