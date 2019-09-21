const fs = require('fs');

creararchivo = (base, limite = 10) =>{
	return new Promise( (resolve,reject) =>{

		if(!Number(base)){
			reject(`El valor introducido (${base}) no es un numero`);
			return;
		}
		let data = '';
		for (let i = 1; i <= limite; i++) {
			let R = base * i;
			data += base+' * '+i+' = '+R+'\n';
		}

		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
		  if (err) 
		  	reject(err)
		  else
		  	resolve(`tabla-${base}.txt`)
		});
	})
}

listartabla = (base, limite)=>{
	return new Promise( (resolve, reject) => {
		if(!Number(base)){
			reject(`El valor introducido (${base}) no es un numero`);
			return;
		}
		let data = '';
		for(let i = 1; i <= limite; i++){
			let R = base * i;
			data += base+' * '+i+' = '+R+'\n';
		}
		resolve(data);
	})
}

module.exports = {
	creararchivo,
	listartabla
}
