const Twig = require('twig');

// Mock de la función cpUrl
Twig.extendFunction("cpUrl", function() {
    return '#';  // Implementación simple de la función cpUrl
});

// Agrega más funciones personalizadas si es necesario

module.exports = Twig;
