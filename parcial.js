// Ejercicio 1 

function areaTotalGalpon (medidas){
let areaTotal = 0;

    for (const galpon of medidas) {
        const area = galpon.ancho * galpon.largo; 
        areaTotal += area; 

}      
        
        return areaTotal;

}

        const medidas = [
        { largo: 50, ancho: 100 }

    
];


        console.log (areaTotalGalpon(medidas)); 
        // si es correcto el area total seria 5000.






        //Ejercicio 2 

    /*function siMaquina (superficieEdificio, maquinas){
        for (const maquina of maquinas);
        
        {
    
    
            if(maquinas.superficieRequerida <= superficieEdificio){
            return true;

        }

    }

        return false;

}

        const superficieEdificio = 40;
        const maquinas = [
    { nombreMaquina: "Torno Industrial", superficieRequerida: 40 },
    { nombreMaquina: "Maquina2", superficieRequerida: 20},

];

        console.log(siMaquina(superficieEdificio, maquinas));*/

        

        

        








