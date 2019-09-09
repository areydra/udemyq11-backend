const ratingModel = require('../Models/rating');
const formResponse = require('../Helper/response');

const ratingController = {

    getRating: (req, res) => {
        const id_course = req.params.id_course;
        ratingModel.getRating(id_course)
        .then(result => {
            let data = [];
            let temp = result;
            temp.map(tmp => data.push(tmp.rating));

            function sumOfArray(sum, num){
                return sum + num;
            }

            let total = data.reduce(sumOfArray);
            let rating = total/data.length;
            
            result = {
                ...result, 
                'averageRating':rating
            }
            formResponse.success(res, 200, result);
        })
        .catch(error => {res.json(error);})
    },

    postRating: (req, res) => {
        const params = {
            id_user: req.params.id_user,
            id_course: req.params.id_course,
        }
        const body = {
            rating: req.body.rating,
            comment: req.body.comment
        }

        ratingModel.postRating(params,body)
        .then(result => {formResponse.success(res,200,result);})
        .catch((error) => {res.json(error);})
    }

}

module.exports = ratingController;