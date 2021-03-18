const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//BULK UPLOADS


//CSV upload or manual
router.post('/bulk-upload/manual-or-upload', (req, res) => {
	if(req.session.data['add-apprentice-option'] == 'added-manually'){
		res.redirect('another-page')
	} else {
		res.redirect('file-upload')
	}
})


module.exports = router
