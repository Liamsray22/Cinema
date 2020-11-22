var AsientosData = [];
    //1
    for(var i=0; i<27; i++){
       var asiento =   {
                numeroAsiento: i+1,
                estado: "Desocupado",
                img:"https://th.bing.com/th/id/OIP.wv99jY1NVrDxx6LpkRshugHaHa?pid=Api&rs=1"
       }
      AsientosData.push(asiento);
    } 
export {AsientosData}