const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.use(express.unlercoad({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const usuarios = [
    {
        nome: "João",
        endereco: "Rua A, 123",
    },
    {
        nome: "Maria",
        endereco: "Rua B, 456",
    },
    {
        nome: "Pedro",
        endereco: "Rua C, 789",
    }
];


app.get("/", (req, res) =>{
    res.render("home", { usuarios });
});

app.get("/novo", (req, res) =>{
    res.render("formCadastro")
});

app.get("/usuario/:id", (req, res) =>{
    let usuario  = { 
        nome: "Pipoca",
        endereco: "",
    };
    res.render("usuario", {
        id: parseInt(req.params.id),
        usuario,
    });
});

app.listen(8000, () =>{
    console.log("Servidor executando!");
});

app.get("/cadastro", (req, res) => {
    const novoUsuario = {
        nome: req.body.nome,
        endereco: req.body.endereco
    };
    usuarios.push(novoUsuario);
    res.redirect("/");
});
