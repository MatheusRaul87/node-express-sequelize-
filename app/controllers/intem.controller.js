const db = require("../models");
const Items = db.Items;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(req.body.name) {
        res.status(400).send({
     message:"O contéudo nao pode ser vazio!"
  });
    return;       
    }
    const item = {
        name:req.body.name,
        description:req.body.description,
        quantity:req.body.quantity,
        is_flammable: req.body.is_flammable ? req.body.
        is_flammable : false    
    }

item.create(item)
.then(data => {
    res.send(data);
})
.catch(err => {
    res.status(500).send({
        message:
            err.message || "ocorreu um erro ao criar o item."
    })         

})

};

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? { name: { [Op.like]: `%{name}%` } } : null;

    Item.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocorreu um erro ao listar os itens."
        });
    });
};

        
        


exports.findOne = (req, res) => {
    
};


exports.update = (req, res) => {
    
};


exports.delete = (req, res) => {
    // ...
};


exports.deleteAll = (req, res) => {
    // ...
};

exports.findAllFlammables = (req, res) => {
   
};
