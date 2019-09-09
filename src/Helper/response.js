const response = {
	success : (res, status, response) => {
		const success = {
			status : status,
			response : response
		}
		res.json(success)
	}
}


module.exports = response
