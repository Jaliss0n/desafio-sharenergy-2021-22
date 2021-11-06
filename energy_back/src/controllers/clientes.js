// Define a utilização do model usuario e a dependência http-status
const Cliente = require('../models/tabCli');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {

    // clientes
    const numeroCliente = req.body.numeroCliente;
    const nomeCliente = req.body.nomeCliente;
    const usinaId = req.body.usinaId;
    const percentualDeParticipacao = req.body.percentualDeParticipacao;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Cliente.create({
        
        numeroCliente: numeroCliente,
        nomeCliente: nomeCliente,
        usinaId : usinaId,
        percentualDeParticipacao : percentualDeParticipacao,

    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Cliente.findAll()
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const numeroCliente = req.params.numeroCliente;
 
    Cliente.findByPk(numeroCliente)
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    
    // clientes
    const numeroCliente = req.body.numeroCliente;
    const nomeCliente = req.body.nomeCliente;
    const usinaId = req.body.usinaId;
    const percentualDeParticipacao = req.body.percentualDeParticipacao;
 
    Cliente.findByPk(numeroCliente)
        .then(cliente => {
            if (cliente) {
                cliente.update({
                  
                   
                    numeroCliente: numeroCliente,
                    nomeCliente: nomeCliente,
                    usinaId : usinaId,
                    percentualDeParticipacao : percentualDeParticipacao,
                },
                    {
                        where: { numeroCliente: numeroCliente }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Delete = (req, res, next) => {
    const numeroCliente = req.params.numeroCliente;
 
    Cliente.findByPk(numeroCliente)
        .then(cliente => {
            if (cliente) {
                cliente.destroy({
                    where: { numeroCliente: numeroCliente }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
