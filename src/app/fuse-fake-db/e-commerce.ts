export class ECommerceFakeDb
{
    public static dashboard = {
        'widget1': {
            'ranges'      : {
                'DY' : 'Yesterday',
                'DT' : 'Today',
                'DTM': 'Tomorrow'
            },
            'currentRange': 'DT',
            'data'        : {
                'label': 'CONVERSION RATE',
                'count': {
                    'DY' : 21,
                    'DT' : 25,
                    'DTM': 19
                },
                'extra': {
                    'label': 'Abandoned carts',
                    'count': {
                        'DY' : 3,
                        'DT' : 7,
                        'DTM': 8
                    }
                }
            },
            'detail'      : 'You can show some detailed information about this widget in here.'
        },
        'widget2': {
            'title' : 'Average Order Value',
            'data'  : {
                'label': '30 DAYS',
                'count': 21,
                'extra': {
                    'label': 'Last year same time',
                    'count': 14
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget3': {
            'title' : 'Online Visitors',
            'data'  : {
                'label': 'last 30 minutes',
                'count': 32,
                'extra': {
                    'label': 'Total visitors today',
                    'count': 998
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget4': {
            'title' : 'Profit per Visitor',
            'data'  : {
                'label': 'TODAY',
                'count': '3,7',
                'extra': {
                    'label': 'Yesterday',
                    'count': '2,90'
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget5': {
            'title'    : 'Sales',
            'ranges'   : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart': {
                '2W': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 9
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 37
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 12
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 32
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 9
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 39
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 12
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 27
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 7
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 18
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 8
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 24
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 16
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 20
                            }
                        ]
                    }
                ],
                'LW': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 12
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 37
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 8
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 24
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 7
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 51
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 13
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 31
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 7
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 29
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 6
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 17
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 10
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 31
                            }
                        ]
                    }
                ],
                'TW': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 11
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 42
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 10
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 28
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 8
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 43
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 11
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 34
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 8
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 20
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 10
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 25
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'Sales',
                                'value': 17
                            },
                            {
                                'name' : 'Abandoned Carts',
                                'value': 22
                            }
                        ]
                    }
                ]
            }
        },
        'widget6': {
            'title'      : 'Top 5 Categories',
            'ranges'     : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart'  : {
                '2W': [
                    {
                        'name' : 'Women Dresses',
                        'value': 18
                    },
                    {
                        'name' : 'Men Shoes',
                        'value': 12
                    },
                    {
                        'name' : 'Women Shoes',
                        'value': 40
                    },
                    {
                        'name' : 'Women Bags',
                        'value': 20
                    },
                    {
                        'name' : 'Men T-Shirts',
                        'value': 10
                    }
                ],
                'LW': [
                    {
                        'name' : 'Women Dresses',
                        'value': 17
                    },
                    {
                        'name' : 'Men Shoes',
                        'value': 14
                    },
                    {
                        'name' : 'Women Shoes',
                        'value': 36
                    },
                    {
                        'name' : 'Women Bags',
                        'value': 23
                    },
                    {
                        'name' : 'Men T-Shirts',
                        'value': 12
                    }
                ],
                'TW': [
                    {
                        'name' : 'Women Dresses',
                        'value': 13
                    },
                    {
                        'name' : 'Men Shoes',
                        'value': 16
                    },
                    {
                        'name' : 'Women Shoes',
                        'value': 34
                    },
                    {
                        'name' : 'Women Bags',
                        'value': 23
                    },
                    {
                        'name' : 'Men T-Shirts',
                        'value': 14
                    }
                ]
            },
            'footerLeft' : {
                'title': 'Total Sales',
                'count': {
                    '2W': 487,
                    'LW': 526,
                    'TW': 594
                }
            },
            'footerRight': {
                'title': 'Sales From Top 5 Categories',
                'count': {
                    '2W': 193,
                    'LW': 260,
                    'TW': 287
                }
            }
        },
        'widget7': {
            'title'    : 'Latest Customers',
            'ranges'   : {
                'T' : 'Today',
                'TM': 'Tomorrow'
            },
            'customers': {
                'T' : [
                    {
                        'name'    : 'Abbott Keitch',
                        'location': 'United States of America'
                    },
                    {
                        'name'    : 'Arnold Matlock',
                        'location': 'United States of America'
                    },
                    {
                        'name'    : 'Barrera Bradbury',
                        'location': 'England'
                    },
                    {
                        'name'    : 'Blair Strangeway',
                        'location': 'Germany'
                    },
                    {
                        'name'    : 'Copeland Redcliff',
                        'location': 'French'
                    },
                    {
                        'name'    : 'Henderson Cambias',
                        'location': 'Russia'
                    },
                    {
                        'name'    : 'Lily Peasegood',
                        'location': 'Mexico'
                    }
                ],
                'TM': [
                    {
                        'name'    : 'Boyle Winters',
                        'location': 'United States of America'
                    },
                    {
                        'name'    : 'Tyson Marshall',
                        'location': 'United States of America'
                    },
                    {
                        'name'    : 'Reyna Preece',
                        'location': 'England'
                    },
                    {
                        'name'    : 'Shauna Atherton',
                        'location': 'Germany'
                    },
                    {
                        'name'    : 'Tillman Lee',
                        'location': 'French'
                    },
                    {
                        'name'    : 'Velazquez Smethley',
                        'location': 'Russia'
                    },
                    {
                        'name'    : 'Helen Sheridan',
                        'location': 'Mexico'
                    }
                ]
            }
        }
    };

    public static products = [
        {
            'id'              : '1',
            'name'            : 'Alphonso (Hapus)',
            'handle'          : 'alphonso-mango',
            'description'     : 'Alphonso mango is one of the best mango varieties of India. It is also known as Hapus mango. Alphonso mango is a variety that does not occur in other parts of the world and can only be grown in India, due to its agronomic and climatic characteristics. It is cultivated in only western part of India such as Maharashtra region of Ratnagiri, Raigad, and Konkan. Alphonso mango is one of the expensive variety of mangoes and is exported in large quantity from India.',
            'categories'      : [
                'Mangoes',
                'Fruits'
            ],
            'tags'            : [
                'organic',
                'printed'
            ],
            'images'          : [
                {
                    'id'  : 1,
                    'url' : 'assets/images/ecommerce/alphonso.png',
                    'type': 'image'
                },
                {
                    'id'  : 2,
                    'url' : 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 3,
                    'url' : 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 4,
                    'url' : 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 5,
                    'url' : 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 6,
                    'url' : 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 7,
                    'url' : 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 8,
                    'url' : 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 9,
                    'url' : 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 10,
                    'url' : 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl'    : 9.309,
            'priceTaxIncl'    : 10.24,
            'taxRate'         : 10,
            'comparedPrice'   : 19.90,
            'quantity'        : 3,
            'sku'             : 'A445BV',
            'width'           : '22cm',
            'height'          : '24cm',
            'depth'           : '15cm',
            'weight'          : '3kg',
            'extraShippingFee': 3.00,
            'active'          : true
        },
        {
            'id'              : '2',
            'name'            : 'Banganapalli (Safeda)',
            'handle'          : 'banganapalli-mango',
            'description'     : 'Banganapalli mangoes are quite fibreless and called as Safeda mangoes or Began Phali. It is majorly cultivated in Andhra Pradesh and found widespread across the country. It is bright yellow in colour and a white tinge and the taste is slightly sour. It is also known as the king of mangoes in south India.',
            'categories'      : [
                'Mangoes',
                'Fruits'
            ],
            'tags'            : [
                'organic',
                'GI'
            ],
            'images'          : [
                {
                    'id'  : 1,
                    'url' : 'assets/images/ecommerce/banganapalli.png',
                    'type': 'image'
                },
                {
                    'id'  : 2,
                    'url' : 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 3,
                    'url' : 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 4,
                    'url' : 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 5,
                    'url' : 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 6,
                    'url' : 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 7,
                    'url' : 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 8,
                    'url' : 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 9,
                    'url' : 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 10,
                    'url' : 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl'    : 22.381,
            'priceTaxIncl'    : 24.62,
            'taxRate'         : 10,
            'comparedPrice'   : 29.90,
            'quantity'        : 92,
            'sku'             : 'A445BV',
            'width'           : '22cm',
            'height'          : '24cm',
            'depth'           : '15cm',
            'weight'          : '3kg',
            'extraShippingFee': 3.00,
            'active'          : true
        },
        {
            'id'              : '3',
            'name'            : 'Alphonso (Hapus)',
            'handle'          : 'alphonso-mango',
            'description'     : 'Alphonso mango is one of the best mango varieties of India. It is also known as Hapus mango. Alphonso mango is a variety that does not occur in other parts of the world and can only be grown in India, due to its agronomic and climatic characteristics. It is cultivated in only western part of India such as Maharashtra region of Ratnagiri, Raigad, and Konkan. Alphonso mango is one of the expensive variety of mangoes and is exported in large quantity from India.',
            'categories'      : [
                'Mangoes',
                'Fruits'
            ],
            'tags'            : [
                'organic',
                'printed'
            ],
            'images'          : [
                {
                    'id'  : 1,
                    'url' : 'assets/images/ecommerce/alphonso.png',
                    'type': 'image'
                },
                {
                    'id'  : 2,
                    'url' : 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 3,
                    'url' : 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 4,
                    'url' : 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 5,
                    'url' : 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 6,
                    'url' : 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 7,
                    'url' : 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 8,
                    'url' : 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 9,
                    'url' : 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 10,
                    'url' : 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl'    : 44.809,
            'priceTaxIncl'    : 49.29,
            'taxRate'         : 10,
            'comparedPrice'   : 59.90,
            'quantity'        : 60,
            'sku'             : 'A445BV',
            'width'           : '22cm',
            'height'          : '24cm',
            'depth'           : '15cm',
            'weight'          : '3kg',
            'extraShippingFee': 3.00,
            'active'          : true
        },
        {
            'id'              : '4',
            'name'            : 'Totapuri',
            'handle'          : 'totapuri-mango',
            'description'     : 'Totapuri mangoes have exported from India in various types like Pulp, Slices, Concentrate, Ripe, Chunks etc. India has exported Pulp mangoes of Totapuri with 27% of value from the total’s mango export value. Totapuri mango is exporting by India in more than 40 countries across the world including Saudi Arabia, Kuwait, Yemen, Sudan, Netherlands, UAE, Oman etc. The value of Totapuri mango export from India is USD 19 Million during January to April 2017. Totapuri is majorly exported by Tamil Nadu and Maharashtra. While West Bengal, Delhi, Karnataka and Andhra Pradesh are also the main exporter state of Totapuri mango.',
            'categories'      : [
                'Mangoes',
                'Fruits'
            ],
            'tags'            : [
                'organic',
                'GI'
            ],
            'images'          : [
                {
                    'id'  : 1,
                    'url' : 'assets/images/ecommerce/totapuri.png',
                    'type': 'image'
                },
                {
                    'id'  : 2,
                    'url' : 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 3,
                    'url' : 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 4,
                    'url' : 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 5,
                    'url' : 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 6,
                    'url' : 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 7,
                    'url' : 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 8,
                    'url' : 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 9,
                    'url' : 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 10,
                    'url' : 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl'    : 62.827,
            'priceTaxIncl'    : 69.11,
            'taxRate'         : 10,
            'comparedPrice'   : 79.90,
            'quantity'        : 101,
            'sku'             : 'A445BV',
            'width'           : '22cm',
            'height'          : '24cm',
            'depth'           : '15cm',
            'weight'          : '3kg',
            'extraShippingFee': 3.00,
            'active'          : false
        }
    ];

    public static orders = [
        {
            'id'             : 1,
            'reference'      : '70d4d7d0',
            'subtotal'       : '39.97',
            'tax'            : '77.44',
            'discount'       : '-10.17',
            'total'          : '73.31',
            'date'           : '2015/04/25 02:07:59',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Dollie',
                'lastName'       : 'Bullock',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Totapuri Mango',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 13,
                    'name' : 'On pre-order (not paid)',
                    'color': 'mat-purple-300-bg',
                    'date' : '2016/04/03 10:06:18'
                },
                {
                    'id'   : 1,
                    'name' : 'Awaiting check payment',
                    'color': 'mat-blue-500-bg',
                    'date' : '2015/03/17 18:28:37'
                }
            ],
            'payment'        : {
                'transactionId': '2a894b9e',
                'amount'       : '73.31',
                'method'       : 'Credit Card',
                'date'         : '2016/02/23 15:50:23'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'TNT',
                    'weight'  : '10.44',
                    'fee'     : '7.00',
                    'date'    : '2015/04/10 07:03:52'
                }
            ]
        },
        {
            'id'             : 2,
            'reference'      : '2003479c',
            'subtotal'       : '98.68',
            'tax'            : '45.55',
            'discount'       : '-10.25',
            'total'          : '24.51',
            'date'           : '2015/11/07 15:47:31',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Holmes',
                'lastName'       : 'Hines',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 2,
                    'name' : 'Payment accepted',
                    'color': 'mat-green-500-bg',
                    'date' : '2015/10/04 08:54:33'
                },
                {
                    'id'   : 1,
                    'name' : 'Awaiting check payment',
                    'color': 'mat-blue-500-bg',
                    'date' : '2015/05/03 03:43:04'
                }
            ],
            'payment'        : {
                'transactionId': '79c640c8',
                'amount'       : '24.51',
                'method'       : 'Check',
                'date'         : '2015/04/22 04:49:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '2.92',
                    'fee'     : '4.00',
                    'date'    : '2015/07/11 14:57:12'
                }
            ]
        },
        {
            'id'             : 3,
            'reference'      : '09f5443b',
            'subtotal'       : '23.03',
            'tax'            : '16.36',
            'discount'       : '-19.46',
            'total'          : '87.17',
            'date'           : '2015/11/26 16:04:40',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Serena',
                'lastName'       : 'Glover',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 8,
                    'name' : 'Payment error',
                    'color': 'mat-red-900-bg',
                    'date' : '2015/07/02 20:44:34'
                },
                {
                    'id'   : 3,
                    'name' : 'Preparing the order',
                    'color': 'mat-orange-500-bg',
                    'date' : '2015/03/23 04:59:45'
                }
            ],
            'payment'        : {
                'transactionId': '5ff44b0c',
                'amount'       : '87.17',
                'method'       : 'PayPal',
                'date'         : '2016/01/25 11:46:28'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '7.53',
                    'fee'     : '7.00',
                    'date'    : '2015/11/25 00:40:54'
                }
            ]
        },
        {
            'id'             : 4,
            'reference'      : '960898d0',
            'subtotal'       : '13.47',
            'tax'            : '53.45',
            'discount'       : '-15.55',
            'total'          : '26.98',
            'date'           : '2015/11/23 05:35:18',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Dianne',
                'lastName'       : 'Prince',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 5,
                    'name' : 'Delivered',
                    'color': 'mat-green-800-bg',
                    'date' : '2015/10/26 16:12:47'
                },
                {
                    'id'   : 4,
                    'name' : 'Shipped',
                    'color': 'mat-purple-500-bg',
                    'date' : '2016/02/06 06:42:37'
                }
            ],
            'payment'        : {
                'transactionId': '787d49b1',
                'amount'       : '26.98',
                'method'       : 'Check',
                'date'         : '2015/03/07 05:50:57'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'FedEx',
                    'weight'  : '11.93',
                    'fee'     : '5.00',
                    'date'    : '2016/03/21 07:08:26'
                }
            ]
        },
        {
            'id'             : 5,
            'reference'      : '2d7f68de',
            'subtotal'       : '46.93',
            'tax'            : '12.14',
            'discount'       : '-19.16',
            'total'          : '12.97',
            'date'           : '2015/01/13 06:21:21',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Frankie',
                'lastName'       : 'Hewitt',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 8,
                    'name' : 'Payment error',
                    'color': 'mat-red-900-bg',
                    'date' : '2015/02/01 09:21:46'
                },
                {
                    'id'   : 6,
                    'name' : 'Canceled',
                    'color': 'mat-pink-500-bg',
                    'date' : '2015/11/16 04:48:32'
                }
            ],
            'payment'        : {
                'transactionId': 'cd8c4727',
                'amount'       : '12.97',
                'method'       : 'Bank-wire',
                'date'         : '2016/05/15 21:15:32'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '5.43',
                    'fee'     : '3.00',
                    'date'    : '2016/01/06 00:51:59'
                }
            ]
        },
        {
            'id'             : 6,
            'reference'      : '9c991708',
            'subtotal'       : '32.55',
            'tax'            : '11.81',
            'discount'       : '-12.33',
            'total'          : '30.96',
            'date'           : '2015/01/17 04:21:08',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Cole',
                'lastName'       : 'Holcomb',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 3,
                    'name' : 'Preparing the order',
                    'color': 'mat-orange-500-bg',
                    'date' : '2015/11/30 01:04:32'
                },
                {
                    'id'   : 2,
                    'name' : 'Payment accepted',
                    'color': 'mat-green-500-bg',
                    'date' : '2015/11/12 21:27:18'
                }
            ],
            'payment'        : {
                'transactionId': 'a41f4b7c',
                'amount'       : '30.96',
                'method'       : 'Check',
                'date'         : '2015/04/27 03:59:22'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'FedEx',
                    'weight'  : '6.05',
                    'fee'     : '4.00',
                    'date'    : '2015/09/10 11:28:47'
                }
            ]
        },
        {
            'id'             : 7,
            'reference'      : '7683b54d',
            'subtotal'       : '14.08',
            'tax'            : '74.96',
            'discount'       : '-16.60',
            'total'          : '63.36',
            'date'           : '2015/06/14 14:49:47',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Merrill',
                'lastName'       : 'Richardson',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 11,
                    'name' : 'Awaiting PayPal payment',
                    'color': 'mat-blue-500-bg',
                    'date' : '2015/09/03 18:53:02'
                },
                {
                    'id'   : 13,
                    'name' : 'On pre-order (not paid)',
                    'color': 'mat-purple-300-bg',
                    'date' : '2015/12/13 18:14:40'
                }
            ],
            'payment'        : {
                'transactionId': 1974588,
                'amount'       : '63.36',
                'method'       : 'PayPal',
                'date'         : '2015/11/28 22:24:58'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'FedEx',
                    'weight'  : '2.89',
                    'fee'     : '3.00',
                    'date'    : '2016/02/10 09:03:44'
                }
            ]
        },
        {
            'id'             : 8,
            'reference'      : 'c1de0f75',
            'subtotal'       : '13.77',
            'tax'            : '55.78',
            'discount'       : '-17.20',
            'total'          : '45.74',
            'date'           : '2015/01/18 01:31:47',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Morgan',
                'lastName'       : 'Pitts',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 4,
                    'name' : 'Shipped',
                    'color': 'mat-purple-500-bg',
                    'date' : '2015/04/29 07:57:43'
                },
                {
                    'id'   : 3,
                    'name' : 'Preparing the order',
                    'color': 'mat-orange-500-bg',
                    'date' : '2015/04/23 11:14:38'
                }
            ],
            'payment'        : {
                'transactionId': '1e704aaf',
                'amount'       : '45.74',
                'method'       : 'Credit Card',
                'date'         : '2015/06/08 03:50:41'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '6.35',
                    'fee'     : '2.00',
                    'date'    : '2015/06/01 09:18:26'
                }
            ]
        },
        {
            'id'             : 9,
            'reference'      : '35a4dbc6',
            'subtotal'       : '56.49',
            'tax'            : '11.44',
            'discount'       : '-17.45',
            'total'          : '15.31',
            'date'           : '2016/02/14 14:22:58',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Krista',
                'lastName'       : 'Mathis',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 12,
                    'name' : 'Remote payment accepted',
                    'color': 'mat-green-500-bg',
                    'date' : '2015/07/15 15:48:00'
                },
                {
                    'id'   : 14,
                    'name' : 'Awaiting Cash-on-delivery payment',
                    'color': 'mat-blue-500-bg',
                    'date' : '2015/11/08 18:30:15'
                }
            ],
            'payment'        : {
                'transactionId': '762c4e1a',
                'amount'       : '15.31',
                'method'       : 'Bank-wire',
                'date'         : '2015/06/19 14:52:53'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '7.93',
                    'fee'     : '8.00',
                    'date'    : '2015/08/25 15:18:55'
                }
            ]
        },
        {
            'id'             : 10,
            'reference'      : 'a8bc5b17',
            'subtotal'       : '29.34',
            'tax'            : '87.50',
            'discount'       : '-18.11',
            'total'          : '20.97',
            'date'           : '2015/10/23 03:02:55',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Hayden',
                'lastName'       : 'Fitzgerald',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 5,
                    'name' : 'Delivered',
                    'color': 'mat-green-800-bg',
                    'date' : '2016/05/02 09:53:55'
                },
                {
                    'id'   : 2,
                    'name' : 'Payment accepted',
                    'color': 'mat-green-500-bg',
                    'date' : '2015/07/11 05:33:31'
                }
            ],
            'payment'        : {
                'transactionId': '3dce47a3',
                'amount'       : '20.97',
                'method'       : 'Credit Card',
                'date'         : '2015/07/28 23:53:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'TNT',
                    'weight'  : '9.20',
                    'fee'     : '2.00',
                    'date'    : '2015/08/05 08:45:55'
                }
            ]
        },
        {
            'id'             : 11,
            'reference'      : '54ab8191',
            'subtotal'       : '50.35',
            'tax'            : '71.75',
            'discount'       : '-10.46',
            'total'          : '72.30',
            'date'           : '2015/07/28 13:22:49',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Cotton',
                'lastName'       : 'Carlson',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 9,
                    'name' : 'On pre-order (paid)',
                    'color': 'mat-purple-300-bg',
                    'date' : '2016/02/26 14:15:38'
                },
                {
                    'id'   : 4,
                    'name' : 'Shipped',
                    'color': 'mat-purple-500-bg',
                    'date' : '2015/10/17 03:32:39'
                }
            ],
            'payment'        : {
                'transactionId': 'f4154419',
                'amount'       : '72.30',
                'method'       : 'PayPal',
                'date'         : '2016/03/07 15:10:12'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '2.81',
                    'fee'     : '7.00',
                    'date'    : '2016/05/01 11:15:22'
                }
            ]
        },
        {
            'id'             : 12,
            'reference'      : '6919050',
            'subtotal'       : '81.95',
            'tax'            : '22.44',
            'discount'       : '-10.89',
            'total'          : '42.54',
            'date'           : '2015/06/07 17:54:36',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Kaye',
                'lastName'       : 'Baldwin',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 10,
                    'name' : 'Awaiting bank wire payment',
                    'color': 'mat-blue-500-bg',
                    'date' : '2015/09/01 20:50:07'
                },
                {
                    'id'   : 12,
                    'name' : 'Remote payment accepted',
                    'color': 'mat-green-500-bg',
                    'date' : '2016/02/13 21:19:04'
                }
            ],
            'payment'        : {
                'transactionId': 44464979,
                'amount'       : '42.54',
                'method'       : 'Credit Card',
                'date'         : '2015/06/30 11:59:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'FedEx',
                    'weight'  : '5.52',
                    'fee'     : '2.00',
                    'date'    : '2015/03/15 07:08:37'
                }
            ]
        },
        {
            'id'             : 13,
            'reference'      : '1d4e89f0',
            'subtotal'       : '67.10',
            'tax'            : '46.96',
            'discount'       : '-11.64',
            'total'          : '97.49',
            'date'           : '2016/02/06 13:26:55',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Iva',
                'lastName'       : 'Clark',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 6,
                    'name' : 'Canceled',
                    'color': 'mat-pink-500-bg',
                    'date' : '2015/03/31 03:01:12'
                },
                {
                    'id'   : 8,
                    'name' : 'Payment error',
                    'color': 'mat-red-900-bg',
                    'date' : '2016/03/11 18:53:35'
                }
            ],
            'payment'        : {
                'transactionId': '2aef4aa3',
                'amount'       : '97.49',
                'method'       : 'Check',
                'date'         : '2015/05/13 13:28:52'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'TNT',
                    'weight'  : '5.37',
                    'fee'     : '6.00',
                    'date'    : '2015/04/22 01:48:15'
                }
            ]
        },
        {
            'id'             : 14,
            'reference'      : 'd897564e',
            'subtotal'       : '55.50',
            'tax'            : '48.92',
            'discount'       : '-18.45',
            'total'          : '16.95',
            'date'           : '2016/01/17 04:23:11',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Shauna',
                'lastName'       : 'Rosales',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 7,
                    'name' : 'Refunded',
                    'color': 'mat-red-500-bg',
                    'date' : '2015/12/29 15:34:46'
                },
                {
                    'id'   : 11,
                    'name' : 'Awaiting PayPal payment',
                    'color': 'mat-blue-500-bg',
                    'date' : '2015/07/14 19:10:43'
                }
            ],
            'payment'        : {
                'transactionId': 'b7ea43c9',
                'amount'       : '16.95',
                'method'       : 'PayPal',
                'date'         : '2015/07/11 07:18:06'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'TNT',
                    'weight'  : '6.49',
                    'fee'     : '6.00',
                    'date'    : '2015/01/05 13:42:13'
                }
            ]
        },
        {
            'id'             : 15,
            'reference'      : '1a803de2',
            'subtotal'       : '13.73',
            'tax'            : '64.42',
            'discount'       : '-19.64',
            'total'          : '20.34',
            'date'           : '2015/09/26 14:26:33',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Carroll',
                'lastName'       : 'Dotson',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 1,
                    'name' : 'Awaiting check payment',
                    'color': 'mat-blue-500-bg',
                    'date' : '2015/12/21 10:42:21'
                },
                {
                    'id'   : 6,
                    'name' : 'Canceled',
                    'color': 'mat-pink-500-bg',
                    'date' : '2016/02/11 05:58:55'
                }
            ],
            'payment'        : {
                'transactionId': '0633458c',
                'amount'       : '20.34',
                'method'       : 'Check',
                'date'         : '2015/07/17 20:54:14'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'TNT',
                    'weight'  : '3.30',
                    'fee'     : '2.00',
                    'date'    : '2015/11/04 14:08:16'
                }
            ]
        },
        {
            'id'             : 16,
            'reference'      : '7d90eaa6',
            'subtotal'       : '99.07',
            'tax'            : '31.36',
            'discount'       : '-18.23',
            'total'          : '10.64',
            'date'           : '2015/08/10 14:28:10',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Jeannie',
                'lastName'       : 'Reese',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 9,
                    'name' : 'On pre-order (paid)',
                    'color': 'mat-purple-300-bg',
                    'date' : '2015/06/20 08:37:46'
                },
                {
                    'id'   : 2,
                    'name' : 'Payment accepted',
                    'color': 'mat-green-500-bg',
                    'date' : '2015/01/01 01:42:21'
                }
            ],
            'payment'        : {
                'transactionId': '45f7440a',
                'amount'       : '10.64',
                'method'       : 'PayPal',
                'date'         : '2015/11/23 11:14:47'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '9.94',
                    'fee'     : '6.00',
                    'date'    : '2016/04/30 19:17:39'
                }
            ]
        },
        {
            'id'             : 17,
            'reference'      : 'cf9b4bfc',
            'subtotal'       : '96.93',
            'tax'            : '74.32',
            'discount'       : '-12.63',
            'total'          : '27.06',
            'date'           : '2015/11/10 16:54:11',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Dena',
                'lastName'       : 'Rowe',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 5,
                    'name' : 'Delivered',
                    'color': 'mat-green-800-bg',
                    'date' : '2015/03/23 00:18:52'
                },
                {
                    'id'   : 3,
                    'name' : 'Preparing the order',
                    'color': 'mat-orange-500-bg',
                    'date' : '2015/03/22 04:48:12'
                }
            ],
            'payment'        : {
                'transactionId': '966f4c8e',
                'amount'       : '27.06',
                'method'       : 'PayPal',
                'date'         : '2015/07/10 17:22:44'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'FedEx',
                    'weight'  : '6.81',
                    'fee'     : '3.00',
                    'date'    : '2015/01/23 07:31:46'
                }
            ]
        },
        {
            'id'             : 18,
            'reference'      : '07a938c4',
            'subtotal'       : '67.73',
            'tax'            : '33.33',
            'discount'       : '-12.33',
            'total'          : '91.50',
            'date'           : '2015/08/26 16:24:38',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Blankenship',
                'lastName'       : 'Lynch',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 6,
                    'name' : 'Canceled',
                    'color': 'mat-pink-500-bg',
                    'date' : '2016/03/24 22:56:35'
                },
                {
                    'id'   : 4,
                    'name' : 'Shipped',
                    'color': 'mat-purple-500-bg',
                    'date' : '2016/04/09 13:33:26'
                }
            ],
            'payment'        : {
                'transactionId': '411a4e97',
                'amount'       : '91.50',
                'method'       : 'PayPal',
                'date'         : '2016/02/05 05:35:52'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '6.11',
                    'fee'     : '7.00',
                    'date'    : '2015/10/20 10:46:31'
                }
            ]
        },
        {
            'id'             : 19,
            'reference'      : 'd460f4ff',
            'subtotal'       : '15.83',
            'tax'            : '41.90',
            'discount'       : '-16.54',
            'total'          : '47.99',
            'date'           : '2015/01/04 21:13:53',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Whitley',
                'lastName'       : 'Mcgee',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 7,
                    'name' : 'Refunded',
                    'color': 'mat-red-500-bg',
                    'date' : '2015/08/10 17:14:57'
                },
                {
                    'id'   : 5,
                    'name' : 'Delivered',
                    'color': 'mat-green-800-bg',
                    'date' : '2016/03/30 01:38:14'
                }
            ],
            'payment'        : {
                'transactionId': '761943c2',
                'amount'       : '47.99',
                'method'       : 'PayPal',
                'date'         : '2015/10/11 20:10:46'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '5.51',
                    'fee'     : '5.00',
                    'date'    : '2015/08/28 21:24:36'
                }
            ]
        },
        {
            'id'             : 20,
            'reference'      : 'ba6a946d',
            'subtotal'       : '36.84',
            'tax'            : '20.12',
            'discount'       : '-14.57',
            'total'          : '44.40',
            'date'           : '2015/02/24 00:57:18',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Hood',
                'lastName'       : 'Hodges',
                'avatar'         : 'assets/images/avatars/Abbott.jpg',
                'company'        : 'Saois',
                'jobTitle'       : 'Digital Archivist',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'invoiceAddress' : {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat'    : 40.7424739,
                    'lng'    : -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 2,
                    'name'    : 'Banganapalli (Safeda)',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id'      : 3,
                    'name'    : 'Alphonso (Hapus)',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status'         : [
                {
                    'id'   : 10,
                    'name' : 'Awaiting bank wire payment',
                    'color': 'mat-blue-500-bg',
                    'date' : '2015/05/19 11:09:56'
                },
                {
                    'id'   : 12,
                    'name' : 'Remote payment accepted',
                    'color': 'mat-green-500-bg',
                    'date' : '2015/03/27 05:02:33'
                }
            ],
            'payment'        : {
                'transactionId': '4af94368',
                'amount'       : '44.40',
                'method'       : 'PayPal',
                'date'         : '2015/11/11 14:25:39'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '3.63',
                    'fee'     : '5.00',
                    'date'    : '2016/03/01 09:07:49'
                }
            ]
        }
    ];
}
