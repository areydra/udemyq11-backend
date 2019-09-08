const transactionsModel = require('../Models/transactions');
const formResponse = require('../Helper/response');

const transactionsController = {

    getTransaction: async (req, res) =>  {
        const id_user = req.params.id_user;
        await transactionsModel.getTransaction(id_user)
        .then(async result => {
            let temp = result;
            let tmp = [];
            //adding courses to json result
            await temp.map(async (transaction,index) => {
                await transactionsModel.getEnrollment(transaction.id_transaction)
                .then(resultEnroll => {
                    transaction = {
                        ...transaction,
                        enrollment : resultEnroll
                    }
                    tmp.push(transaction);
                })
                .catch(error => {res.json(error)})

                //send result at the last index of iteration
                if(index == temp.length-1){
                    formResponse.success(res,200,tmp);
                }
            })
        })
        .catch(error => {res.json(error)})
    },

    postTransaction: async (req, res) => {
        const id_user = req.params.id_user;
        const id_courses = req.body.id_courses;
        await transactionsModel.postTransaction(id_user)
        .then(async result => {
            await transactionsModel.getLastID()
            .then(async transactionID => {
                await id_courses.map(async (id_course,index) => {
                    // console.log(transactionID[0]['MAX(id)'], ' ', id_course );
                    await transactionsModel.postEnrollent(transactionID[0]['MAX(id)'], id_course)
                    .then(resultEnroll => {                  
                        if(index == id_courses.length-1){
                            formResponse.success(res,200,resultEnroll);
                        }
                    })
                })
            })
            .catch(error => {res.json(error)})
        })
        .catch(error => {res.json(error)})
    }

}

module.exports = transactionsController;