const ratingModel = require('../Models/rating');
const formResponse = require('../Helper/response');

const ratingController = {

    getRating: (req, res) => {
        const id_course = req.params.id_course;
        ratingModel.getRating(id_course)
        .then(result => {
            let temp = result;
            let listOfRating = {};
            let oneStar = 0;
            let twoStar = 0;
            let threeStar = 0;
            let fourStar = 0;
            let fiveStar = 0;

            let data = [];//storing rating(int) values as array
            temp.map(tmp => data.push(tmp.rating));
            
            data.map(rtg => {
                switch(rtg){
                    case 1 : oneStar++; break;
                    case 2 : twoStar++; break;
                    case 3 : threeStar++; break;
                    case 4 : fourStar++; break;
                    case 5 : fiveStar++; break;
                }
            })

            listOfRating = {
                'oneStar' : oneStar,
                'twoStar' : twoStar,
                'threeStar' : threeStar,
                'fourStar' : fourStar,
                'fiveStar' : fiveStar
            }

            //finding average rating
            function sumOfArray(sum, num){
                return sum + num;
            }
            let total = data.reduce(sumOfArray);
            let rating = total/data.length;
            
            result = {
                ...result, 
                'listOfRating' :listOfRating,
                'averageRating' :rating,
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