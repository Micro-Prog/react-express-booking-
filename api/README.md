



## Description


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
```

## API Routes

```
    <!-- *** HOTELS *** -->

    create a hotel:
    # POST ==> http://localhost:8000/api/hotels/
        --> cookies (jwt) to pass obtained from login user: access_token of admin
        --> the body in json:
            {
                "name": "hotel xxx",
                "type": "type 1",
                "city": "city 1",
                "address": "address 1",
                "distanceFromCityCenter": "distance 1",
                "title": "title 1",
                "description": "description 1",
                "cheapestRoomPrice": 100,
                "rooms": ["room one"],
                "rating": 1
            }

    get all hotels
    # GET ==> http://localhost:8000/api/hotels/
        --> no need to pass anything in json


    <!-- *** USERS *** -->

    create a user
    # POST ==> http://localhost:8000/api/auth/register
        --> the body in json:
            {
                "username": "user01",
                "email": "user01@gmail.com",
                "password": "123"
            }
    
    login a user
    # POST ==> http://localhost:8000/api/auth/login
        --> the body in json:
        {
            "username": "user01",
            "password": "123"
        }

        <!-- *** Rooms *** -->

    create a room
    # POST ==> http://localhost:8000/api/rooms/[hotelid]
     --> cookies (jwt) to pass obtained from login user: access_token of admin
     --> the body in json:
        {
            "title": "room one",
            "description": "room one desc",
            "price": 120,
            "maxCapacity": 3,
            "roomNums": [{"number": 101}, {"number": 102}]
        }
    
    # DELETE ==> http://localhost:8000/api/rooms/[roomid]/[hotelid]
     --> cookies (jwt) to pass obtained from login user: access_token of admin
     
```



