const userModel = require('../Models/user');
const formResponse = require('../Helper/response');

const userController = {
    getUser: (req,res) => {
        const id_user = req.params.id_user;
        userModel.getUser(id_user)
        .then(result => {formResponse.success(res,200,result);})
        .catch(error => {res.json(error);})
    },

    postUser: (req,res) => {
        const body = {
            id_level:req.body.id_level,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            image:req.body.image,
        }

        userModel.postUser(body)
        .then(result => {formResponse.success(res,200,result)})
        .catch(error => {res.json(error)})
    },

    patchUser: (req, res) => {
        const id_user = req.params.id_user;
        const body = {
            id_level:req.body.id_level,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            image:req.body.image,
        }

        userModel.patchUser(id_user,body)
        .then(result => {formResponse.success(res,200,result)})
        .catch(error => {res.json(error)})
    },

    deleteUser: (req,res) => {
        const id_user = req.params.id_user;
        userModel.deleteUser(id_user)
        .then(result => {formResponse.success(res,200,result)})
        .catch(error => {res.json(error)})
    }
}

module.exports = userController;