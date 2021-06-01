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

router.post('/bulk-upload/v3/manual-or-upload', (req, res) => {
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
	} else if(req.session.data['bulk-upload-confirm'] == 'details-new-file'){
        res.redirect('amended-file')
    }
})

//Upload amended csv file
router.post('/bulk-upload/amended-file', (req, res) => {
	if(req.session.data['new-file'] == 'no'){
		res.redirect('file-upload-check')
	} else {
		res.redirect('file-upload')
	}
})

//Discard csv file
router.post('/bulk-upload/discard-file', (req, res) => {
	if(req.session.data['discard-file'] == 'no'){
		res.redirect('file-upload-check')
	} else {
		res.redirect('index')
	}
})

//Manually add apprentice details
router.post('/bulk-upload/manual', (req, res) => {
	if(req.session.data['manual-add'] == 'existing-cohort'){
		res.redirect('existing-cohorts')
	} else {
		res.redirect('choose-employer')
	}
})

//Confirm employer
router.post('/bulk-upload/confirm-employer', (req, res) => {
	if(req.session.data['create-cohort'] == 'yes'){
		res.redirect('apprentice-details-add')
	} else {
		res.redirect('choose-employer')
	}
})



module.exports = router
