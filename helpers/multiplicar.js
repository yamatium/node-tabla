const fs = require('fs');
require('colors');


const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {

        
        

        let salida = '';
        let consola = '';

        // for ( let i = 5 , x = 1 ; i < 51; i += 5 , x += 1 ) {
        //    salida +=  `5 x ${x} = ${i} \n`  ;  
        // }
    
        for ( let i = 1; i <= hasta; i++ ) {
            salida  += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }

        if ( listar ) {
            console.log('============='.green);
            console.log('  El papu'.white);
            console.log( '  Tabla del:', base );
            console.log('============='.green);


            console.log( consola );
        }

        


        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );


        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
        
    }

    
    

}


module.exports = {
    crearArchivo
}