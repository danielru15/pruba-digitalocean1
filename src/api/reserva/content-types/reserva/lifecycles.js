module.exports = {
    async afterCreate(event) {
        const {result} = event
        const client = require('twilio')(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
          );
          
          client.messages.create({
            from: process.env.TWILIONUM,
            to: `+57${result.telefono}`,
            body: `Hola ${result.nombre + ' ' + result.apellido} mensaje de prueba con exito!`
          }).then((message) => console.log(message.sid));

        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.correo}`,
                from: 'esqui9710@gmail.com',
                subject: 'confirmacion reserva ',
                html:` <h1 style = "text-align: center; color: blue; text-transform: uppercase ">¡ Hola señor(a) ${result.nombre + ' ' + result.apellido} !</h1>
                <h2 style = "text-align: center"> Confirmamos tu reserva, proximamente nos comunicaremos con tigo por este medio o al ${result.telefono} 
                para brindarte toda la informacion </h2>  
                
                `
              });
              
        }
        catch(err) {
            console.log(err)
        }

    }
    
}