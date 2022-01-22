const responses = {
  "56072" :
  {
      "id": 56072,
      "name": "Small Midday Rebalance",
      "market": "austin",
      "messages": [],
      "status": "complete",
      "created_at": "2021-10-08T17:39:44.763687Z",
      "solver_completed_at": "2021-10-08T17:39:50.371254Z",
      "trips": [
          {
              "initial_vehicles": 3,
              "stops": [
                  {
                      "id": 3030124,
                      "stop_number": 1,
                      "action": "pickup",
                      "longitude": -97.742035775868,
                      "latitude": 30.2676877214881,
                      "vehicles": 1,
                      "vehicle_id": "141c6e3e-f1ba-446e-8758-74bcb0de8ca1",
                      "attributes": {
                          "id": "141c6e3e-f1ba-446e-8758-74bcb0de8ca1",
                          "status": 1,
                          "battery": 100,
                          "idle_time": 1187684,
                          "attributes": {},
                          "raw_priority_score": -0.01385698361264076
                      },
                      "marked_completed_at": null,
                      "marked_completed_by": null
                  },
                  {
                      "id": 3030125,
                      "stop_number": 2,
                      "action": "pickup",
                      "longitude": -97.7426146434934,
                      "latitude": 30.2893496306383,
                      "vehicles": 1,
                      "vehicle_id": "8d48852c-1431-48d9-8467-21778f43a9d0",
                      "attributes": {
                          "id": "8d48852c-1431-48d9-8467-21778f43a9d0",
                          "status": 1,
                          "battery": 100,
                          "idle_time": 847541,
                          "attributes": {},
                          "raw_priority_score": -0.022310583823127672
                      },
                      "marked_completed_at": null,
                      "marked_completed_by": null
                  },
                  {
                      "id": 3030126,
                      "stop_number": 3,
                      "action": "swap_battery",
                      "longitude": -97.7417716487774,
                      "latitude": 30.292143763464,
                      "vehicles": 1,
                      "vehicle_id": "001302a8-573f-4305-98e2-2f719eb0d840",
                      "attributes": {
                          "battery": 100,
                          "raw_priority_score": 1
                      },
                      "marked_completed_at": null,
                      "marked_completed_by": null
                  },
                  {
                      "id": 3030127,
                      "stop_number": 4,
                      "action": "dropoff",
                      "longitude": -97.76756273,
                      "latitude": 30.26548656,
                      "vehicles": 5,
                      "vehicle_id": null,
                      "attributes": {
                          "id": "253",
                          "name": "Barton Springs/Zilker",
                          "notes": "",
                          "inactive": false,
                          "max_vehicles": 8,
                          "min_vehicles": 0,
                          "total_vehicles": 5,
                          "raw_priority_score": 26.318377621246327,
                          "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.26548656+-97.76756273"
                      },
                      "marked_completed_at": null,
                      "marked_completed_by": null
                  },
                  {
                      "id": 3030128,
                      "stop_number": 5,
                      "action": "swap_battery",
                      "longitude": -97.7403878285874,
                      "latitude": 30.2614845335166,
                      "vehicles": 1,
                      "vehicle_id": "00066528-4d85-4cc8-bacf-a904f3ec96d8",
                      "attributes": {
                          "battery": 100,
                          "raw_priority_score": 1
                      },
                      "marked_completed_at": null,
                      "marked_completed_by": null
                  }
              ],
              "warehouse": {
                  "id": "Austin Warehouse",
                  "attributes": {}
              },
              "van": {
                  "id": "Van 1",
                  "attributes": {}
              }
          }
      ]
  },
  "53402": {
    "id": 53402,
    "name": "Noon Deployment for Oct 02 2021",
    "market": "austin",
    "messages": [],
    "status": "complete",
    "created_at": "2021-10-02T15:02:19.548431Z",
    "solver_completed_at": "2021-10-02T15:04:00.176933Z",
    "trips": [
        {
            "initial_vehicles": 32,
            "stops": [
                {
                    "id": 2911742,
                    "stop_number": 1,
                    "action": "dropoff",
                    "longitude": -97.74960229279736,
                    "latitude": 30.21312220303431,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1354",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 27.234937363293284
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911743,
                    "stop_number": 2,
                    "action": "dropoff",
                    "longitude": -97.74880338273518,
                    "latitude": 30.212046156760824,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1408",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 27.234937363293284
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911744,
                    "stop_number": 3,
                    "action": "dropoff",
                    "longitude": -97.73517449241855,
                    "latitude": 30.215837199656,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1759",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.733765202265204
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911745,
                    "stop_number": 4,
                    "action": "dropoff",
                    "longitude": -97.72012327112694,
                    "latitude": 30.266042160264405,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "367",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.904848846690584
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911746,
                    "stop_number": 5,
                    "action": "dropoff",
                    "longitude": -97.70309805215518,
                    "latitude": 30.28539778726194,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "867",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.798580073329504
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911747,
                    "stop_number": 6,
                    "action": "dropoff",
                    "longitude": -97.7032381784037,
                    "latitude": 30.28760041331226,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1039",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.073359824156796
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911748,
                    "stop_number": 7,
                    "action": "dropoff",
                    "longitude": -97.70126208117206,
                    "latitude": 30.290979961718637,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "683",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.89797721193463
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911749,
                    "stop_number": 8,
                    "action": "dropoff",
                    "longitude": -97.70765312826427,
                    "latitude": 30.299588519789054,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "331",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.790165859511035
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911750,
                    "stop_number": 9,
                    "action": "dropoff",
                    "longitude": -97.7096718830739,
                    "latitude": 30.308348192659718,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "713",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 25.60600044952298
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911751,
                    "stop_number": 10,
                    "action": "dropoff",
                    "longitude": -97.71047093115324,
                    "latitude": 30.309424222714437,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "873",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 3,
                        "raw_priority_score": 15.125354136311216
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911752,
                    "stop_number": 11,
                    "action": "dropoff",
                    "longitude": -97.70557892845747,
                    "latitude": 30.312904370550296,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "979",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.99035804147934
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                }
            ],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Van 1",
                "attributes": {}
            }
        },
        {
            "initial_vehicles": 48,
            "stops": [
                {
                    "id": 2911753,
                    "stop_number": 1,
                    "action": "dropoff",
                    "longitude": -97.73134831527577,
                    "latitude": 30.32746323711654,
                    "vehicles": 4,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1017",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 20.17330348761243
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911754,
                    "stop_number": 2,
                    "action": "dropoff",
                    "longitude": -97.73200704160962,
                    "latitude": 30.32633669345174,
                    "vehicles": 4,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1216",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 4,
                        "raw_priority_score": 20.17330348761243
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911755,
                    "stop_number": 3,
                    "action": "dropoff",
                    "longitude": -97.69680696279363,
                    "latitude": 30.266851571367933,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1204",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.123629431036534
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911756,
                    "stop_number": 4,
                    "action": "dropoff",
                    "longitude": -97.69666698681354,
                    "latitude": 30.264648830654643,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1068",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.123629431036534
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911757,
                    "stop_number": 5,
                    "action": "dropoff",
                    "longitude": -97.69572847323325,
                    "latitude": 30.261369926892247,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "736",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 3,
                        "raw_priority_score": 15.1477039282654
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911758,
                    "stop_number": 6,
                    "action": "dropoff",
                    "longitude": -97.69784416326986,
                    "latitude": 30.260192820110344,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "558",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 3,
                        "raw_priority_score": 14.880279209144646
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911759,
                    "stop_number": 7,
                    "action": "dropoff",
                    "longitude": -97.6923945996293,
                    "latitude": 30.254862501428388,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "870",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 26.803264265992766
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911760,
                    "stop_number": 8,
                    "action": "dropoff",
                    "longitude": -97.69385161708239,
                    "latitude": 30.254812039925707,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "924",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 26.803264265992766
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911761,
                    "stop_number": 9,
                    "action": "dropoff",
                    "longitude": -97.70179535381335,
                    "latitude": 30.253432783877045,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "659",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 25.242301187852718
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911762,
                    "stop_number": 10,
                    "action": "dropoff",
                    "longitude": -97.70113684816839,
                    "latitude": 30.254559484760794,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "824",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 3,
                        "raw_priority_score": 14.988192297376372
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911763,
                    "stop_number": 11,
                    "action": "dropoff",
                    "longitude": -97.7043312287544,
                    "latitude": 30.258864022282133,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1063",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.044067570601328
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911764,
                    "stop_number": 12,
                    "action": "dropoff",
                    "longitude": -97.70301417769751,
                    "latitude": 30.261117394078624,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "935",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.868190095112368
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911765,
                    "stop_number": 13,
                    "action": "dropoff",
                    "longitude": -97.70235563649959,
                    "latitude": 30.262244063065474,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "880",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.868190095112368
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911766,
                    "stop_number": 14,
                    "action": "dropoff",
                    "longitude": -97.72016698185287,
                    "latitude": 30.278182926283073,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "467",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.717203753330978
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911767,
                    "stop_number": 15,
                    "action": "dropoff",
                    "longitude": -97.740897197523,
                    "latitude": 30.32823519055209,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "981",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.969506778146751
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911768,
                    "stop_number": 16,
                    "action": "dropoff",
                    "longitude": -97.74023851624258,
                    "latitude": 30.32936179388971,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1092",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.969506778146751
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                }
            ],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Van 2",
                "attributes": {}
            }
        },
        {
            "initial_vehicles": 50,
            "stops": [
                {
                    "id": 2911769,
                    "stop_number": 1,
                    "action": "dropoff",
                    "longitude": -97.73586373677806,
                    "latitude": 30.32951382036363,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1135",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.971757163428265
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911770,
                    "stop_number": 2,
                    "action": "dropoff",
                    "longitude": -97.73652244634188,
                    "latitude": 30.328387252301624,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "969",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 25.994702105937904
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911771,
                    "stop_number": 3,
                    "action": "dropoff",
                    "longitude": -97.73172557878335,
                    "latitude": 30.321931705945364,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1504",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 3,
                        "raw_priority_score": 15.282317142740794
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911772,
                    "stop_number": 4,
                    "action": "dropoff",
                    "longitude": -97.73078545720811,
                    "latitude": 30.318653246459792,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "891",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.718755683501513
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911773,
                    "stop_number": 5,
                    "action": "dropoff",
                    "longitude": -97.717198430846,
                    "latitude": 30.300361541573103,
                    "vehicles": 4,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1361",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 4,
                        "raw_priority_score": 20.515902599432593
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911774,
                    "stop_number": 6,
                    "action": "dropoff",
                    "longitude": -97.71541668900174,
                    "latitude": 30.283866979156084,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "369",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.642865930807602
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911775,
                    "stop_number": 7,
                    "action": "dropoff",
                    "longitude": -97.70920848312701,
                    "latitude": 30.28960113056805,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1725",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.809969874298986
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911776,
                    "stop_number": 8,
                    "action": "dropoff",
                    "longitude": -97.71000739721937,
                    "latitude": 30.290677191100915,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1641",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 3,
                        "raw_priority_score": 15.145092426751944
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911777,
                    "stop_number": 9,
                    "action": "dropoff",
                    "longitude": -97.7142829455465,
                    "latitude": 30.30046261724615,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1674",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.026160564702877
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911778,
                    "stop_number": 10,
                    "action": "dropoff",
                    "longitude": -97.7128252172552,
                    "latitude": 30.300513130272886,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1350",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.681867242503358
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911779,
                    "stop_number": 11,
                    "action": "dropoff",
                    "longitude": -97.70793359785841,
                    "latitude": 30.30399360103031,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "550",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 3,
                        "raw_priority_score": 15.702648734342802
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911780,
                    "stop_number": 12,
                    "action": "dropoff",
                    "longitude": -97.71019034952575,
                    "latitude": 30.305019194175134,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "910",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.08182307919924
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911781,
                    "stop_number": 13,
                    "action": "dropoff",
                    "longitude": -97.7153627651909,
                    "latitude": 30.30594376573261,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1081",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 3,
                        "raw_priority_score": 15.206122642270202
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911782,
                    "stop_number": 14,
                    "action": "dropoff",
                    "longitude": -97.72043866532097,
                    "latitude": 30.316804805550767,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "587",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.150603428970498
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911783,
                    "stop_number": 15,
                    "action": "dropoff",
                    "longitude": -97.71926164371655,
                    "latitude": 30.321260267134868,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1484",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.820954733579129
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911784,
                    "stop_number": 16,
                    "action": "dropoff",
                    "longitude": -97.71860286609292,
                    "latitude": 30.32238673802437,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1481",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.820954733579129
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911785,
                    "stop_number": 17,
                    "action": "dropoff",
                    "longitude": -97.72695914817513,
                    "latitude": 30.396034657793937,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "916",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 10.105500742720324
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911786,
                    "stop_number": 18,
                    "action": "dropoff",
                    "longitude": -97.71768658428317,
                    "latitude": 30.399664070982737,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "632",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 26.061421740898368
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2911787,
                    "stop_number": 19,
                    "action": "dropoff",
                    "longitude": -97.71848636210547,
                    "latitude": 30.400739929925514,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "756",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 4,
                        "raw_priority_score": 10.123282895820012
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                }
            ],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Van 3",
                "attributes": {}
            }
        }
    ]
  },
  "54920": {
    "id": 54920,
    "name": "Morning Deployment for Oct 06 2021",
    "market": "austin",
    "messages": [],
    "status": "complete",
    "created_at": "2021-10-06T09:05:14.986206Z",
    "solver_completed_at": "2021-10-06T09:08:44.771543Z",
    "trips": [
        {
            "initial_vehicles": 30,
            "stops": [
                {
                    "id": 2979752,
                    "stop_number": 1,
                    "action": "dropoff",
                    "longitude": -97.77142474298901,
                    "latitude": 30.302885377199587,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1883",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 5.322469717986678
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979753,
                    "stop_number": 2,
                    "action": "dropoff",
                    "longitude": -97.77203396940939,
                    "latitude": 30.289616982802688,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "729",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 11.558241252991138
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979754,
                    "stop_number": 3,
                    "action": "dropoff",
                    "longitude": -97.77057597316796,
                    "latitude": 30.289668185348162,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "814",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 11.558241252991138
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979755,
                    "stop_number": 4,
                    "action": "dropoff",
                    "longitude": -97.77250159284844,
                    "latitude": 30.274144940670666,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "845",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 17.327286521409405
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979756,
                    "stop_number": 5,
                    "action": "dropoff",
                    "longitude": -97.7731597614041,
                    "latitude": 30.273017784071463,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "789",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 17.327286521409405
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979757,
                    "stop_number": 6,
                    "action": "dropoff",
                    "longitude": -97.77381791949787,
                    "latitude": 30.271890616210282,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1072",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.405751502075873
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979758,
                    "stop_number": 7,
                    "action": "swap_battery",
                    "longitude": -97.7505658511161,
                    "latitude": 30.2709275627651,
                    "vehicles": 1,
                    "vehicle_id": "00492db8-264c-4537-bea7-b0f41b08c73d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979759,
                    "stop_number": 8,
                    "action": "swap_battery",
                    "longitude": -97.746308056224,
                    "latitude": 30.2658746962561,
                    "vehicles": 1,
                    "vehicle_id": "01080175-7895-43dd-83f5-6ad12c7e5e1c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979760,
                    "stop_number": 9,
                    "action": "pickup",
                    "longitude": -97.7445559416394,
                    "latitude": 30.266562989316,
                    "vehicles": 1,
                    "vehicle_id": "963ab570-dc5b-4776-8993-5f2b9adca5cd",
                    "attributes": {
                        "id": "963ab570-dc5b-4776-8993-5f2b9adca5cd",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 888779,
                        "attributes": {},
                        "raw_priority_score": -0.03549390668558772
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979761,
                    "stop_number": 10,
                    "action": "swap_battery",
                    "longitude": -97.7443260714086,
                    "latitude": 30.2659594838597,
                    "vehicles": 1,
                    "vehicle_id": "0040c93a-10b2-44b0-aadc-d7f99bcf0678",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979762,
                    "stop_number": 11,
                    "action": "swap_battery",
                    "longitude": -97.7444900101588,
                    "latitude": 30.2657672775883,
                    "vehicles": 1,
                    "vehicle_id": "0177297b-30b6-4ced-add3-10c0a974f694",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979763,
                    "stop_number": 12,
                    "action": "swap_battery",
                    "longitude": -97.7456625023583,
                    "latitude": 30.2651132327847,
                    "vehicles": 1,
                    "vehicle_id": "00a1ae29-026e-4bd0-8150-6570567ff0b4",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979764,
                    "stop_number": 13,
                    "action": "swap_battery",
                    "longitude": -97.7463815035274,
                    "latitude": 30.2649181644504,
                    "vehicles": 1,
                    "vehicle_id": "00b5be41-498c-449f-9389-be45954b38b3",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979765,
                    "stop_number": 14,
                    "action": "swap_battery",
                    "longitude": -97.7458782110789,
                    "latitude": 30.2645001547599,
                    "vehicles": 1,
                    "vehicle_id": "0169dbc0-7ac7-4889-806f-a8a8b740c43c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979766,
                    "stop_number": 15,
                    "action": "swap_battery",
                    "longitude": -97.7460725259399,
                    "latitude": 30.2642658523193,
                    "vehicles": 1,
                    "vehicle_id": "00dee684-96fe-4ffa-8e12-fdc06b8e6f42",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979767,
                    "stop_number": 16,
                    "action": "swap_battery",
                    "longitude": -97.7456121635169,
                    "latitude": 30.2636320552254,
                    "vehicles": 1,
                    "vehicle_id": "01061e8c-6876-4ffc-8b2d-1376599cd549",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979768,
                    "stop_number": 17,
                    "action": "swap_battery",
                    "longitude": -97.7451502753145,
                    "latitude": 30.2638656775203,
                    "vehicles": 1,
                    "vehicle_id": "017bd485-2802-44b3-b6e6-dc1d49431a70",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979769,
                    "stop_number": 18,
                    "action": "swap_battery",
                    "longitude": -97.7449807903794,
                    "latitude": 30.2644407001035,
                    "vehicles": 1,
                    "vehicle_id": "00cf16de-03a3-4a5f-bf2e-4078cdf2491a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979770,
                    "stop_number": 19,
                    "action": "pickup",
                    "longitude": -97.7442618051754,
                    "latitude": 30.2644009274832,
                    "vehicles": 1,
                    "vehicle_id": "c01286ff-cade-405b-aa04-f88b8b0c03fc",
                    "attributes": {
                        "id": "c01286ff-cade-405b-aa04-f88b8b0c03fc",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 888863,
                        "attributes": {},
                        "raw_priority_score": -0.03549390668558772
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979771,
                    "stop_number": 20,
                    "action": "swap_battery",
                    "longitude": -97.7435290686295,
                    "latitude": 30.2636707874227,
                    "vehicles": 1,
                    "vehicle_id": "00f7bb4d-661c-4a64-b04f-5e6f8952d1b4",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979772,
                    "stop_number": 21,
                    "action": "swap_battery",
                    "longitude": -97.7422313761723,
                    "latitude": 30.2641570955667,
                    "vehicles": 1,
                    "vehicle_id": "0100a200-4118-4420-9ed6-54d6c66dfa33",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979773,
                    "stop_number": 22,
                    "action": "pickup",
                    "longitude": -97.7416719550314,
                    "latitude": 30.2648923921586,
                    "vehicles": 1,
                    "vehicle_id": "cfd40785-4401-4399-bef0-bc8ac326e1e7",
                    "attributes": {
                        "id": "cfd40785-4401-4399-bef0-bc8ac326e1e7",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1163317,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979774,
                    "stop_number": 23,
                    "action": "swap_battery",
                    "longitude": -97.7421712921624,
                    "latitude": 30.2648815690143,
                    "vehicles": 1,
                    "vehicle_id": "01740d31-b93d-44ef-8b54-5717c73a703e",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979775,
                    "stop_number": 24,
                    "action": "pickup",
                    "longitude": -97.7425716902277,
                    "latitude": 30.2649643319904,
                    "vehicles": 1,
                    "vehicle_id": "9ad97d98-2c2e-446b-b19e-5ec6ca751e4f",
                    "attributes": {
                        "id": "9ad97d98-2c2e-446b-b19e-5ec6ca751e4f",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1176200,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979776,
                    "stop_number": 25,
                    "action": "swap_battery",
                    "longitude": -97.7426125287674,
                    "latitude": 30.2651616993526,
                    "vehicles": 1,
                    "vehicle_id": "019a3ffc-1dad-4784-a8c5-ef11dc70256a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979777,
                    "stop_number": 26,
                    "action": "pickup",
                    "longitude": -97.7427087116328,
                    "latitude": 30.2654018379562,
                    "vehicles": 1,
                    "vehicle_id": "2d94ed90-5716-421f-9650-7d08fbc5c8ff",
                    "attributes": {
                        "id": "2d94ed90-5716-421f-9650-7d08fbc5c8ff",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1160028,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979778,
                    "stop_number": 27,
                    "action": "swap_battery",
                    "longitude": -97.7434393858284,
                    "latitude": 30.265694177325,
                    "vehicles": 1,
                    "vehicle_id": "00de5fe3-23cb-4a38-b091-53a8f399a436",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979779,
                    "stop_number": 28,
                    "action": "swap_battery",
                    "longitude": -97.7430146077849,
                    "latitude": 30.2668366552033,
                    "vehicles": 1,
                    "vehicle_id": "012be275-0b40-4285-aa1e-20b94ebbc0b4",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979780,
                    "stop_number": 29,
                    "action": "pickup",
                    "longitude": -97.7428649854912,
                    "latitude": 30.2666056736109,
                    "vehicles": 1,
                    "vehicle_id": "0e1c875b-e337-4857-adb8-4512206c4221",
                    "attributes": {
                        "id": "0e1c875b-e337-4857-adb8-4512206c4221",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1167405,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979781,
                    "stop_number": 30,
                    "action": "swap_battery",
                    "longitude": -97.7427594161494,
                    "latitude": 30.2664548733316,
                    "vehicles": 1,
                    "vehicle_id": "015b3af1-a585-45fd-ac72-7543ece2f241",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979782,
                    "stop_number": 31,
                    "action": "pickup",
                    "longitude": -97.7422551089358,
                    "latitude": 30.2662665035359,
                    "vehicles": 1,
                    "vehicle_id": "9a5c6c41-761c-4aa9-bc9c-a3a60bc6abbe",
                    "attributes": {
                        "id": "9a5c6c41-761c-4aa9-bc9c-a3a60bc6abbe",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1165654,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979783,
                    "stop_number": 32,
                    "action": "pickup",
                    "longitude": -97.7421865628694,
                    "latitude": 30.2661315787771,
                    "vehicles": 1,
                    "vehicle_id": "8960fa66-afcd-44d8-9c76-bc6a0afc0a2d",
                    "attributes": {
                        "id": "8960fa66-afcd-44d8-9c76-bc6a0afc0a2d",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1168812,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979784,
                    "stop_number": 33,
                    "action": "swap_battery",
                    "longitude": -97.7420272620622,
                    "latitude": 30.2660116781137,
                    "vehicles": 1,
                    "vehicle_id": "00774896-d93b-40db-bee8-9bdb331b4afd",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979785,
                    "stop_number": 34,
                    "action": "pickup",
                    "longitude": -97.7417318751433,
                    "latitude": 30.2663674824397,
                    "vehicles": 1,
                    "vehicle_id": "88227482-2691-4b49-94af-0cef17f601d4",
                    "attributes": {
                        "id": "88227482-2691-4b49-94af-0cef17f601d4",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1179730,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979786,
                    "stop_number": 35,
                    "action": "pickup",
                    "longitude": -97.741789907653,
                    "latitude": 30.2669856307316,
                    "vehicles": 1,
                    "vehicle_id": "c6bbfba9-4d55-4226-84ef-f779f43ad12c",
                    "attributes": {
                        "id": "c6bbfba9-4d55-4226-84ef-f779f43ad12c",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1177564,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979787,
                    "stop_number": 36,
                    "action": "pickup",
                    "longitude": -97.7417956734892,
                    "latitude": 30.2671393688058,
                    "vehicles": 1,
                    "vehicle_id": "a1564bd8-f99b-4c81-af52-88d3348428bf",
                    "attributes": {
                        "id": "a1564bd8-f99b-4c81-af52-88d3348428bf",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1172189,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979788,
                    "stop_number": 37,
                    "action": "pickup",
                    "longitude": -97.7418875247616,
                    "latitude": 30.2670978662387,
                    "vehicles": 1,
                    "vehicle_id": "2034cf09-7cc6-4e41-82ed-7c687c8fbce7",
                    "attributes": {
                        "id": "2034cf09-7cc6-4e41-82ed-7c687c8fbce7",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1187428,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979789,
                    "stop_number": 38,
                    "action": "swap_battery",
                    "longitude": -97.741995804325,
                    "latitude": 30.2671003084937,
                    "vehicles": 1,
                    "vehicle_id": "00206038-8ccb-45d1-9f26-5dbcc787ee75",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979790,
                    "stop_number": 39,
                    "action": "pickup",
                    "longitude": -97.7422862229103,
                    "latitude": 30.2670979917532,
                    "vehicles": 1,
                    "vehicle_id": "ebe05507-997c-40fc-ab6f-ba02cc503c41",
                    "attributes": {
                        "id": "ebe05507-997c-40fc-ab6f-ba02cc503c41",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1170599,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979791,
                    "stop_number": 40,
                    "action": "swap_battery",
                    "longitude": -97.7426038303991,
                    "latitude": 30.267618816558,
                    "vehicles": 1,
                    "vehicle_id": "007f1fed-0fe6-423f-8ca7-cd67834f20da",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979792,
                    "stop_number": 41,
                    "action": "swap_battery",
                    "longitude": -97.7424443606417,
                    "latitude": 30.267592656091,
                    "vehicles": 1,
                    "vehicle_id": "009dc19d-43f5-4691-9d44-120964233555",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979793,
                    "stop_number": 42,
                    "action": "swap_battery",
                    "longitude": -97.7413656309595,
                    "latitude": 30.2674796442296,
                    "vehicles": 1,
                    "vehicle_id": "0037432f-b020-4a41-bec9-3174f5de542b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979794,
                    "stop_number": 43,
                    "action": "pickup",
                    "longitude": -97.7412647954533,
                    "latitude": 30.2676806608655,
                    "vehicles": 1,
                    "vehicle_id": "916cbece-5e7d-4ca5-9406-f8bf62b43c09",
                    "attributes": {
                        "id": "916cbece-5e7d-4ca5-9406-f8bf62b43c09",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1180998,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979795,
                    "stop_number": 44,
                    "action": "swap_battery",
                    "longitude": -97.7407999369415,
                    "latitude": 30.2678215618602,
                    "vehicles": 1,
                    "vehicle_id": "00767cd7-c86b-4ec4-8819-7947e7ffc8ec",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979796,
                    "stop_number": 45,
                    "action": "swap_battery",
                    "longitude": -97.7411786244353,
                    "latitude": 30.2673894993243,
                    "vehicles": 1,
                    "vehicle_id": "00454f09-10da-47f2-ba65-6785ab605cf6",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979797,
                    "stop_number": 46,
                    "action": "swap_battery",
                    "longitude": -97.7410903686996,
                    "latitude": 30.267131316585,
                    "vehicles": 1,
                    "vehicle_id": "015f8f01-7149-4623-8818-9e570c829740",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979798,
                    "stop_number": 47,
                    "action": "pickup",
                    "longitude": -97.7412281789698,
                    "latitude": 30.2671345979541,
                    "vehicles": 1,
                    "vehicle_id": "b053b82c-ab3e-4ea7-914a-c648d3c00ecd",
                    "attributes": {
                        "id": "b053b82c-ab3e-4ea7-914a-c648d3c00ecd",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1159465,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979799,
                    "stop_number": 48,
                    "action": "swap_battery",
                    "longitude": -97.7414183287668,
                    "latitude": 30.2667825942925,
                    "vehicles": 1,
                    "vehicle_id": "010bc955-f202-43fe-8cc2-8ccbe7ea6768",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979800,
                    "stop_number": 49,
                    "action": "swap_battery",
                    "longitude": -97.7418713688265,
                    "latitude": 30.2660370791037,
                    "vehicles": 1,
                    "vehicle_id": "012b9407-3158-4b60-be9a-4ec7d8ee88be",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979801,
                    "stop_number": 50,
                    "action": "swap_battery",
                    "longitude": -97.741999810971,
                    "latitude": 30.2659990516207,
                    "vehicles": 1,
                    "vehicle_id": "0199e4c1-fbb3-4be8-b256-7755ee466290",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979802,
                    "stop_number": 51,
                    "action": "swap_battery",
                    "longitude": -97.7423931245679,
                    "latitude": 30.2657100037283,
                    "vehicles": 1,
                    "vehicle_id": "00d37ad7-cf13-464e-94f4-f83be8aa8fc0",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979803,
                    "stop_number": 52,
                    "action": "swap_battery",
                    "longitude": -97.7412315897225,
                    "latitude": 30.2650218439778,
                    "vehicles": 1,
                    "vehicle_id": "00a1d88e-27b0-473f-88d7-4ac7d352cea5",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979804,
                    "stop_number": 53,
                    "action": "swap_battery",
                    "longitude": -97.7413725845905,
                    "latitude": 30.2652593261888,
                    "vehicles": 1,
                    "vehicle_id": "0159c1c0-c871-4eba-b2d0-1ec047c06faf",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979805,
                    "stop_number": 54,
                    "action": "pickup",
                    "longitude": -97.7413648191621,
                    "latitude": 30.2654816302701,
                    "vehicles": 1,
                    "vehicle_id": "541a718d-6927-459c-ae30-e83533b17597",
                    "attributes": {
                        "id": "541a718d-6927-459c-ae30-e83533b17597",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1180144,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979806,
                    "stop_number": 55,
                    "action": "swap_battery",
                    "longitude": -97.7412740449819,
                    "latitude": 30.2662627083395,
                    "vehicles": 1,
                    "vehicle_id": "00665b9c-6459-4a8f-9813-5ca5dff3d441",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979807,
                    "stop_number": 56,
                    "action": "swap_battery",
                    "longitude": -97.7411515618468,
                    "latitude": 30.2659851328718,
                    "vehicles": 1,
                    "vehicle_id": "00358efa-4215-447f-a0e3-b36c950820f7",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979808,
                    "stop_number": 57,
                    "action": "swap_battery",
                    "longitude": -97.740775769359,
                    "latitude": 30.265781474757,
                    "vehicles": 1,
                    "vehicle_id": "0063228a-c8ce-4aa2-9660-57ae8140c88b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979809,
                    "stop_number": 58,
                    "action": "pickup",
                    "longitude": -97.7406012397606,
                    "latitude": 30.2662845848031,
                    "vehicles": 1,
                    "vehicle_id": "3828a3e7-859c-4686-ba6b-f75bd41da559",
                    "attributes": {
                        "id": "3828a3e7-859c-4686-ba6b-f75bd41da559",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1165003,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979810,
                    "stop_number": 59,
                    "action": "swap_battery",
                    "longitude": -97.7405237861469,
                    "latitude": 30.2665896667027,
                    "vehicles": 1,
                    "vehicle_id": "015f0688-9f37-4a14-85f9-324151883807",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979811,
                    "stop_number": 60,
                    "action": "swap_battery",
                    "longitude": -97.7404187644551,
                    "latitude": 30.266913712733,
                    "vehicles": 1,
                    "vehicle_id": "00bf419b-f62a-4bb2-a692-be04ea726f70",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979812,
                    "stop_number": 61,
                    "action": "swap_battery",
                    "longitude": -97.7400100446799,
                    "latitude": 30.2658762811981,
                    "vehicles": 1,
                    "vehicle_id": "00b31be5-e32c-4f8f-8a28-1f3b7ceed600",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979813,
                    "stop_number": 62,
                    "action": "swap_battery",
                    "longitude": -97.7396910469278,
                    "latitude": 30.2660417757387,
                    "vehicles": 1,
                    "vehicle_id": "0112d4b8-fd02-42ad-b521-91ab56cee343",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979814,
                    "stop_number": 63,
                    "action": "swap_battery",
                    "longitude": -97.7394393704348,
                    "latitude": 30.2662073458115,
                    "vehicles": 1,
                    "vehicle_id": "01814b79-f7ab-4ebb-988c-e3902bba9316",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979815,
                    "stop_number": 64,
                    "action": "swap_battery",
                    "longitude": -97.7396393985091,
                    "latitude": 30.2666215514957,
                    "vehicles": 1,
                    "vehicle_id": "00f46bf6-0849-4c9a-b479-f0eecdf6ae16",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979816,
                    "stop_number": 65,
                    "action": "pickup",
                    "longitude": -97.7397551424354,
                    "latitude": 30.2669526981139,
                    "vehicles": 1,
                    "vehicle_id": "a5d87194-0b8d-4e54-a0fa-86f8dec3417d",
                    "attributes": {
                        "id": "a5d87194-0b8d-4e54-a0fa-86f8dec3417d",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1160535,
                        "attributes": {},
                        "raw_priority_score": -0.008153645660058828
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979817,
                    "stop_number": 66,
                    "action": "pickup",
                    "longitude": -97.7391013355473,
                    "latitude": 30.2671939375951,
                    "vehicles": 1,
                    "vehicle_id": "54527790-91c6-4a55-ac1e-5dd928eb13c9",
                    "attributes": {
                        "id": "54527790-91c6-4a55-ac1e-5dd928eb13c9",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 901035,
                        "attributes": {},
                        "raw_priority_score": -0.023471911965316394
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979818,
                    "stop_number": 67,
                    "action": "pickup",
                    "longitude": -97.7393357359813,
                    "latitude": 30.2675265890394,
                    "vehicles": 1,
                    "vehicle_id": "88747f64-9800-49fd-8474-dfc713182e2b",
                    "attributes": {
                        "id": "88747f64-9800-49fd-8474-dfc713182e2b",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 914510,
                        "attributes": {},
                        "raw_priority_score": -0.023471911965316394
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979819,
                    "stop_number": 68,
                    "action": "swap_battery",
                    "longitude": -97.7387319956827,
                    "latitude": 30.2688956357728,
                    "vehicles": 1,
                    "vehicle_id": "01049533-d79d-4668-b4f9-9ad0af6004c0",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979820,
                    "stop_number": 69,
                    "action": "swap_battery",
                    "longitude": -97.7380692803238,
                    "latitude": 30.2683125449721,
                    "vehicles": 1,
                    "vehicle_id": "011b0cd2-95ee-4fb2-a2c9-761d4ebfacde",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979821,
                    "stop_number": 70,
                    "action": "swap_battery",
                    "longitude": -97.7376688590706,
                    "latitude": 30.2686237667836,
                    "vehicles": 1,
                    "vehicle_id": "016894a7-691e-4914-85ec-41b57fc59854",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979822,
                    "stop_number": 71,
                    "action": "dropoff",
                    "longitude": -97.7330484975745,
                    "latitude": 30.28546138401646,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "75",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.456584710587776
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979823,
                    "stop_number": 72,
                    "action": "swap_battery",
                    "longitude": -97.728925254635,
                    "latitude": 30.2901329408173,
                    "vehicles": 1,
                    "vehicle_id": "00f98303-e32f-4ab2-a4b2-09730259095e",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979824,
                    "stop_number": 73,
                    "action": "swap_battery",
                    "longitude": -97.7395877330361,
                    "latitude": 30.2882201404177,
                    "vehicles": 1,
                    "vehicle_id": "0029590d-7d92-4edf-a9d2-56d1dd015bde",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979825,
                    "stop_number": 74,
                    "action": "swap_battery",
                    "longitude": -97.7394742543885,
                    "latitude": 30.2878234771151,
                    "vehicles": 1,
                    "vehicle_id": "01530ba9-a9ae-4b07-af63-affc999c45fd",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979826,
                    "stop_number": 75,
                    "action": "pickup",
                    "longitude": -97.7398625303516,
                    "latitude": 30.2875983763322,
                    "vehicles": 1,
                    "vehicle_id": "d91bfa26-6dae-4b92-8ad3-35e3d1a6a8eb",
                    "attributes": {
                        "id": "d91bfa26-6dae-4b92-8ad3-35e3d1a6a8eb",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 936703,
                        "attributes": {},
                        "raw_priority_score": -0.022527004563016817
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979827,
                    "stop_number": 76,
                    "action": "pickup",
                    "longitude": -97.7418087210724,
                    "latitude": 30.2875879733036,
                    "vehicles": 1,
                    "vehicle_id": "88093b18-1c28-482f-9ae3-d9e55fa93ba0",
                    "attributes": {
                        "id": "88093b18-1c28-482f-9ae3-d9e55fa93ba0",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 956102,
                        "attributes": {},
                        "raw_priority_score": -0.022527004563016817
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979828,
                    "stop_number": 77,
                    "action": "swap_battery",
                    "longitude": -97.7419785639248,
                    "latitude": 30.2877892983113,
                    "vehicles": 1,
                    "vehicle_id": "018bb521-41c5-484f-80fd-d2801e062329",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979829,
                    "stop_number": 78,
                    "action": "pickup",
                    "longitude": -97.7423225021949,
                    "latitude": 30.2873254788587,
                    "vehicles": 1,
                    "vehicle_id": "efcda6de-8e52-4f3f-b478-1ae9981863ad",
                    "attributes": {
                        "id": "efcda6de-8e52-4f3f-b478-1ae9981863ad",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 959352,
                        "attributes": {},
                        "raw_priority_score": -0.022527004563016817
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979830,
                    "stop_number": 79,
                    "action": "swap_battery",
                    "longitude": -97.7421965639218,
                    "latitude": 30.287122959318,
                    "vehicles": 1,
                    "vehicle_id": "013cf045-0766-4739-ac91-841c461a6e70",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979831,
                    "stop_number": 80,
                    "action": "swap_battery",
                    "longitude": -97.7420316966525,
                    "latitude": 30.2889623600354,
                    "vehicles": 1,
                    "vehicle_id": "018f59f5-d1a7-4708-b18f-881458088d95",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979832,
                    "stop_number": 81,
                    "action": "swap_battery",
                    "longitude": -97.7428563940252,
                    "latitude": 30.2890118918794,
                    "vehicles": 1,
                    "vehicle_id": "00d57be0-8fa4-410a-96c8-2ca7e57cec22",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979833,
                    "stop_number": 82,
                    "action": "swap_battery",
                    "longitude": -97.7430452825588,
                    "latitude": 30.2890321884212,
                    "vehicles": 1,
                    "vehicle_id": "008f5dde-8905-43bf-8103-a4f05d873c27",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979834,
                    "stop_number": 83,
                    "action": "swap_battery",
                    "longitude": -97.743544526197,
                    "latitude": 30.2894496297927,
                    "vehicles": 1,
                    "vehicle_id": "0044c0c2-0264-4558-986a-f5dcb2b379be",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979835,
                    "stop_number": 84,
                    "action": "swap_battery",
                    "longitude": -97.7443591254621,
                    "latitude": 30.2887231741184,
                    "vehicles": 1,
                    "vehicle_id": "016c7c0f-cb9b-440a-8762-550d73072f68",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979836,
                    "stop_number": 85,
                    "action": "swap_battery",
                    "longitude": -97.7429082107626,
                    "latitude": 30.288188753049,
                    "vehicles": 1,
                    "vehicle_id": "0061ba68-83e0-4061-b21a-d64a983a2f0d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979837,
                    "stop_number": 86,
                    "action": "swap_battery",
                    "longitude": -97.7432723814932,
                    "latitude": 30.2873104154473,
                    "vehicles": 1,
                    "vehicle_id": "007713fd-d1c8-41fb-a532-0c89da5df305",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979838,
                    "stop_number": 87,
                    "action": "swap_battery",
                    "longitude": -97.7369607461637,
                    "latitude": 30.268628013593,
                    "vehicles": 1,
                    "vehicle_id": "00ffb75e-d664-442c-905a-0583f17c19a3",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979839,
                    "stop_number": 88,
                    "action": "swap_battery",
                    "longitude": -97.7370048450918,
                    "latitude": 30.267760921467,
                    "vehicles": 1,
                    "vehicle_id": "01313b3c-68e6-4125-940c-c3ef4cd22092",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979840,
                    "stop_number": 89,
                    "action": "swap_battery",
                    "longitude": -97.7373350528711,
                    "latitude": 30.2660562998569,
                    "vehicles": 1,
                    "vehicle_id": "018d2d0c-8f99-4543-ad5e-60f3c0b25cdd",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979841,
                    "stop_number": 90,
                    "action": "swap_battery",
                    "longitude": -97.7365822400421,
                    "latitude": 30.2663077113838,
                    "vehicles": 1,
                    "vehicle_id": "00248147-3b10-4881-89b3-27c5b7b0d4bc",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979842,
                    "stop_number": 91,
                    "action": "swap_battery",
                    "longitude": -97.7374353258401,
                    "latitude": 30.2656010724314,
                    "vehicles": 1,
                    "vehicle_id": "0153cf43-8bd2-4458-b308-b99577723542",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979843,
                    "stop_number": 92,
                    "action": "swap_battery",
                    "longitude": -97.7373255095007,
                    "latitude": 30.2653935471885,
                    "vehicles": 1,
                    "vehicle_id": "0015adf0-de17-4cbf-af71-05458f28759b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979844,
                    "stop_number": 93,
                    "action": "pickup",
                    "longitude": -97.7367992838242,
                    "latitude": 30.2655758617153,
                    "vehicles": 1,
                    "vehicle_id": "cc53bebd-d94e-47d3-a768-5ebdaa35e0ac",
                    "attributes": {
                        "id": "cc53bebd-d94e-47d3-a768-5ebdaa35e0ac",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 814102,
                        "attributes": {},
                        "raw_priority_score": -0.04389452494797297
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979845,
                    "stop_number": 94,
                    "action": "swap_battery",
                    "longitude": -97.7387345180219,
                    "latitude": 30.2626289128513,
                    "vehicles": 1,
                    "vehicle_id": "00066528-4d85-4cc8-bacf-a904f3ec96d8",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979846,
                    "stop_number": 95,
                    "action": "pickup",
                    "longitude": -97.7386334355045,
                    "latitude": 30.2625260466355,
                    "vehicles": 1,
                    "vehicle_id": "5cdfa1a2-c69d-4799-b39e-77907565f91f",
                    "attributes": {
                        "id": "5cdfa1a2-c69d-4799-b39e-77907565f91f",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 912476,
                        "attributes": {},
                        "raw_priority_score": -0.023232060058944626
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979847,
                    "stop_number": 96,
                    "action": "swap_battery",
                    "longitude": -97.7374731622995,
                    "latitude": 30.2624191149831,
                    "vehicles": 1,
                    "vehicle_id": "00793f9d-9503-40d3-9d1f-4b466114e12d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979848,
                    "stop_number": 97,
                    "action": "swap_battery",
                    "longitude": -97.7375544377729,
                    "latitude": 30.2622171309549,
                    "vehicles": 1,
                    "vehicle_id": "00e8a650-8b7c-4ad8-a42b-b05e38d23e2a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979849,
                    "stop_number": 98,
                    "action": "swap_battery",
                    "longitude": -97.7381460510623,
                    "latitude": 30.262174851704,
                    "vehicles": 1,
                    "vehicle_id": "00eb8a5b-5174-426b-8483-d5ac33cd4a4b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979850,
                    "stop_number": 99,
                    "action": "swap_battery",
                    "longitude": -97.7381955437724,
                    "latitude": 30.2621008672138,
                    "vehicles": 1,
                    "vehicle_id": "0060e6da-ea30-4402-96f7-facda1e8a4a3",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979851,
                    "stop_number": 100,
                    "action": "swap_battery",
                    "longitude": -97.7386272860736,
                    "latitude": 30.2611885179609,
                    "vehicles": 1,
                    "vehicle_id": "015c085b-6292-4754-b853-e46bb77b23b0",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979852,
                    "stop_number": 101,
                    "action": "swap_battery",
                    "longitude": -97.7372429425449,
                    "latitude": 30.2608934284604,
                    "vehicles": 1,
                    "vehicle_id": "0037d6ab-f4eb-4e5c-940f-ab91890dcde6",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979853,
                    "stop_number": 102,
                    "action": "swap_battery",
                    "longitude": -97.7368054993852,
                    "latitude": 30.2605694106984,
                    "vehicles": 1,
                    "vehicle_id": "00758700-caf2-4d67-a4cd-fd6bda409d7d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979854,
                    "stop_number": 103,
                    "action": "swap_battery",
                    "longitude": -97.7373297931093,
                    "latitude": 30.2600452600606,
                    "vehicles": 1,
                    "vehicle_id": "0035f47e-2ed7-4e3d-8933-d128077efd7a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979855,
                    "stop_number": 104,
                    "action": "swap_battery",
                    "longitude": -97.7382305751927,
                    "latitude": 30.2600787646393,
                    "vehicles": 1,
                    "vehicle_id": "018c38c2-7273-4712-aa03-60c44895ac72",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979856,
                    "stop_number": 105,
                    "action": "pickup",
                    "longitude": -97.7392952467056,
                    "latitude": 30.2611026315443,
                    "vehicles": 1,
                    "vehicle_id": "b7639283-1591-4488-84be-4e973a5074c7",
                    "attributes": {
                        "id": "b7639283-1591-4488-84be-4e973a5074c7",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 916214,
                        "attributes": {},
                        "raw_priority_score": -0.023232060058944626
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979857,
                    "stop_number": 106,
                    "action": "swap_battery",
                    "longitude": -97.7396767164716,
                    "latitude": 30.2609467118432,
                    "vehicles": 1,
                    "vehicle_id": "006c068f-c0e8-4f53-8aef-d0e621bc80c8",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979858,
                    "stop_number": 107,
                    "action": "swap_battery",
                    "longitude": -97.747233934333,
                    "latitude": 30.2592053936696,
                    "vehicles": 1,
                    "vehicle_id": "015550ed-c58f-4bc4-a3da-d5e68b4e3c5f",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979859,
                    "stop_number": 108,
                    "action": "swap_battery",
                    "longitude": -97.7522171891631,
                    "latitude": 30.2654349876748,
                    "vehicles": 1,
                    "vehicle_id": "00c9ff23-b270-42fc-88f9-d1bf611c95eb",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979860,
                    "stop_number": 109,
                    "action": "swap_battery",
                    "longitude": -97.7530692106463,
                    "latitude": 30.2658145296696,
                    "vehicles": 1,
                    "vehicle_id": "00197264-a88c-4c8f-9f19-efe6c2c25dfb",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979861,
                    "stop_number": 110,
                    "action": "dropoff",
                    "longitude": -97.76996134866405,
                    "latitude": 30.2687142508626,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "848",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.709714245844225
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979862,
                    "stop_number": 111,
                    "action": "dropoff",
                    "longitude": -97.76516426710312,
                    "latitude": 30.262258821230393,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "589",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.060466037823062
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979863,
                    "stop_number": 112,
                    "action": "swap_battery",
                    "longitude": -97.7688997012889,
                    "latitude": 30.2483230410747,
                    "vehicles": 1,
                    "vehicle_id": "014af189-952a-45d7-8163-5171532ba385",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979864,
                    "stop_number": 113,
                    "action": "dropoff",
                    "longitude": -97.76563267169553,
                    "latitude": 30.24678563914098,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "362",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.863064798344567
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979865,
                    "stop_number": 114,
                    "action": "dropoff",
                    "longitude": -97.76323467068623,
                    "latitude": 30.24355779996019,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "808",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 7.9034354416435235
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979866,
                    "stop_number": 115,
                    "action": "dropoff",
                    "longitude": -97.77578539478635,
                    "latitude": 30.234282368341713,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "997",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.05786112685746
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979867,
                    "stop_number": 116,
                    "action": "swap_battery",
                    "longitude": -97.7847082245107,
                    "latitude": 30.2199215374224,
                    "vehicles": 1,
                    "vehicle_id": "017a55d8-f721-4471-8c7a-23898f5cf65b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979868,
                    "stop_number": 117,
                    "action": "dropoff",
                    "longitude": -97.7935456788064,
                    "latitude": 30.203838705200223,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1093",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.536001421754918
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979869,
                    "stop_number": 118,
                    "action": "dropoff",
                    "longitude": -97.77140776395284,
                    "latitude": 30.200206560425222,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1698",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 6.727391884156532
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979870,
                    "stop_number": 119,
                    "action": "swap_battery",
                    "longitude": -97.7687735608232,
                    "latitude": 30.2222973628331,
                    "vehicles": 1,
                    "vehicle_id": "0048136b-5815-4a09-9c66-c1dd03167671",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979871,
                    "stop_number": 120,
                    "action": "dropoff",
                    "longitude": -97.76610095378942,
                    "latitude": 30.23131162914044,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "652",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.372182195151254
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979872,
                    "stop_number": 121,
                    "action": "dropoff",
                    "longitude": -97.75867375530628,
                    "latitude": 30.229365005482567,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "431",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.456644326208334
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979873,
                    "stop_number": 122,
                    "action": "swap_battery",
                    "longitude": -97.7553402057319,
                    "latitude": 30.2294182881211,
                    "vehicles": 1,
                    "vehicle_id": "0125d5d5-53a7-46af-abfd-b16f30e637d3",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979874,
                    "stop_number": 123,
                    "action": "dropoff",
                    "longitude": -97.75402022123136,
                    "latitude": 30.225112279803795,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "861",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 7.769633053969301
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979875,
                    "stop_number": 124,
                    "action": "dropoff",
                    "longitude": -97.75298622540697,
                    "latitude": 30.23177328803837,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1410",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.767914438787557
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979876,
                    "stop_number": 125,
                    "action": "swap_battery",
                    "longitude": -97.717876209759,
                    "latitude": 30.2344759528001,
                    "vehicles": 1,
                    "vehicle_id": "011f2378-c3dc-45d5-a986-1b06362a992a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979877,
                    "stop_number": 126,
                    "action": "swap_battery",
                    "longitude": -97.7166998796169,
                    "latitude": 30.2355306637276,
                    "vehicles": 1,
                    "vehicle_id": "01087207-3ba7-4270-a90d-537ae55ec9bc",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979878,
                    "stop_number": 127,
                    "action": "swap_battery",
                    "longitude": -97.7109028798826,
                    "latitude": 30.2570204171565,
                    "vehicles": 1,
                    "vehicle_id": "0063d0e5-129f-4dfe-9fa2-a23087a90f73",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979879,
                    "stop_number": 128,
                    "action": "dropoff",
                    "longitude": -97.69614835058245,
                    "latitude": 30.26797816045214,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1022",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.31962683324673
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979880,
                    "stop_number": 129,
                    "action": "swap_battery",
                    "longitude": -97.6787228135664,
                    "latitude": 30.2644303061873,
                    "vehicles": 1,
                    "vehicle_id": "007f82b1-c032-4eb1-bcd3-94d39a91955c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979881,
                    "stop_number": 130,
                    "action": "swap_battery",
                    "longitude": -97.6820616368228,
                    "latitude": 30.2679514251547,
                    "vehicles": 1,
                    "vehicle_id": "01175229-2609-4ba3-9d4a-02fbb345df9c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979882,
                    "stop_number": 131,
                    "action": "dropoff",
                    "longitude": -97.72547910724636,
                    "latitude": 30.28130962883974,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "428",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.877227334749477
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979883,
                    "stop_number": 132,
                    "action": "dropoff",
                    "longitude": -97.72999251280528,
                    "latitude": 30.283360168203995,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "245",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.065498946441949
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979884,
                    "stop_number": 133,
                    "action": "dropoff",
                    "longitude": -97.73342554886842,
                    "latitude": 30.279929009815863,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "126",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.425611864811799
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979885,
                    "stop_number": 134,
                    "action": "swap_battery",
                    "longitude": -97.737608943441,
                    "latitude": 30.2795737607174,
                    "vehicles": 1,
                    "vehicle_id": "00b5b75f-f52b-4a24-8258-3c9e2c9a6a86",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979886,
                    "stop_number": 135,
                    "action": "swap_battery",
                    "longitude": -97.7374599980004,
                    "latitude": 30.2826348233098,
                    "vehicles": 1,
                    "vehicle_id": "00a514c1-d0b3-4b3b-bd03-35de9834aa61",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979887,
                    "stop_number": 136,
                    "action": "swap_battery",
                    "longitude": -97.7382820696184,
                    "latitude": 30.2832248185703,
                    "vehicles": 1,
                    "vehicle_id": "00cbe4db-9fa7-4a10-ad5b-3eb571dc9755",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979888,
                    "stop_number": 137,
                    "action": "swap_battery",
                    "longitude": -97.7396515893946,
                    "latitude": 30.283518804767,
                    "vehicles": 1,
                    "vehicle_id": "005fb591-8e6d-4254-8605-c816888ae075",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979889,
                    "stop_number": 138,
                    "action": "swap_battery",
                    "longitude": -97.7440431675754,
                    "latitude": 30.2813510902679,
                    "vehicles": 1,
                    "vehicle_id": "00920ae3-973a-4474-8cb0-88e4ba63ce1d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979890,
                    "stop_number": 139,
                    "action": "pickup",
                    "longitude": -97.7458826191791,
                    "latitude": 30.2843293084814,
                    "vehicles": 1,
                    "vehicle_id": "3940d0d0-e51e-444d-8347-5337e3bc0251",
                    "attributes": {
                        "id": "3940d0d0-e51e-444d-8347-5337e3bc0251",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 556085,
                        "attributes": {},
                        "raw_priority_score": -0.05744253697412205
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979891,
                    "stop_number": 140,
                    "action": "swap_battery",
                    "longitude": -97.7463962462836,
                    "latitude": 30.2846406639884,
                    "vehicles": 1,
                    "vehicle_id": "00879e26-a7e7-4602-b62c-391be0c2e54a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979892,
                    "stop_number": 141,
                    "action": "swap_battery",
                    "longitude": -97.7459190931678,
                    "latitude": 30.2857085176978,
                    "vehicles": 1,
                    "vehicle_id": "0083a14a-4735-4c1c-9504-0412e8b9ac5c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979893,
                    "stop_number": 142,
                    "action": "swap_battery",
                    "longitude": -97.7463643506101,
                    "latitude": 30.2860364232358,
                    "vehicles": 1,
                    "vehicle_id": "00a31de0-efbf-4cf3-b46f-679f9d84c24a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979894,
                    "stop_number": 143,
                    "action": "pickup",
                    "longitude": -97.7479142201987,
                    "latitude": 30.2851979311399,
                    "vehicles": 1,
                    "vehicle_id": "0fa66c60-9d83-4994-850a-b342935250ea",
                    "attributes": {
                        "id": "0fa66c60-9d83-4994-850a-b342935250ea",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 492379,
                        "attributes": {},
                        "raw_priority_score": -0.034312170653720386
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979895,
                    "stop_number": 144,
                    "action": "swap_battery",
                    "longitude": -97.7494893117016,
                    "latitude": 30.2863921922231,
                    "vehicles": 1,
                    "vehicle_id": "0111f9b7-4afd-4b58-9e63-6c26dda0e81c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979896,
                    "stop_number": 145,
                    "action": "swap_battery",
                    "longitude": -97.7469872055801,
                    "latitude": 30.2887715904798,
                    "vehicles": 1,
                    "vehicle_id": "006a780e-5f58-41eb-b883-8e0084b2fc7b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979897,
                    "stop_number": 146,
                    "action": "swap_battery",
                    "longitude": -97.7461543409102,
                    "latitude": 30.2908706663895,
                    "vehicles": 1,
                    "vehicle_id": "016a58dd-4159-4934-8bba-1950510788ce",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979898,
                    "stop_number": 147,
                    "action": "pickup",
                    "longitude": -97.7457396390723,
                    "latitude": 30.2908008861835,
                    "vehicles": 1,
                    "vehicle_id": "5c990bcc-6802-43d0-9197-20aa6607c081",
                    "attributes": {
                        "id": "5c990bcc-6802-43d0-9197-20aa6607c081",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 400875,
                        "attributes": {},
                        "raw_priority_score": -0.06996749087556964
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979899,
                    "stop_number": 148,
                    "action": "swap_battery",
                    "longitude": -97.7417716487774,
                    "latitude": 30.292143763464,
                    "vehicles": 1,
                    "vehicle_id": "001302a8-573f-4305-98e2-2f719eb0d840",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979900,
                    "stop_number": 149,
                    "action": "swap_battery",
                    "longitude": -97.7430148640404,
                    "latitude": 30.2935913113498,
                    "vehicles": 1,
                    "vehicle_id": "0168c541-7d8f-4515-ba83-3dc69adb92b9",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979901,
                    "stop_number": 150,
                    "action": "pickup",
                    "longitude": -97.744273136906,
                    "latitude": 30.2964652921947,
                    "vehicles": 1,
                    "vehicle_id": "fdc70148-d48d-436e-9ef9-07320d0b3931",
                    "attributes": {
                        "id": "fdc70148-d48d-436e-9ef9-07320d0b3931",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 987161,
                        "attributes": {},
                        "raw_priority_score": -0.004910623025352834
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979902,
                    "stop_number": 151,
                    "action": "dropoff",
                    "longitude": -97.74898922073905,
                    "latitude": 30.294839819568196,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1169",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 7.881369130180246
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979903,
                    "stop_number": 152,
                    "action": "dropoff",
                    "longitude": -97.71818147901199,
                    "latitude": 30.315779334032054,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "817",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.16824153577545
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979904,
                    "stop_number": 153,
                    "action": "swap_battery",
                    "longitude": -97.7111743883492,
                    "latitude": 30.3415122099855,
                    "vehicles": 1,
                    "vehicle_id": "01051f81-ad41-4f35-a689-1aaf71015a3f",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                }
            ],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Van 1",
                "attributes": {}
            }
        },
        {
            "initial_vehicles": 20,
            "stops": [
                {
                    "id": 2979905,
                    "stop_number": 1,
                    "action": "dropoff",
                    "longitude": -97.7685084383067,
                    "latitude": 30.30298764949062,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1198",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 19.4490016395539
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979906,
                    "stop_number": 2,
                    "action": "dropoff",
                    "longitude": -97.76785007220877,
                    "latitude": 30.304114607274734,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1266",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 5,
                        "raw_priority_score": 19.4490016395539
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979907,
                    "stop_number": 3,
                    "action": "dropoff",
                    "longitude": -97.73134831527577,
                    "latitude": 30.32746323711654,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1017",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.837897224908374
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979908,
                    "stop_number": 4,
                    "action": "dropoff",
                    "longitude": -97.72815063130835,
                    "latitude": 30.32315948196871,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "697",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.396651143790223
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979909,
                    "stop_number": 5,
                    "action": "dropoff",
                    "longitude": -97.7127707981144,
                    "latitude": 30.322588544112605,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "874",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 7.050458290104871
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979910,
                    "stop_number": 6,
                    "action": "dropoff",
                    "longitude": -97.7220811095198,
                    "latitude": 30.331095456420865,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1002",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.690021986672946
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979911,
                    "stop_number": 7,
                    "action": "swap_battery",
                    "longitude": -97.7240937907857,
                    "latitude": 30.3332812377628,
                    "vehicles": 1,
                    "vehicle_id": "008add05-adab-4391-999a-6d81117d51d9",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 2979912,
                    "stop_number": 8,
                    "action": "dropoff",
                    "longitude": -97.71162451817297,
                    "latitude": 30.373390932488732,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "1815",
                        "name": null,
                        "max_vehicles": 5,
                        "total_vehicles": 2,
                        "raw_priority_score": 8.121618153105373
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                }
            ],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Van 2",
                "attributes": {}
            }
        },
        {
            "initial_vehicles": 0,
            "stops": [],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Van 3",
                "attributes": {}
            }
        }
    ]
  },
  "55866": {
    "id": 55866,
    "name": "Morning Deployment for Oct 08 2021",
    "market": "austin",
    "messages": [],
    "status": "complete",
    "created_at": "2021-10-08T09:04:05.020360Z",
    "solver_completed_at": "2021-10-08T09:11:16.804061Z",
    "trips": [
        {
            "initial_vehicles": 8,
            "stops": [
                {
                    "id": 3023120,
                    "stop_number": 1,
                    "action": "swap_battery",
                    "longitude": -97.7405802345021,
                    "latitude": 30.2563349024387,
                    "vehicles": 1,
                    "vehicle_id": "01049533-d79d-4668-b4f9-9ad0af6004c0",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023121,
                    "stop_number": 2,
                    "action": "pickup",
                    "longitude": -97.7401233515796,
                    "latitude": 30.2607777181685,
                    "vehicles": 1,
                    "vehicle_id": "246d0aa6-0a1c-4c13-ae59-6224568af8d0",
                    "attributes": {
                        "id": "246d0aa6-0a1c-4c13-ae59-6224568af8d0",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 745825,
                        "attributes": {},
                        "raw_priority_score": -0.053742200863780454
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023122,
                    "stop_number": 3,
                    "action": "pickup",
                    "longitude": -97.7392612228222,
                    "latitude": 30.2628500718001,
                    "vehicles": 1,
                    "vehicle_id": "8bfd94f8-59eb-416b-a52d-cea27a2fed0f",
                    "attributes": {
                        "id": "8bfd94f8-59eb-416b-a52d-cea27a2fed0f",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 737921,
                        "attributes": {},
                        "raw_priority_score": -0.07887215298978845
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023123,
                    "stop_number": 4,
                    "action": "pickup",
                    "longitude": -97.7411176616197,
                    "latitude": 30.2648916371049,
                    "vehicles": 1,
                    "vehicle_id": "f6fa488a-539f-4158-8a61-8325fbb8352a",
                    "attributes": {
                        "id": "f6fa488a-539f-4158-8a61-8325fbb8352a",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1176339,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023124,
                    "stop_number": 5,
                    "action": "swap_battery",
                    "longitude": -97.7413725845905,
                    "latitude": 30.2652593261888,
                    "vehicles": 1,
                    "vehicle_id": "0159c1c0-c871-4eba-b2d0-1ec047c06faf",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023125,
                    "stop_number": 6,
                    "action": "swap_battery",
                    "longitude": -97.7421712921624,
                    "latitude": 30.2648815690143,
                    "vehicles": 1,
                    "vehicle_id": "01740d31-b93d-44ef-8b54-5717c73a703e",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023126,
                    "stop_number": 7,
                    "action": "swap_battery",
                    "longitude": -97.7420842476433,
                    "latitude": 30.2654797677511,
                    "vehicles": 1,
                    "vehicle_id": "00248147-3b10-4881-89b3-27c5b7b0d4bc",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023127,
                    "stop_number": 8,
                    "action": "swap_battery",
                    "longitude": -97.7414385776425,
                    "latitude": 30.2655492235694,
                    "vehicles": 1,
                    "vehicle_id": "00206038-8ccb-45d1-9f26-5dbcc787ee75",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023128,
                    "stop_number": 9,
                    "action": "swap_battery",
                    "longitude": -97.7411515618468,
                    "latitude": 30.2659851328718,
                    "vehicles": 1,
                    "vehicle_id": "00358efa-4215-447f-a0e3-b36c950820f7",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023129,
                    "stop_number": 10,
                    "action": "swap_battery",
                    "longitude": -97.740775769359,
                    "latitude": 30.265781474757,
                    "vehicles": 1,
                    "vehicle_id": "0063228a-c8ce-4aa2-9660-57ae8140c88b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023130,
                    "stop_number": 11,
                    "action": "swap_battery",
                    "longitude": -97.7400100446799,
                    "latitude": 30.2658762811981,
                    "vehicles": 1,
                    "vehicle_id": "00b31be5-e32c-4f8f-8a28-1f3b7ceed600",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023131,
                    "stop_number": 12,
                    "action": "swap_battery",
                    "longitude": -97.7396910469278,
                    "latitude": 30.2660417757387,
                    "vehicles": 1,
                    "vehicle_id": "0112d4b8-fd02-42ad-b521-91ab56cee343",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023132,
                    "stop_number": 13,
                    "action": "swap_battery",
                    "longitude": -97.7395905701155,
                    "latitude": 30.2669500171919,
                    "vehicles": 1,
                    "vehicle_id": "0168c541-7d8f-4515-ba83-3dc69adb92b9",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023133,
                    "stop_number": 14,
                    "action": "swap_battery",
                    "longitude": -97.7404187644551,
                    "latitude": 30.266913712733,
                    "vehicles": 1,
                    "vehicle_id": "00bf419b-f62a-4bb2-a692-be04ea726f70",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023134,
                    "stop_number": 15,
                    "action": "pickup",
                    "longitude": -97.7409442039997,
                    "latitude": 30.2671895082966,
                    "vehicles": 1,
                    "vehicle_id": "3f926bda-5b97-4f26-9a5d-91eddbcf4ea2",
                    "attributes": {
                        "id": "3f926bda-5b97-4f26-9a5d-91eddbcf4ea2",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1160015,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023135,
                    "stop_number": 16,
                    "action": "swap_battery",
                    "longitude": -97.7406489704242,
                    "latitude": 30.2674253169951,
                    "vehicles": 1,
                    "vehicle_id": "00a1d88e-27b0-473f-88d7-4ac7d352cea5",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023136,
                    "stop_number": 17,
                    "action": "pickup",
                    "longitude": -97.7401350982114,
                    "latitude": 30.2675208236408,
                    "vehicles": 1,
                    "vehicle_id": "3cb4ce56-1d1f-460f-8ce1-b87979b36b44",
                    "attributes": {
                        "id": "3cb4ce56-1d1f-460f-8ce1-b87979b36b44",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1160672,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023137,
                    "stop_number": 18,
                    "action": "pickup",
                    "longitude": -97.7406178455014,
                    "latitude": 30.2679615289824,
                    "vehicles": 1,
                    "vehicle_id": "5ea20c57-76e1-4da2-9bb0-aa3ba4f37e96",
                    "attributes": {
                        "id": "5ea20c57-76e1-4da2-9bb0-aa3ba4f37e96",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1158925,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023138,
                    "stop_number": 19,
                    "action": "swap_battery",
                    "longitude": -97.7407999369415,
                    "latitude": 30.2678215618602,
                    "vehicles": 1,
                    "vehicle_id": "00767cd7-c86b-4ec4-8819-7947e7ffc8ec",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023139,
                    "stop_number": 20,
                    "action": "pickup",
                    "longitude": -97.7409280155384,
                    "latitude": 30.2678848820256,
                    "vehicles": 1,
                    "vehicle_id": "b2b59be0-d833-40ba-a2bf-80c68159136d",
                    "attributes": {
                        "id": "b2b59be0-d833-40ba-a2bf-80c68159136d",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1160228,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023140,
                    "stop_number": 21,
                    "action": "swap_battery",
                    "longitude": -97.7430485089164,
                    "latitude": 30.2734875727566,
                    "vehicles": 1,
                    "vehicle_id": "0169dbc0-7ac7-4889-806f-a8a8b740c43c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023141,
                    "stop_number": 22,
                    "action": "swap_battery",
                    "longitude": -97.7478651218279,
                    "latitude": 30.2777844900747,
                    "vehicles": 1,
                    "vehicle_id": "006c068f-c0e8-4f53-8aef-d0e621bc80c8",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023142,
                    "stop_number": 23,
                    "action": "pickup",
                    "longitude": -97.7468341637396,
                    "latitude": 30.2835488951439,
                    "vehicles": 1,
                    "vehicle_id": "1814c37c-ae1a-4888-8826-5d60182c00b3",
                    "attributes": {
                        "id": "1814c37c-ae1a-4888-8826-5d60182c00b3",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 616922,
                        "attributes": {},
                        "raw_priority_score": -0.09065036602260079
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023143,
                    "stop_number": 24,
                    "action": "pickup",
                    "longitude": -97.7464118563884,
                    "latitude": 30.2841407916839,
                    "vehicles": 1,
                    "vehicle_id": "6a42a5b6-f62d-4dd3-a32c-fdc27b21c18a",
                    "attributes": {
                        "id": "6a42a5b6-f62d-4dd3-a32c-fdc27b21c18a",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 539920,
                        "attributes": {},
                        "raw_priority_score": -0.09065036602260079
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023144,
                    "stop_number": 25,
                    "action": "swap_battery",
                    "longitude": -97.7463962462836,
                    "latitude": 30.2846406639884,
                    "vehicles": 1,
                    "vehicle_id": "00879e26-a7e7-4602-b62c-391be0c2e54a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023145,
                    "stop_number": 26,
                    "action": "swap_battery",
                    "longitude": -97.7494893117016,
                    "latitude": 30.2863921922231,
                    "vehicles": 1,
                    "vehicle_id": "0111f9b7-4afd-4b58-9e63-6c26dda0e81c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023146,
                    "stop_number": 27,
                    "action": "pickup",
                    "longitude": -97.7466715704715,
                    "latitude": 30.2857614338386,
                    "vehicles": 1,
                    "vehicle_id": "244eb5b7-ea8e-4be4-8346-12abce5ed417",
                    "attributes": {
                        "id": "244eb5b7-ea8e-4be4-8346-12abce5ed417",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 479410,
                        "attributes": {},
                        "raw_priority_score": -0.03529818590322975
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023147,
                    "stop_number": 28,
                    "action": "pickup",
                    "longitude": -97.745483562504,
                    "latitude": 30.2844491045992,
                    "vehicles": 1,
                    "vehicle_id": "6fb72c77-d131-4f71-b082-73680b91bc95",
                    "attributes": {
                        "id": "6fb72c77-d131-4f71-b082-73680b91bc95",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 623500,
                        "attributes": {},
                        "raw_priority_score": -0.09065036602260079
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023148,
                    "stop_number": 29,
                    "action": "swap_battery",
                    "longitude": -97.7449619855501,
                    "latitude": 30.2844299766252,
                    "vehicles": 1,
                    "vehicle_id": "016a58dd-4159-4934-8bba-1950510788ce",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023149,
                    "stop_number": 30,
                    "action": "swap_battery",
                    "longitude": -97.7447652505923,
                    "latitude": 30.285997945502,
                    "vehicles": 1,
                    "vehicle_id": "00492db8-264c-4537-bea7-b0f41b08c73d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023150,
                    "stop_number": 31,
                    "action": "swap_battery",
                    "longitude": -97.7429082107626,
                    "latitude": 30.288188753049,
                    "vehicles": 1,
                    "vehicle_id": "0061ba68-83e0-4061-b21a-d64a983a2f0d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023151,
                    "stop_number": 32,
                    "action": "swap_battery",
                    "longitude": -97.7443142884991,
                    "latitude": 30.2895497050409,
                    "vehicles": 1,
                    "vehicle_id": "01530ba9-a9ae-4b07-af63-affc999c45fd",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023152,
                    "stop_number": 33,
                    "action": "pickup",
                    "longitude": -97.7436981797261,
                    "latitude": 30.2901677557565,
                    "vehicles": 1,
                    "vehicle_id": "3aef2997-ba6c-432c-9fc5-91995a0cb687",
                    "attributes": {
                        "id": "3aef2997-ba6c-432c-9fc5-91995a0cb687",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 472526,
                        "attributes": {},
                        "raw_priority_score": -0.13324743208067957
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023153,
                    "stop_number": 34,
                    "action": "swap_battery",
                    "longitude": -97.742897361272,
                    "latitude": 30.291573491404,
                    "vehicles": 1,
                    "vehicle_id": "00f98303-e32f-4ab2-a4b2-09730259095e",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023154,
                    "stop_number": 35,
                    "action": "pickup",
                    "longitude": -97.7415178871395,
                    "latitude": 30.2905449638843,
                    "vehicles": 1,
                    "vehicle_id": "6d97ba92-fcf1-4e23-9498-659de104a394",
                    "attributes": {
                        "id": "6d97ba92-fcf1-4e23-9498-659de104a394",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 472677,
                        "attributes": {},
                        "raw_priority_score": -0.21509690320090158
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023155,
                    "stop_number": 36,
                    "action": "swap_battery",
                    "longitude": -97.7418040313384,
                    "latitude": 30.2917838245597,
                    "vehicles": 1,
                    "vehicle_id": "007713fd-d1c8-41fb-a532-0c89da5df305",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023156,
                    "stop_number": 37,
                    "action": "swap_battery",
                    "longitude": -97.7417716487774,
                    "latitude": 30.292143763464,
                    "vehicles": 1,
                    "vehicle_id": "001302a8-573f-4305-98e2-2f719eb0d840",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023157,
                    "stop_number": 38,
                    "action": "pickup",
                    "longitude": -97.741248991383,
                    "latitude": 30.2929749599296,
                    "vehicles": 1,
                    "vehicle_id": "2d5deca3-8c05-4664-bda7-cf7020283206",
                    "attributes": {
                        "id": "2d5deca3-8c05-4664-bda7-cf7020283206",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 473371,
                        "attributes": {},
                        "raw_priority_score": -0.21509690320090158
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023158,
                    "stop_number": 39,
                    "action": "dropoff",
                    "longitude": -97.73276147,
                    "latitude": 30.31527345,
                    "vehicles": 8,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "496",
                        "name": "4700 W Guadalupe St Suite A5",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 8,
                        "raw_priority_score": 34.61093005249131,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.31527345+-97.73276147"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023159,
                    "stop_number": 40,
                    "action": "swap_battery",
                    "longitude": -97.7284577623754,
                    "latitude": 30.2902859944676,
                    "vehicles": 1,
                    "vehicle_id": "00b5b75f-f52b-4a24-8258-3c9e2c9a6a86",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023160,
                    "stop_number": 41,
                    "action": "dropoff",
                    "longitude": -97.72985187,
                    "latitude": 30.28115739,
                    "vehicles": 4,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "271",
                        "name": "2001 Robert Dedman Dr",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 8,
                        "raw_priority_score": 38.422935483642505,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.28115739+-97.72985187"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023161,
                    "stop_number": 42,
                    "action": "dropoff",
                    "longitude": -97.73051035,
                    "latitude": 30.28003061,
                    "vehicles": 8,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "265",
                        "name": "1994-1972 Red River St",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 8,
                        "raw_priority_score": 38.422935483642505,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.28003061+-97.73051035"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023162,
                    "stop_number": 43,
                    "action": "dropoff",
                    "longitude": -97.73036970000001,
                    "latitude": 30.27782781,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "363",
                        "name": "Arno Nowotny Building",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.28081645409111,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.27782781+-97.7303697"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023163,
                    "stop_number": 44,
                    "action": "swap_battery",
                    "longitude": -97.7373005791505,
                    "latitude": 30.269196527219,
                    "vehicles": 1,
                    "vehicle_id": "0037432f-b020-4a41-bec9-3174f5de542b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023164,
                    "stop_number": 45,
                    "action": "swap_battery",
                    "longitude": -97.7369607461637,
                    "latitude": 30.268628013593,
                    "vehicles": 1,
                    "vehicle_id": "00ffb75e-d664-442c-905a-0583f17c19a3",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023165,
                    "stop_number": 46,
                    "action": "swap_battery",
                    "longitude": -97.7369526170608,
                    "latitude": 30.2685621387757,
                    "vehicles": 1,
                    "vehicle_id": "01313b3c-68e6-4125-940c-c3ef4cd22092",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023166,
                    "stop_number": 47,
                    "action": "swap_battery",
                    "longitude": -97.7380692803238,
                    "latitude": 30.2683125449721,
                    "vehicles": 1,
                    "vehicle_id": "011b0cd2-95ee-4fb2-a2c9-761d4ebfacde",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023167,
                    "stop_number": 48,
                    "action": "swap_battery",
                    "longitude": -97.7373255095007,
                    "latitude": 30.2653935471885,
                    "vehicles": 1,
                    "vehicle_id": "0015adf0-de17-4cbf-af71-05458f28759b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023168,
                    "stop_number": 49,
                    "action": "swap_battery",
                    "longitude": -97.7379373296437,
                    "latitude": 30.263560576911,
                    "vehicles": 1,
                    "vehicle_id": "0153cf43-8bd2-4458-b308-b99577723542",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023169,
                    "stop_number": 50,
                    "action": "swap_battery",
                    "longitude": -97.7381460510623,
                    "latitude": 30.262174851704,
                    "vehicles": 1,
                    "vehicle_id": "00eb8a5b-5174-426b-8483-d5ac33cd4a4b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023170,
                    "stop_number": 51,
                    "action": "swap_battery",
                    "longitude": -97.7375544377729,
                    "latitude": 30.2622171309549,
                    "vehicles": 1,
                    "vehicle_id": "00e8a650-8b7c-4ad8-a42b-b05e38d23e2a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023171,
                    "stop_number": 52,
                    "action": "swap_battery",
                    "longitude": -97.7374731622995,
                    "latitude": 30.2624191149831,
                    "vehicles": 1,
                    "vehicle_id": "00793f9d-9503-40d3-9d1f-4b466114e12d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                }
            ],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Dhruv's van",
                "attributes": {}
            }
        },
        {
            "initial_vehicles": 23,
            "stops": [
                {
                    "id": 3023172,
                    "stop_number": 1,
                    "action": "swap_battery",
                    "longitude": -97.7134295856127,
                    "latitude": 30.2363927777441,
                    "vehicles": 1,
                    "vehicle_id": "011f2378-c3dc-45d5-a986-1b06362a992a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023173,
                    "stop_number": 2,
                    "action": "swap_battery",
                    "longitude": -97.7464124383641,
                    "latitude": 30.2521818203248,
                    "vehicles": 1,
                    "vehicle_id": "015550ed-c58f-4bc4-a3da-d5e68b4e3c5f",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023174,
                    "stop_number": 3,
                    "action": "swap_battery",
                    "longitude": -97.7534987543952,
                    "latitude": 30.2532247876372,
                    "vehicles": 1,
                    "vehicle_id": "0063d0e5-129f-4dfe-9fa2-a23087a90f73",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023175,
                    "stop_number": 4,
                    "action": "swap_battery",
                    "longitude": -97.7462497750805,
                    "latitude": 30.2598137810939,
                    "vehicles": 1,
                    "vehicle_id": "0040c93a-10b2-44b0-aadc-d7f99bcf0678",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023176,
                    "stop_number": 5,
                    "action": "swap_battery",
                    "longitude": -97.7456121635169,
                    "latitude": 30.2636320552254,
                    "vehicles": 1,
                    "vehicle_id": "01061e8c-6876-4ffc-8b2d-1376599cd549",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023177,
                    "stop_number": 6,
                    "action": "swap_battery",
                    "longitude": -97.7449807903794,
                    "latitude": 30.2644407001035,
                    "vehicles": 1,
                    "vehicle_id": "00cf16de-03a3-4a5f-bf2e-4078cdf2491a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023178,
                    "stop_number": 7,
                    "action": "pickup",
                    "longitude": -97.744092431855,
                    "latitude": 30.2643128566912,
                    "vehicles": 1,
                    "vehicle_id": "7c2dbbe6-274c-4f93-8bf4-de62343834c9",
                    "attributes": {
                        "id": "7c2dbbe6-274c-4f93-8bf4-de62343834c9",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 969556,
                        "attributes": {},
                        "raw_priority_score": -0.05593106138258008
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023179,
                    "stop_number": 8,
                    "action": "swap_battery",
                    "longitude": -97.7440293652052,
                    "latitude": 30.2651325655353,
                    "vehicles": 1,
                    "vehicle_id": "00197264-a88c-4c8f-9f19-efe6c2c25dfb",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023180,
                    "stop_number": 9,
                    "action": "pickup",
                    "longitude": -97.7438801534327,
                    "latitude": 30.2654578615642,
                    "vehicles": 1,
                    "vehicle_id": "e49d3bb0-ddd6-4ba4-8582-5e14183dc59d",
                    "attributes": {
                        "id": "e49d3bb0-ddd6-4ba4-8582-5e14183dc59d",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 926036,
                        "attributes": {},
                        "raw_priority_score": -0.05593106138258008
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023181,
                    "stop_number": 10,
                    "action": "swap_battery",
                    "longitude": -97.7434393858284,
                    "latitude": 30.265694177325,
                    "vehicles": 1,
                    "vehicle_id": "00de5fe3-23cb-4a38-b091-53a8f399a436",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023182,
                    "stop_number": 11,
                    "action": "pickup",
                    "longitude": -97.7431103394678,
                    "latitude": 30.2661676853137,
                    "vehicles": 1,
                    "vehicle_id": "3d2f9e7f-273e-41f2-81da-52b4a0768054",
                    "attributes": {
                        "id": "3d2f9e7f-273e-41f2-81da-52b4a0768054",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1160509,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023183,
                    "stop_number": 12,
                    "action": "swap_battery",
                    "longitude": -97.7423931245679,
                    "latitude": 30.2657100037283,
                    "vehicles": 1,
                    "vehicle_id": "00d37ad7-cf13-464e-94f4-f83be8aa8fc0",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023184,
                    "stop_number": 13,
                    "action": "pickup",
                    "longitude": -97.7423236196989,
                    "latitude": 30.2660255657991,
                    "vehicles": 1,
                    "vehicle_id": "ea9d4ec6-6ffc-4492-b9c4-7a517ed21f7e",
                    "attributes": {
                        "id": "ea9d4ec6-6ffc-4492-b9c4-7a517ed21f7e",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1160445,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023185,
                    "stop_number": 14,
                    "action": "pickup",
                    "longitude": -97.742126761618,
                    "latitude": 30.2661356869919,
                    "vehicles": 1,
                    "vehicle_id": "ae82f314-fe3b-4860-b372-2066357817df",
                    "attributes": {
                        "id": "ae82f314-fe3b-4860-b372-2066357817df",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1158663,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023186,
                    "stop_number": 15,
                    "action": "swap_battery",
                    "longitude": -97.7420272620622,
                    "latitude": 30.2660116781137,
                    "vehicles": 1,
                    "vehicle_id": "00774896-d93b-40db-bee8-9bdb331b4afd",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023187,
                    "stop_number": 16,
                    "action": "pickup",
                    "longitude": -97.7418068520746,
                    "latitude": 30.2658030661443,
                    "vehicles": 1,
                    "vehicle_id": "e2cf0491-85f3-4fa1-9513-cbec3f8927a2",
                    "attributes": {
                        "id": "e2cf0491-85f3-4fa1-9513-cbec3f8927a2",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1160527,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023188,
                    "stop_number": 17,
                    "action": "swap_battery",
                    "longitude": -97.7418713688265,
                    "latitude": 30.2660370791037,
                    "vehicles": 1,
                    "vehicle_id": "012b9407-3158-4b60-be9a-4ec7d8ee88be",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023189,
                    "stop_number": 18,
                    "action": "swap_battery",
                    "longitude": -97.7418086432416,
                    "latitude": 30.2660579920487,
                    "vehicles": 1,
                    "vehicle_id": "00f46bf6-0849-4c9a-b479-f0eecdf6ae16",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023190,
                    "stop_number": 19,
                    "action": "swap_battery",
                    "longitude": -97.7412740449819,
                    "latitude": 30.2662627083395,
                    "vehicles": 1,
                    "vehicle_id": "00665b9c-6459-4a8f-9813-5ca5dff3d441",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023191,
                    "stop_number": 20,
                    "action": "swap_battery",
                    "longitude": -97.7414183287668,
                    "latitude": 30.2667825942925,
                    "vehicles": 1,
                    "vehicle_id": "010bc955-f202-43fe-8cc2-8ccbe7ea6768",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023192,
                    "stop_number": 21,
                    "action": "swap_battery",
                    "longitude": -97.7410903686996,
                    "latitude": 30.267131316585,
                    "vehicles": 1,
                    "vehicle_id": "015f8f01-7149-4623-8818-9e570c829740",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023193,
                    "stop_number": 22,
                    "action": "swap_battery",
                    "longitude": -97.7411786244353,
                    "latitude": 30.2673894993243,
                    "vehicles": 1,
                    "vehicle_id": "00454f09-10da-47f2-ba65-6785ab605cf6",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023194,
                    "stop_number": 23,
                    "action": "pickup",
                    "longitude": -97.7419828253638,
                    "latitude": 30.2669737520269,
                    "vehicles": 1,
                    "vehicle_id": "77d77e31-96df-4693-9507-8770af4bdceb",
                    "attributes": {
                        "id": "77d77e31-96df-4693-9507-8770af4bdceb",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1161062,
                        "attributes": {},
                        "raw_priority_score": -0.012371240445645526
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023195,
                    "stop_number": 24,
                    "action": "swap_battery",
                    "longitude": -97.7420949403278,
                    "latitude": 30.2670857404681,
                    "vehicles": 1,
                    "vehicle_id": "016894a7-691e-4914-85ec-41b57fc59854",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023196,
                    "stop_number": 25,
                    "action": "swap_battery",
                    "longitude": -97.7430146077849,
                    "latitude": 30.2668366552033,
                    "vehicles": 1,
                    "vehicle_id": "012be275-0b40-4285-aa1e-20b94ebbc0b4",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023197,
                    "stop_number": 26,
                    "action": "swap_battery",
                    "longitude": -97.7426038303991,
                    "latitude": 30.267618816558,
                    "vehicles": 1,
                    "vehicle_id": "007f1fed-0fe6-423f-8ca7-cd67834f20da",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023198,
                    "stop_number": 27,
                    "action": "swap_battery",
                    "longitude": -97.7424443606417,
                    "latitude": 30.267592656091,
                    "vehicles": 1,
                    "vehicle_id": "009dc19d-43f5-4691-9d44-120964233555",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023199,
                    "stop_number": 28,
                    "action": "dropoff",
                    "longitude": -97.72999251,
                    "latitude": 30.28336017,
                    "vehicles": 8,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "245",
                        "name": "707 Clyde Littlefield Dr Gate 4",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 8,
                        "raw_priority_score": 38.31953140771657,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.28336017+-97.72999251"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023200,
                    "stop_number": 29,
                    "action": "dropoff",
                    "longitude": -97.72933402,
                    "latitude": 30.28448693,
                    "vehicles": 8,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "269",
                        "name": "Sid Richardson Hall",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 8,
                        "raw_priority_score": 38.31953140771657,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.28448693+-97.72933402"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023201,
                    "stop_number": 30,
                    "action": "dropoff",
                    "longitude": -97.73290779,
                    "latitude": 30.28325861,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "80",
                        "name": "2139 San Jacinto Blvd",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.25664588559448,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.28325861+-97.73290779"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023202,
                    "stop_number": 31,
                    "action": "swap_battery",
                    "longitude": -97.7359218963968,
                    "latitude": 30.2851701663154,
                    "vehicles": 1,
                    "vehicle_id": "016c7c0f-cb9b-440a-8762-550d73072f68",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023203,
                    "stop_number": 32,
                    "action": "swap_battery",
                    "longitude": -97.7365898374687,
                    "latitude": 30.2858936682918,
                    "vehicles": 1,
                    "vehicle_id": "006a780e-5f58-41eb-b883-8e0084b2fc7b",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023204,
                    "stop_number": 33,
                    "action": "swap_battery",
                    "longitude": -97.7386547278,
                    "latitude": 30.2834040723285,
                    "vehicles": 1,
                    "vehicle_id": "0083a14a-4735-4c1c-9504-0412e8b9ac5c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023205,
                    "stop_number": 34,
                    "action": "swap_battery",
                    "longitude": -97.7382820696184,
                    "latitude": 30.2832248185703,
                    "vehicles": 1,
                    "vehicle_id": "00cbe4db-9fa7-4a10-ad5b-3eb571dc9755",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023206,
                    "stop_number": 35,
                    "action": "swap_battery",
                    "longitude": -97.7381606742559,
                    "latitude": 30.2821383678237,
                    "vehicles": 1,
                    "vehicle_id": "00a31de0-efbf-4cf3-b46f-679f9d84c24a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023207,
                    "stop_number": 36,
                    "action": "swap_battery",
                    "longitude": -97.7514569088374,
                    "latitude": 30.2693425359281,
                    "vehicles": 1,
                    "vehicle_id": "0100a200-4118-4420-9ed6-54d6c66dfa33",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023208,
                    "stop_number": 37,
                    "action": "swap_battery",
                    "longitude": -97.7533561138874,
                    "latitude": 30.2663350676601,
                    "vehicles": 1,
                    "vehicle_id": "00c9ff23-b270-42fc-88f9-d1bf611c95eb",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023209,
                    "stop_number": 38,
                    "action": "dropoff",
                    "longitude": -97.76398923,
                    "latitude": 30.26671616,
                    "vehicles": 3,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "449",
                        "name": "1900 Barton Springs Rd",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 3,
                        "raw_priority_score": 13.593961097794818,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.26671616+-97.76398923"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023210,
                    "stop_number": 39,
                    "action": "dropoff",
                    "longitude": -97.76544689,
                    "latitude": 30.26666494,
                    "vehicles": 5,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "352",
                        "name": "2040 Lou Neff Rd",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 6,
                        "raw_priority_score": 22.869930681365076,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.26666494+-97.76544689"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023211,
                    "stop_number": 40,
                    "action": "dropoff",
                    "longitude": -97.77024418,
                    "latitude": 30.27312033,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "482",
                        "name": "1541 W Cesar Chavez St",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.388964590980322,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.27312033+-97.77024418"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023212,
                    "stop_number": 41,
                    "action": "swap_battery",
                    "longitude": -97.7843581375781,
                    "latitude": 30.2434608365092,
                    "vehicles": 1,
                    "vehicle_id": "014af189-952a-45d7-8163-5171532ba385",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023213,
                    "stop_number": 42,
                    "action": "swap_battery",
                    "longitude": -97.7891128520574,
                    "latitude": 30.2328898836913,
                    "vehicles": 1,
                    "vehicle_id": "0060e6da-ea30-4402-96f7-facda1e8a4a3",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023214,
                    "stop_number": 43,
                    "action": "swap_battery",
                    "longitude": -97.7687735608232,
                    "latitude": 30.2222973628331,
                    "vehicles": 1,
                    "vehicle_id": "0048136b-5815-4a09-9c66-c1dd03167671",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023215,
                    "stop_number": 44,
                    "action": "dropoff",
                    "longitude": -97.75735772,
                    "latitude": 30.23161955,
                    "vehicles": 2,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "486",
                        "name": "3001 South Congress Avenue Building FLEC",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 2,
                        "raw_priority_score": 9.078179334472225,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.23161955+-97.75735772"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023216,
                    "stop_number": 45,
                    "action": "swap_battery",
                    "longitude": -97.7476719718284,
                    "latitude": 30.2349614892806,
                    "vehicles": 1,
                    "vehicle_id": "0125d5d5-53a7-46af-abfd-b16f30e637d3",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023217,
                    "stop_number": 46,
                    "action": "swap_battery",
                    "longitude": -97.7287595113331,
                    "latitude": 30.2316894441085,
                    "vehicles": 1,
                    "vehicle_id": "01087207-3ba7-4270-a90d-537ae55ec9bc",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                }
            ],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Felix's van",
                "attributes": {}
            }
        },
        {
            "initial_vehicles": 15,
            "stops": [
                {
                    "id": 3023218,
                    "stop_number": 1,
                    "action": "swap_battery",
                    "longitude": -97.6787228135664,
                    "latitude": 30.2644303061873,
                    "vehicles": 1,
                    "vehicle_id": "007f82b1-c032-4eb1-bcd3-94d39a91955c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023219,
                    "stop_number": 2,
                    "action": "swap_battery",
                    "longitude": -97.6820616368228,
                    "latitude": 30.2679514251547,
                    "vehicles": 1,
                    "vehicle_id": "01175229-2609-4ba3-9d4a-02fbb345df9c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023220,
                    "stop_number": 3,
                    "action": "swap_battery",
                    "longitude": -97.7245138746861,
                    "latitude": 30.2821406365016,
                    "vehicles": 1,
                    "vehicle_id": "005fb591-8e6d-4254-8605-c816888ae075",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023221,
                    "stop_number": 4,
                    "action": "swap_battery",
                    "longitude": -97.7379401862604,
                    "latitude": 30.2863022216807,
                    "vehicles": 1,
                    "vehicle_id": "00d57be0-8fa4-410a-96c8-2ca7e57cec22",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023222,
                    "stop_number": 5,
                    "action": "pickup",
                    "longitude": -97.7416249403131,
                    "latitude": 30.2881028906368,
                    "vehicles": 1,
                    "vehicle_id": "1ba9180c-51e0-46d5-80b6-9de30a4dfa70",
                    "attributes": {
                        "id": "1ba9180c-51e0-46d5-80b6-9de30a4dfa70",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 977094,
                        "attributes": {},
                        "raw_priority_score": -0.031891462531348225
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023223,
                    "stop_number": 6,
                    "action": "pickup",
                    "longitude": -97.7429836254674,
                    "latitude": 30.2891750675581,
                    "vehicles": 1,
                    "vehicle_id": "49e02276-a7f2-4469-86b9-742ac0edd96a",
                    "attributes": {
                        "id": "49e02276-a7f2-4469-86b9-742ac0edd96a",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 900935,
                        "attributes": {},
                        "raw_priority_score": -0.031891462531348225
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023224,
                    "stop_number": 7,
                    "action": "pickup",
                    "longitude": -97.7427102144332,
                    "latitude": 30.2900354516989,
                    "vehicles": 1,
                    "vehicle_id": "fd4ef1f6-28fc-4e29-9eb8-c4d65930b8bc",
                    "attributes": {
                        "id": "fd4ef1f6-28fc-4e29-9eb8-c4d65930b8bc",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 468478,
                        "attributes": {},
                        "raw_priority_score": -0.13324743208067957
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023225,
                    "stop_number": 8,
                    "action": "pickup",
                    "longitude": -97.7429423545756,
                    "latitude": 30.2905164768961,
                    "vehicles": 1,
                    "vehicle_id": "c751f4d2-a5df-414e-8bcf-0ecc936ac6dd",
                    "attributes": {
                        "id": "c751f4d2-a5df-414e-8bcf-0ecc936ac6dd",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 482138,
                        "attributes": {},
                        "raw_priority_score": -0.13324743208067957
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023226,
                    "stop_number": 9,
                    "action": "pickup",
                    "longitude": -97.7431246831983,
                    "latitude": 30.2905051869595,
                    "vehicles": 1,
                    "vehicle_id": "0f71783d-6c88-41b7-8163-a99248756550",
                    "attributes": {
                        "id": "0f71783d-6c88-41b7-8163-a99248756550",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 490952,
                        "attributes": {},
                        "raw_priority_score": -0.13324743208067957
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023227,
                    "stop_number": 10,
                    "action": "pickup",
                    "longitude": -97.7448218552847,
                    "latitude": 30.2904557063703,
                    "vehicles": 1,
                    "vehicle_id": "94a6f5ba-3520-4099-b07a-49c958ea1260",
                    "attributes": {
                        "id": "94a6f5ba-3520-4099-b07a-49c958ea1260",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 469876,
                        "attributes": {},
                        "raw_priority_score": -0.13324743208067957
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023228,
                    "stop_number": 11,
                    "action": "swap_battery",
                    "longitude": -97.7442038791512,
                    "latitude": 30.290993507675,
                    "vehicles": 1,
                    "vehicle_id": "00920ae3-973a-4474-8cb0-88e4ba63ce1d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023229,
                    "stop_number": 12,
                    "action": "swap_battery",
                    "longitude": -97.7450565053096,
                    "latitude": 30.2944583150882,
                    "vehicles": 1,
                    "vehicle_id": "008f5dde-8905-43bf-8103-a4f05d873c27",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023230,
                    "stop_number": 13,
                    "action": "pickup",
                    "longitude": -97.7423110630173,
                    "latitude": 30.2958549389061,
                    "vehicles": 1,
                    "vehicle_id": "e7b5994d-88be-4b11-b41b-16d2c0293782",
                    "attributes": {
                        "id": "e7b5994d-88be-4b11-b41b-16d2c0293782",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 1076882,
                        "attributes": {},
                        "raw_priority_score": -0.006123735889559612
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023231,
                    "stop_number": 14,
                    "action": "dropoff",
                    "longitude": -97.71878693,
                    "latitude": 30.33672754,
                    "vehicles": 8,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "491",
                        "name": "6910 Shirley Ave",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 8,
                        "raw_priority_score": 27.751950489408046,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.33672754+-97.71878693"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023232,
                    "stop_number": 15,
                    "action": "swap_battery",
                    "longitude": -97.7227734308267,
                    "latitude": 30.343524291136,
                    "vehicles": 1,
                    "vehicle_id": "008add05-adab-4391-999a-6d81117d51d9",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023233,
                    "stop_number": 16,
                    "action": "dropoff",
                    "longitude": -97.71980479,
                    "latitude": 30.39848784,
                    "vehicles": 8,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "466",
                        "name": "2900 Esperanza Crossing #100",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 8,
                        "raw_priority_score": 41.41997587280639,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.39848784+-97.71980479"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023234,
                    "stop_number": 17,
                    "action": "swap_battery",
                    "longitude": -97.7111743883492,
                    "latitude": 30.3415122099855,
                    "vehicles": 1,
                    "vehicle_id": "01051f81-ad41-4f35-a689-1aaf71015a3f",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023235,
                    "stop_number": 18,
                    "action": "dropoff",
                    "longitude": -97.71450958,
                    "latitude": 30.32694294,
                    "vehicles": 8,
                    "vehicle_id": null,
                    "attributes": {
                        "id": "475",
                        "name": "1000 Denson Dr",
                        "notes": "",
                        "inactive": false,
                        "max_vehicles": 8,
                        "min_vehicles": 0,
                        "total_vehicles": 8,
                        "raw_priority_score": 37.87029068663833,
                        "google_maps_link \n(auto generated)": "https://www.google.com/maps/search/30.32694294+-97.71450958"
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023236,
                    "stop_number": 19,
                    "action": "swap_battery",
                    "longitude": -97.7323201452318,
                    "latitude": 30.2943065065835,
                    "vehicles": 1,
                    "vehicle_id": "00a514c1-d0b3-4b3b-bd03-35de9834aa61",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023237,
                    "stop_number": 20,
                    "action": "swap_battery",
                    "longitude": -97.7361035311296,
                    "latitude": 30.2908273781602,
                    "vehicles": 1,
                    "vehicle_id": "0044c0c2-0264-4558-986a-f5dcb2b379be",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023238,
                    "stop_number": 21,
                    "action": "swap_battery",
                    "longitude": -97.7395877330361,
                    "latitude": 30.2882201404177,
                    "vehicles": 1,
                    "vehicle_id": "0029590d-7d92-4edf-a9d2-56d1dd015bde",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023239,
                    "stop_number": 22,
                    "action": "swap_battery",
                    "longitude": -97.7421965639218,
                    "latitude": 30.287122959318,
                    "vehicles": 1,
                    "vehicle_id": "013cf045-0766-4739-ac91-841c461a6e70",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023240,
                    "stop_number": 23,
                    "action": "pickup",
                    "longitude": -97.7455933469509,
                    "latitude": 30.2839665584172,
                    "vehicles": 1,
                    "vehicle_id": "3b6491fc-9eeb-48ae-8091-efb3a86b9849",
                    "attributes": {
                        "id": "3b6491fc-9eeb-48ae-8091-efb3a86b9849",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 533509,
                        "attributes": {},
                        "raw_priority_score": -0.09065036602260079
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023241,
                    "stop_number": 24,
                    "action": "pickup",
                    "longitude": -97.7452068377583,
                    "latitude": 30.2829345649839,
                    "vehicles": 1,
                    "vehicle_id": "71372039-669f-431d-8495-8d60b1ec21a9",
                    "attributes": {
                        "id": "71372039-669f-431d-8495-8d60b1ec21a9",
                        "status": 1,
                        "battery": 100,
                        "idle_time": 545283,
                        "attributes": {},
                        "raw_priority_score": -0.09065036602260079
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023242,
                    "stop_number": 25,
                    "action": "swap_battery",
                    "longitude": -97.7454982280829,
                    "latitude": 30.2692414661204,
                    "vehicles": 1,
                    "vehicle_id": "015b3af1-a585-45fd-ac72-7543ece2f241",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023243,
                    "stop_number": 26,
                    "action": "swap_battery",
                    "longitude": -97.7452908286241,
                    "latitude": 30.2666148197068,
                    "vehicles": 1,
                    "vehicle_id": "00a1ae29-026e-4bd0-8150-6570567ff0b4",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023244,
                    "stop_number": 27,
                    "action": "swap_battery",
                    "longitude": -97.746308056224,
                    "latitude": 30.2658746962561,
                    "vehicles": 1,
                    "vehicle_id": "01080175-7895-43dd-83f5-6ad12c7e5e1c",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023245,
                    "stop_number": 28,
                    "action": "swap_battery",
                    "longitude": -97.7460725259399,
                    "latitude": 30.2642658523193,
                    "vehicles": 1,
                    "vehicle_id": "00dee684-96fe-4ffa-8e12-fdc06b8e6f42",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023246,
                    "stop_number": 29,
                    "action": "swap_battery",
                    "longitude": -97.7450788149595,
                    "latitude": 30.2635150921607,
                    "vehicles": 1,
                    "vehicle_id": "00b5be41-498c-449f-9389-be45954b38b3",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023247,
                    "stop_number": 30,
                    "action": "swap_battery",
                    "longitude": -97.7420056662216,
                    "latitude": 30.2622852125109,
                    "vehicles": 1,
                    "vehicle_id": "00f7bb4d-661c-4a64-b04f-5e6f8952d1b4",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023248,
                    "stop_number": 31,
                    "action": "swap_battery",
                    "longitude": -97.7403878285874,
                    "latitude": 30.2614845335166,
                    "vehicles": 1,
                    "vehicle_id": "00066528-4d85-4cc8-bacf-a904f3ec96d8",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023249,
                    "stop_number": 32,
                    "action": "swap_battery",
                    "longitude": -97.7386272860736,
                    "latitude": 30.2611885179609,
                    "vehicles": 1,
                    "vehicle_id": "015c085b-6292-4754-b853-e46bb77b23b0",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023250,
                    "stop_number": 33,
                    "action": "swap_battery",
                    "longitude": -97.7370811488177,
                    "latitude": 30.2614621748356,
                    "vehicles": 1,
                    "vehicle_id": "00758700-caf2-4d67-a4cd-fd6bda409d7d",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023251,
                    "stop_number": 34,
                    "action": "swap_battery",
                    "longitude": -97.7372429425449,
                    "latitude": 30.2608934284604,
                    "vehicles": 1,
                    "vehicle_id": "0037d6ab-f4eb-4e5c-940f-ab91890dcde6",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023252,
                    "stop_number": 35,
                    "action": "swap_battery",
                    "longitude": -97.7373297931093,
                    "latitude": 30.2600452600606,
                    "vehicles": 1,
                    "vehicle_id": "0035f47e-2ed7-4e3d-8933-d128077efd7a",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                },
                {
                    "id": 3023253,
                    "stop_number": 36,
                    "action": "swap_battery",
                    "longitude": -97.7219109810635,
                    "latitude": 30.2585162287625,
                    "vehicles": 1,
                    "vehicle_id": "015f0688-9f37-4a14-85f9-324151883807",
                    "attributes": {
                        "battery": 100,
                        "raw_priority_score": 1
                    },
                    "marked_completed_at": null,
                    "marked_completed_by": null
                }
            ],
            "warehouse": {
                "id": "Austin Warehouse",
                "attributes": {}
            },
            "van": {
                "id": "Joseph's van",
                "attributes": {}
            }
        }
    ]
  }
}

export { responses }