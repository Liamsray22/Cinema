const currentDate = new Date();

export default{
  usuario:[ 
    [1,"admin","1234","employee"],
    [2,"Marcos","1234","employee"],
    [3,"Polo","1234","employee"],
    [4,"Julio","1234","employee"]
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
          disponible: false,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },
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
          disponible: false,
          img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
        },

      ]
    },
    
  ],
  cartelera:[
    ["Terminator","28/08/2020","E&J CINEMA","2.5 horas","20:00","22:30",1],
    ["Terminator","28/08/2020","E&J CINEMA","2.5 horas","20:00","22:30",2],
  ],
  factura:[
      [1,"Jose",2,2,"#5",`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","$2500"],
      [2,"Maria",2,2,"#5",`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","$2500"],
      [3,"Marcos",2,2,"#5",`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","$2500"],
      [4,"Lucas",2,2,"#5",`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","$2500"],
    ]
  
}