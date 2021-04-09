const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//BULK UPLOADS


//CSV upload or manual
router.post('/bulk-upload/manual-or-upload', (req, res) => {
	if(req.session.data['add-apprentice-option'] == 'added-manually'){
		res.redirect('manual')
	} else {
		res.redirect('file-upload')
	}
})

router.post('/bulk-upload/v2/manual-or-upload', (req, res) => {
	if(req.session.data['add-apprentice-option'] == 'added-manually'){
		res.redirect('manual')
	} else {
		res.redirect('file-upload')
	}
})



module.exports = router
