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
    const id = req.params.id;  

    Item.findByPk(id)  
    .then(data => {
        if (data) {
            res.send(data);
        } else { 
            res.status(400).send({
                message: `Não foi possível encontrar um item com o id=${id}.`
            });
        }
    })
    .catch(err => { 
        res.status(500).send({
            message: `Ocorreu um erro ao tentar encontrar um item com o id=${id}`
        });
    });
};



exports.update = (req, res) => {
    const id = req.params.id;

    Item.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num[0] === 1) {
            res.send({
                message: "O item foi atualizado de maneira bem sucedida."
            });
        } else {
            res.send({
                message: `Não foi possível atualizar o item com o id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Ocorreu um erro ao tentar atualizar o item com o id=${id}`
        });
    });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Item.destroy({
        where: {id: id}
    })
        .then(num => {
            if(num == 1) {
            res.send({
              message:"O item foi apagado com sucesso!"             
        });
    } else {
        res.send({
            message:"Não foi posssivel apagar o item com o id=${id} "
        });
    }
})
.catch(err => {
    res.status(500).send({
        message: "Ocorreu um erro ao tentar apagar o item com o id=" + id
    });
});
    


exports.deleteAll = (req, res) => {
    // ...
};

exports.findAllFlammables = (req, res) => {
   
}

};
