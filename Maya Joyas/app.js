const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', function(req, res){
    res.render('home', {
        title: 'Inicio | Maya Joyas'
    });
});

app.get('/anillos', function(req, res){
    const anillos = [
        {
            id: 1,
            imagen: "/images/Piezas_images/Anillos/Anillo_infinito.jpg",
            nombre: "Anillo Infinito",
            precio: "UYU $1000",
            materiales: "Plata 950",
        },
        {
            id: 2,
            imagen: "/images/Piezas_images/Anillos/Anillo_hoja.jpg",
            nombre: "Anillo Hoja",
            precio: "UYU $1000",
            materiales: "Plata 950",
        },
        {
            id: 3,
            imagen: "/images/Piezas_images/Anillos/Anillo_elefante.jpg",
            nombre: "Anillo Elefante",
            precio: "UYU $1000",
            materiales: "Plata 950",
        }
    ]
    
    res.render('anillos', {
        title: 'Anillos | Maya Joyas',
        anillos: anillos
    });
});


const mensajes = [
    {
       "id": 1,
       "name": "Usuario",
       "email": "usuario@mail.com",
       "telefono": "1234",
       "mensaje": "Felicidades!"
    }
];


app.get('/mensajes', function(req, res) {
    res.send(mensajes);
});


app.post('/contacto', function(req, res) {
    const id = mensajes.length + 1;
    const name = req.body.name;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const mensaje = req.body.mensaje;
    const newmsg = {
        "id": id,
        "name": name,
        "email": email,
        "telefono": telefono,
        "mensaje": mensaje
    };

    
    if(newmsg.mensaje){
        mensajes.push(newmsg);
        res.redirect('/contacto')
    } else {
        const response = {
            "error": "Por favor, escribe el mensaje que nos deseas enviar."
        };

        res.status(400);
        res.send(response);
    }
});


app.get('/contacto', function(req, res){
    res.sendFile(path.join(
        __dirname, 'views','contacto.html'
    ));
});



const port = 4000;
const server = app.listen(port, () => {
  console.log(`Express corriendo en puerto: ${server.address().port}`);
});