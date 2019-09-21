const argv = require('./config/yargs').argv;
var colors = require('colors');
const {creararchivo, listartabla} = require('./Multiplicar/multiplicar');
let comando = argv._[0];

switch(comando){
	case 'crear':
		creararchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${archivo.green}`))
			.catch(e => console.log(e));
	break;
	case 'listar':
		listartabla(argv.b, argv.limite)
			.then(tabla => console.log(colors.green(tabla)))
			.catch(e => console.log(e));
	break;
	default:
	console.log("comando no reconocido");
}

