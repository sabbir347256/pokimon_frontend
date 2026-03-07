import React, { useMemo, useState } from "react";

const SeatPlan = () => {
  const seatMapData ={
    "meta": {
        "count": 1,
        "links": {
            "self": "https://test.api.amadeus.com/v1/shopping/seatmaps?flightOrderId=eJzTd9c3dwv0D4kCAAsMAnE"
        }
    },
    "data": [
        {
            "id": "1",
            "type": "seatmap",
            "departure": {
                "iataCode": "MAD",
                "terminal": "2",
                "at": "2026-03-12T14:25:00"
            },
            "arrival": {
                "iataCode": "ORY",
                "terminal": "1",
                "at": "2026-03-12T16:20:00"
            },
            "carrierCode": "UX",
            "number": "1029",
            "operating": {
                "carrierCode": "UX"
            },
            "aircraft": {
                "code": "73H"
            },
            "class": "N",
            "flightOfferId": "1",
            "segmentId": "1",
            "decks": [
                {
                    "deckType": "MAIN",
                    "deckConfiguration": {
                        "width": 7,
                        "length": 28,
                        "startSeatRow": 5,
                        "endSeatRow": 31,
                        "startWingsX": 6,
                        "endWingsX": 16,
                        "startWingsRow": 11,
                        "endWingsRow": 21,
                        "exitRowsX": [
                            9,
                            10
                        ]
                    },
                    "facilities": [
                        {
                            "code": "LA",
                            "column": "A",
                            "row": "31",
                            "position": "REAR",
                            "coordinates": {
                                "x": 27,
                                "y": 0
                            }
                        },
                        {
                            "code": "LA",
                            "column": "F",
                            "row": "31",
                            "position": "REAR",
                            "coordinates": {
                                "x": 27,
                                "y": 6
                            }
                        }
                    ],
                    "seats": [
                        {
                            "cabin": "ECONOMY",
                            "number": "5A",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "5B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "5C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "5D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "5E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "5F",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 0,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "6A",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "6B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "6C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "6D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "6E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "6F",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 1,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7A",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "7F",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 2,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8A",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "8F",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 3,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "9A",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "9B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "9C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "9D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "9E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "9F",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 4,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10A",
                            "characteristicsCodes": [
                                "1W",
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "10F",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 5,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11A",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "OW",
                                "PC",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "11F",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "OW",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 6,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12A",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "OW",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "FC",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "FC",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "12F",
                            "characteristicsCodes": [
                                "CH",
                                "FC",
                                "I",
                                "OW",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 7,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "13A",
                            "characteristicsCodes": [
                                "1D",
                                "CH",
                                "FC",
                                "I",
                                "LS",
                                "OW",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "13B",
                            "characteristicsCodes": [
                                "1D",
                                "9",
                                "CH",
                                "FC",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "13C",
                            "characteristicsCodes": [
                                "1D",
                                "A",
                                "CH",
                                "FC",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "13D",
                            "characteristicsCodes": [
                                "1D",
                                "A",
                                "CH",
                                "FC",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "13E",
                            "characteristicsCodes": [
                                "1D",
                                "9",
                                "CH",
                                "FC",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "13F",
                            "characteristicsCodes": [
                                "1D",
                                "CH",
                                "FC",
                                "I",
                                "OW",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "15.00",
                                        "base": "15.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 8,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14A",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "1D",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "LS",
                                "OW",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14B",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "1D",
                                "9",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14C",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "1D",
                                "A",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14D",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "1D",
                                "A",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14E",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "1D",
                                "9",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "14F",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "1D",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "OW",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 9,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15A",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "LS",
                                "OW",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15B",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "9",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15C",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "A",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "LS",
                                "OW",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15D",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "A",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15E",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "9",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "OW",
                                "RS",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "15F",
                            "characteristicsCodes": [
                                "1A",
                                "1B",
                                "1C",
                                "CH",
                                "E",
                                "IE",
                                "L",
                                "OW",
                                "RS",
                                "W",
                                "1A_AQC_PREMIUM_SEAT"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "AVAILABLE",
                                    "price": {
                                        "currency": "EUR",
                                        "total": "30.00",
                                        "base": "30.00",
                                        "taxes": [
                                            {
                                                "amount": "0.00",
                                                "code": "SUPPLIER"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "coordinates": {
                                "x": 10,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "16A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "OW",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "16B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "16C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "16D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "16E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "16F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "OW",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 11,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "17A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "OW",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "17B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "17C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "17D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "17E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "17F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "OW",
                                "PC",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 12,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "18A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "OW",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "18B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "18C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "18D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "18E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "18F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "OW",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 13,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "19A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "OW",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "19B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "19C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "19D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "19E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "19F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "OW",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 14,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "OW",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "20F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "OW",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 15,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "OW",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS",
                                "OW"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "OW",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "21F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "OW",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 16,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "22F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 17,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "23F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 18,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "PC",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "24F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 19,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "25F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 20,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "26F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 21,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "27F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 22,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS",
                                "U"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS",
                                "U"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "28F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "U",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 23,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "W",
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS",
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS",
                                "U"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS",
                                "U"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "29F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "U",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 24,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30A",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "LS",
                                "W",
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 25,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30B",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "LS",
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 25,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30C",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 25,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30D",
                            "characteristicsCodes": [
                                "A",
                                "CH",
                                "RS",
                                "U"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 25,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30E",
                            "characteristicsCodes": [
                                "9",
                                "CH",
                                "RS",
                                "U"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 25,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "30F",
                            "characteristicsCodes": [
                                "CH",
                                "I",
                                "RS",
                                "U",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 25,
                                "y": 6
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31A",
                            "characteristicsCodes": [
                                "1D",
                                "CH",
                                "I",
                                "LS",
                                "W",
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 26,
                                "y": 0
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31B",
                            "characteristicsCodes": [
                                "1D",
                                "9",
                                "CH",
                                "LS",
                                "1"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 26,
                                "y": 1
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31C",
                            "characteristicsCodes": [
                                "1D",
                                "A",
                                "AL",
                                "CH",
                                "LS"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 26,
                                "y": 2
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31D",
                            "characteristicsCodes": [
                                "1D",
                                "A",
                                "AL",
                                "CH",
                                "RS",
                                "U"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 26,
                                "y": 4
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31E",
                            "characteristicsCodes": [
                                "1D",
                                "9",
                                "CH",
                                "RS",
                                "U"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 26,
                                "y": 5
                            }
                        },
                        {
                            "cabin": "ECONOMY",
                            "number": "31F",
                            "characteristicsCodes": [
                                "1D",
                                "CH",
                                "I",
                                "PC",
                                "RS",
                                "U",
                                "W"
                            ],
                            "travelerPricing": [
                                {
                                    "travelerId": "1",
                                    "seatAvailabilityStatus": "BLOCKED"
                                }
                            ],
                            "coordinates": {
                                "x": 26,
                                "y": 6
                            }
                        }
                    ]
                }
            ],
            "aircraftCabinAmenities": {
                "power": {
                    "isChargeable": false,
                    "powerType": "USB_PORT",
                    "usbType": "USB_A"
                },
                "seat": {
                    "legSpace": 29,
                    "spaceUnit": "INCHES",
                    "tilt": "NORMAL",
                    "medias": [
                        {
                            "title": "Air Europa Lineas Areas Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=7N8VQDH7SZ6T1G0I7PTXNKCSJ0%2B10248%2B0&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F2409221c%2D8e49%2D4834%2Daa80%2D92731fcf7f6a%2Flarge%2F29in%5FSeat%2DInfographic%2Epng",
                            "description": {
                                "text": "Economy seat with 29\" / 74 cm of seat pitch",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "Air Europa Lineas Areas Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=7N8VQDH7SZ6T1G0I7PTXNKCSJ0%2B10248%2B1&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F2409221c%2D8e49%2D4834%2Daa80%2D92731fcf7f6a%2Fsquare%5Fthumb%2F29in%5FSeat%2DInfographic%2Epng",
                            "description": {
                                "text": "Economy seat with 29\" / 74 cm of seat pitch",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "Air Europa Lineas Areas Economy",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=7N8VQDH7SZ6T1G0I7PTXNKCSJ0%2B10248%2B2&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F2409221c%2D8e49%2D4834%2Daa80%2D92731fcf7f6a%2Flarge%5Fsquare%5Fthumb%2F29in%5FSeat%2DInfographic%2Epng",
                            "description": {
                                "text": "Economy seat with 29\" / 74 cm of seat pitch",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "Extra Legroom",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=7N8VQDH7SZ6T1G0I7PTXNKCSJ0%2B26348%2B3&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F66ca57cf%2Dcf92%2D4a04%2D9ea5%2D647e000e08eb%2Flarge%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
                            "description": {
                                "text": "Economy seat with extra legroom",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "Extra Legroom",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=7N8VQDH7SZ6T1G0I7PTXNKCSJ0%2B26348%2B4&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F66ca57cf%2Dcf92%2D4a04%2D9ea5%2D647e000e08eb%2Fsquare%5Fthumb%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
                            "description": {
                                "text": "Economy seat with extra legroom",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        },
                        {
                            "title": "Extra Legroom",
                            "href": "https://PDT.assets.media-solutions.amadeus.com/redirect?image_id=7N8VQDH7SZ6T1G0I7PTXNKCSJ0%2B26348%2B5&url=https%3A%2F%2Fupamedia%2Eatpco%2Enet%2Fphotos%2F66ca57cf%2Dcf92%2D4a04%2D9ea5%2D647e000e08eb%2Flarge%5Fsquare%5Fthumb%2Fextra%2Dlegroom%2Dseat%2Dinformation%2Epng",
                            "description": {
                                "text": "Economy seat with extra legroom",
                                "lang": "EN"
                            },
                            "mediaType": "image"
                        }
                    ]
                },
                "wifi": {
                    "isChargeable": true,
                    "wifiCoverage": "FULL"
                },
                "food": {
                    "isChargeable": true,
                    "foodType": "MEAL"
                },
                "beverage": {
                    "isChargeable": true,
                    "beverageType": "ALCOHOLIC_AND_NON_ALCOHOLIC"
                }
            },
            "availableSeatsCounters": [
                {
                    "travelerId": "1",
                    "value": 66
                }
            ]
        }
    ],
    "dictionaries": {
        "locations": {
            "MAD": {
                "cityCode": "MAD",
                "countryCode": "ES"
            },
            "ORY": {
                "cityCode": "PAR",
                "countryCode": "FR"
            }
        },
        "facilities": {
            "LA": "Lavatory"
        },
        "seatCharacteristics": {
            "A": "Aisle seat",
            "RS": "Right side of aircraft",
            "CH": "Chargeable seats",
            "E": "Exit row seat",
            "1W": "Window seat without window",
            "LS": "Left side of aircraft",
            "OW": "Overwing seat(s)",
            "I": "Seat suitable for adult with an infant",
            "AL": "Seat adjacent to lavatory",
            "L": "Leg space seat",
            "1A_AQC_PREMIUM_SEAT": "Premium seat",
            "1A": "Seat not allowed for infant",
            "1B": "Seat not allowed for medical",
            "1": "Restricted seat - General",
            "1C": "Seat not allowed for unaccompanied minor",
            "PC": "Pet cabin",
            "1D": "Restricted recline seat",
            "U": "Seat suitable for unaccompanied minors",
            "W": "Window seat",
            "9": "Center seat (not window, not aisle)",
            "IE": "Seat not suitable for child",
            "FC": "Front of cabin class/compartment"
        }
    }
};

  const [selectedSeat, setSelectedSeat] = useState(null);

  const flight = seatMapData.data[0];
  const deck = flight.decks[0];
  const config = deck.deckConfiguration;
  const dictionaries = seatMapData.dictionaries;

  const seatsMap = useMemo(() => {
    const map = {};
    deck.seats.forEach((seat) => {
      map[`${seat.coordinates.x}-${seat.coordinates.y}`] = seat;
    });
    return map;
  }, [deck.seats]);

  const facilitiesMap = useMemo(() => {
    const map = {};
    deck.facilities.forEach((facility) => {
      map[`${facility.coordinates.x}-${facility.coordinates.y}`] = facility;
    });
    return map;
  }, [deck.facilities]);

  const getSeatStatus = (seat) => {
    return seat?.travelerPricing?.[0]?.seatAvailabilityStatus || "UNKNOWN";
  };

  const getSeatPrice = (seat) => {
    return seat?.travelerPricing?.[0]?.price?.total || null;
  };

  const isPremiumSeat = (seat) =>
    seat?.characteristicsCodes?.includes("1A_AQC_PREMIUM_SEAT");

  const isWindowSeat = (seat) => seat?.characteristicsCodes?.includes("W");
  const isAisleSeat = (seat) => seat?.characteristicsCodes?.includes("A");

  const getSeatClasses = (seat) => {
    const status = getSeatStatus(seat);
    const isSelected = selectedSeat?.number === seat.number;

    if (status === "BLOCKED") {
      return "bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300";
    }

    if (isSelected) {
      return "bg-blue-600 text-white border-blue-700 shadow-lg scale-105";
    }

    if (isPremiumSeat(seat)) {
      return "bg-yellow-100 text-yellow-800 border-yellow-400 hover:bg-yellow-200";
    }

    return "bg-green-100 text-green-800 border-green-400 hover:bg-green-200";
  };

  const handleSeatClick = (seat) => {
    if (getSeatStatus(seat) === "BLOCKED") return;
    setSelectedSeat(seat);
  };

  const renderCell = (x, y) => {
    const key = `${x}-${y}`;
    const seat = seatsMap[key];
    const facility = facilitiesMap[key];

    if (seat) {
      const price = getSeatPrice(seat);
      const seatInfo = seat.characteristicsCodes
        ?.map((code) => dictionaries.seatCharacteristics?.[code] || code)
        .join(", ");

      return (
        <button
          key={key}
          onClick={() => handleSeatClick(seat)}
          disabled={getSeatStatus(seat) === "BLOCKED"}
          title={`${seat.number} | ${getSeatStatus(seat)}${
            price ? ` | €${price}` : ""
          } | ${seatInfo}`}
          className={`h-14 w-14 rounded-xl border text-[10px] font-semibold transition-all duration-200 ${getSeatClasses(
            seat,
          )}`}
        >
          <div className="leading-tight">{seat.number}</div>
          <div className="text-[9px]">
            {getSeatStatus(seat) === "AVAILABLE"
              ? `€${price || "-"}`
              : "Blocked"}
          </div>
        </button>
      );
    }

    if (facility) {
      return (
        <div
          key={key}
          title={dictionaries.facilities?.[facility.code] || facility.code}
          className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-[10px] font-medium text-slate-700"
        >
          WC
        </div>
      );
    }

    // aisle space
    if (y === 3) {
      return (
        <div
          key={key}
          className="flex h-14 w-14 items-center justify-center text-xs text-slate-400"
        >
          aisle
        </div>
      );
    }

    return <div key={key} className="h-14 w-14" />;
  };

  const rows = Array.from({ length: config.length }, (_, x) => x);
  const cols = Array.from({ length: config.width }, (_, y) => y);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">Flight Seat Map</h2>
          <div className="mt-3 grid gap-3 text-sm text-slate-600 md:grid-cols-4">
            <p>
              <span className="font-semibold">Flight:</span>{" "}
              {flight.carrierCode} {flight.number}
            </p>
            <p>
              <span className="font-semibold">Route:</span>{" "}
              {flight.departure.iataCode} → {flight.arrival.iataCode}
            </p>
            <p>
              <span className="font-semibold">Aircraft:</span>{" "}
              {flight.aircraft.code}
            </p>
            <p>
              <span className="font-semibold">Available Seats:</span>{" "}
              {flight.availableSeatsCounters?.[0]?.value}
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 border border-slate-200">
            <span className="h-4 w-4 rounded bg-green-100 border border-green-400" />
            <span className="text-sm text-slate-700">Available</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 border border-slate-200">
            <span className="h-4 w-4 rounded bg-yellow-100 border border-yellow-400" />
            <span className="text-sm text-slate-700">Premium</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 border border-slate-200">
            <span className="h-4 w-4 rounded bg-gray-300 border border-gray-300" />
            <span className="text-sm text-slate-700">Blocked</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 border border-slate-200">
            <span className="h-4 w-4 rounded bg-blue-600 border border-blue-700" />
            <span className="text-sm text-slate-700">Selected</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 border border-slate-200">
            <span className="h-4 w-4 rounded bg-slate-100 border border-slate-300" />
            <span className="text-sm text-slate-700">Lavatory</span>
          </div>
        </div>

        {/* Seat Map */}
        <div className="overflow-x-auto rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
          <div className="inline-block min-w-full">
            <div className="mb-4 text-center text-sm font-medium text-slate-500">
              Front
            </div>

            <div className="space-y-2">
              {rows.map((x) => {
                const actualRowNumber = config.startSeatRow + x;

                return (
                  <div key={x} className="flex items-center gap-3">
                    <div className="w-10 text-right text-sm font-semibold text-slate-500">
                      {actualRowNumber <= config.endSeatRow
                        ? actualRowNumber
                        : ""}
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {cols.map((y) => renderCell(x, y))}
                    </div>

                    <div className="w-10 text-left text-sm font-semibold text-slate-500">
                      {actualRowNumber <= config.endSeatRow
                        ? actualRowNumber
                        : ""}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 text-center text-sm font-medium text-slate-500">
              Rear
            </div>
          </div>
        </div>

        {/* Selected Seat Info */}
        {selectedSeat && (
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="mb-3 text-lg font-bold text-slate-800">
              Selected Seat Details
            </h3>
            <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              <p>
                <span className="font-semibold">Seat:</span>{" "}
                {selectedSeat.number}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {getSeatStatus(selectedSeat)}
              </p>
              <p>
                <span className="font-semibold">Price:</span>{" "}
                {getSeatPrice(selectedSeat)
                  ? `€${getSeatPrice(selectedSeat)}`
                  : "N/A"}
              </p>
              <p>
                <span className="font-semibold">Type:</span>{" "}
                {isWindowSeat(selectedSeat)
                  ? "Window"
                  : isAisleSeat(selectedSeat)
                    ? "Aisle"
                    : "Middle"}
              </p>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-slate-700">
                Characteristics:
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedSeat.characteristicsCodes?.map((code) => (
                  <span
                    key={code}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 border border-slate-200"
                  >
                    {dictionaries.seatCharacteristics?.[code] || code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatPlan;
