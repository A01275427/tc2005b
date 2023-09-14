let moto = [

    {
        nombre: "Enduro",
        imagen: "https://cdn05.zipify.com/AjYhTwQQbjYOyVeVbMTAsqEMVck=/fit-in/1030x0/adf540beb8b94502855eb58f2bc300c2/104352_fe-250-2023.jpeg",
        descripcion: "El enduro es una carrera en motocicleta o bicicleta en la que básicamente se deben superar obstáculos logrando el mejor tiempo posible y teniendo la mejor pericia sobre el vehículo."
    },
    {
        nombre: "Cross",
        imagen: "https://cdn05.zipify.com/bm6SD-f3RQ27x_vMame8Ye_zyok=/fit-in/1030x0/9c129927277041ec80880ba23798550a/434070_125-sx-my23-90-right_my23_01-studio.jpeg",
        descripcion: "Motocross. A menos que se homologuen y matriculen, las motos de motocross tampoco están autorizadas a circular públicamente. Ligeras y muy manejables, cuentan con motores de 2 y 4 tiempos, suspensiones blandas y neumáticos con tacos para maximizar el agarre y ofrecer una mayor seguridad."
    },
    {
        nombre: "Doble Proposito",
        imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4107d3c9-30ef-4b73-8fec-fb0dab37d735.d825a96f3c2b2d6882efa602deeb8f68.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        descripcion: "Las motos doble propósito, conocidas también como Trail, BigTrail o Adventure, son motocicletas que tienen la capacidad de funcionar en diversos caminos, pistas, carreteras pavimentadas o no. Están diseñadas para competir en prácticas donde las motos se destacan por su polivalencia."
    },
];

router.get('/add', aController.action);

router.get('/dobleprop', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'doble.html'));
});

router.get('/enduro', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'enduro.html'));
});

router.get('/tienda', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'tienda.html'));
});

router.get('/cross', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'cross.html'));
});

router.get('/', (request, response, next) => {
    const titulo = "El Camino Motocicletas";
    response.render('lab', { titulo: titulo, motos: motos }); 
});

router.post('/ingresa', (req, res) => {
    const nombre = req.body.nombre;    
    fs.appendFile('datos.txt', `Nombre: ${nombre}\n`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send('Ocurrió un error al guardar los datos');
        }        
        res.send('Datos recibidos y guardados');
    });
});

router.post('/dobleprop', (request, response, next) => {
    console.log(request.body);
    motos.push({
        nombre: request.body.nombre,
        imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4107d3c9-30ef-4b73-8fec-fb0dab37d735.d825a96f3c2b2d6882efa602deeb8f68.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        descripcion: request.body.descripcion,
    });

    response.redirect('/Lab');
});

router.get('/list', (request, response, next) => {
    response.render('list', { motos: motos }); 
});

module.exports = router; 
