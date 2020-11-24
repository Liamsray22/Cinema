const currentDate = new Date();

export default{
  usuarioLogueado:[],
  usuario:
    [
      [1,"admin","admin123","admin",true],
      [2,"Marcos","1234","employee",false],
      [3,"Polo","1234","employee",false],
      [4,"Julio","1234","employee",false]
    ],
  sala:[
    {  
      id:1,
      asientos:[
        {
          id: 1,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 2,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 3,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 4,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 5,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 6,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },{
          id: 7,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 8,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 9,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 10,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 11,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 12,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },{
          id: 13,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 14,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 15,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 16,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 17,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 18,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 19,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 20,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        }
      ]

    },
    {  
      id:2,
      asientos:[
        {
          id: 1,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 2,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 3,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 4,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 5,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 6,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },{
          id: 7,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 8,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 9,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 10,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 11,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 12,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },{
          id: 13,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 14,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 15,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 16,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 17,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 18,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 19,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 20,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        }
      ]
    }, 
    { id:3,
      asientos:[
        {
          id: 1,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 2,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 3,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 4,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 5,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 6,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },{
          id: 7,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 8,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 9,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 10,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 11,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 12,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },{
          id: 13,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 14,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 15,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 16,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 17,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 18,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 19,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 20,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        }
      ]
    },
    { id:4,
      asientos:[
        {
          id: 1,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 2,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 3,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 4,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 5,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 6,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },{
          id: 7,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 8,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 9,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 10,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 11,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 12,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },{
          id: 13,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 14,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 15,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 16,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 17,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 18,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 19,
          disponible: true,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
        {
          id: 20,
          disponible: false,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        }
      ]
    }
  ],
  cartelera:[
    [1,"Terminator","28/11/2020","E&J CINEMA","2 horas","20:00","22:30",1],
    [2,"Avengers","28/11/2020","E&J CINEMA","2 horas","20:00","22:30",2],
    [3,"Thor","29/11/2020","E&J CINEMA","1 hora","20:00","22:30",3],
    [4,"Coco","29/11/2020","E&J CINEMA","1 hora","20:00","22:30",4],
  ],
  factura:[
      [1,"Jose",2,2,5,`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","250"],
      [2,"Maria",2,2,3,`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","250"],
      [3,"Marcos",2,2,2,`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","150"],
      [4,"Lucas",2,2,1,`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","200"],
    ]
  
}