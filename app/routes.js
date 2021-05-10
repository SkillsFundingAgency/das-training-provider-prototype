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

//Check and confirm apprentice details
router.post('/bulk-upload/file-upload-check', (req, res) => {
    if(req.session.data['bulk-upload-confirm'] == 'details-approve'){
        res.redirect('success')
    } else if(req.session.data['bulk-upload-confirm'] == 'details-review'){
        res.redirect('success-review')
    } else if(req.session.data['bulk-upload-confirm'] == 'details-save'){
        res.redirect('draft-apprentices')
    }
})

module.exports = router
