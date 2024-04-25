const palabrasProhibidas = ['sexo', 'pene', 'coito', 'violacion', 'aborto', 'puto', 'puta', 'mierda', 'cerote', 'cabron']; 

const verificarPalabrasProhibidas = (contenido) => {
  for (const palabra of palabrasProhibidas) {
    if (contenido.includes(palabra)) {
      return false; // 
    }
  }
  return true; 
};

module.exports = verificarPalabrasProhibidas;