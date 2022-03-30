const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//BULK UPLOADS


//CSV upload or manual
router.post('/bulk-upload/manual-or-upload', (req, res) => {
	if(req.session.data['add-apprentice-option'] == 'added-manually'){
		res.redirect('manual-journey/manual')
	} else {
		res.redirect('file-upload-before')
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

router.post('/bulk-upload/v4/manual-or-upload', (req, res) => {
	if(req.session.data['add-apprentice-option'] == 'added-manually'){
		res.redirect('manual-journey/manual')
	} else {
		res.redirect('file-upload')
	}
})

router.post('/bulk-upload/v5/manual-or-upload', (req, res) => {
	if(req.session.data['add-apprentice-option'] == 'added-manually'){
		res.redirect('manual-journey/manual')
	} else {
		res.redirect('file-upload')
	}
})



//Check and confirm apprentice details
router.post('/bulk-upload/file-upload-check', (req, res) => {
    if(req.session.data['bulk-upload-confirm'] == 'details-approve'){
        res.redirect('success')
    } else if(req.session.data['bulk-upload-confirm'] == 'details-save'){
        res.redirect('success-save-draft')
	} else if(req.session.data['bulk-upload-confirm'] == 'details-new-file'){
        res.redirect('amended-file')
    }
})

router.post('/bulk-upload/v3/file-upload-check', (req, res) => {
    if(req.session.data['bulk-upload-confirm'] == 'details-approve'){
        res.redirect('success')
    } else if(req.session.data['bulk-upload-confirm'] == 'details-review'){
        res.redirect('success-review')
    } else if(req.session.data['bulk-upload-confirm'] == 'details-save'){
        res.redirect('success-save-draft')
	} else if(req.session.data['bulk-upload-confirm'] == 'details-new-file'){
        res.redirect('amended-file')
    }
})

router.post('/bulk-upload/v4/file-upload-check', (req, res) => {
    if(req.session.data['bulk-upload-confirm'] == 'details-approve'){
        res.redirect('success')
    } else if(req.session.data['bulk-upload-confirm'] == 'details-save'){
        res.redirect('success-save-draft')
	} else if(req.session.data['bulk-upload-confirm'] == 'details-new-file'){
        res.redirect('amended-file')
    }
})

router.post('/bulk-upload/v5/file-upload-check', (req, res) => {
    if(req.session.data['bulk-upload-confirm'] == 'details-approve'){
        res.redirect('success')
    } else if(req.session.data['bulk-upload-confirm'] == 'details-save'){
        res.redirect('success-save-draft')
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

router.post('/bulk-upload/v4/amended-file', (req, res) => {
	if(req.session.data['new-file'] == 'no'){
		res.redirect('file-upload-check')
	} else {
		res.redirect('file-upload')
	}
})

router.post('/bulk-upload/v5/amended-file', (req, res) => {
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
		res.redirect('success-discard-file')
	}
})

router.post('/bulk-upload/v4/discard-file', (req, res) => {
	if(req.session.data['discard-file'] == 'no'){
		res.redirect('file-upload-check')
	} else {
		res.redirect('success-discard-file')
	}
})

router.post('/bulk-upload/v5/discard-file', (req, res) => {
	if(req.session.data['discard-file'] == 'no'){
		res.redirect('file-upload-check')
	} else {
		res.redirect('success-discard-file')
	}
})

//Duplicate apprentices
router.post('/bulk-upload/file-upload-duplicates', (req, res) => {
	if(req.session.data['duplicate-apprentice'] == 'remove'){
		res.redirect('file-upload')
	} else {
		res.redirect('file-upload-check')
	}
})

//MANUAL UPLOADS

//Manually add apprentice details
router.post('/bulk-upload/manual-journey/manual', (req, res) => {
	if(req.session.data['manual-add'] == 'existing-cohort'){
		res.redirect('existing-cohorts')
	} else {
		res.redirect('choose-employer')
	}
})

router.post('/bulk-upload/v4/manual-journey/manual', (req, res) => {
	if(req.session.data['manual-add'] == 'existing-cohort'){
		res.redirect('existing-cohorts')
	} else {
		res.redirect('choose-employer')
	}
})

router.post('/bulk-upload/v5/manual-journey/manual', (req, res) => {
	if(req.session.data['manual-add'] == 'existing-cohort'){
		res.redirect('existing-cohorts')
	} else {
		res.redirect('choose-employer')
	}
})


//Confirm employer - Levy
router.post('/bulk-upload/manual-journey/confirm-employer', (req, res) => {
	if(req.session.data['create-cohort'] == 'yes'){
		res.redirect('apprentice-details-add')
	} else {
		res.redirect('choose-employer')
	}
})

router.post('/bulk-upload/v4/manual-journey/confirm-employer', (req, res) => {
	if(req.session.data['create-cohort'] == 'yes'){
		res.redirect('apprentice-details-add')
	} else {
		res.redirect('choose-employer')
	}
})

router.post('/bulk-upload/v5/manual-journey/confirm-employer', (req, res) => {
	if(req.session.data['create-cohort'] == 'yes'){
		res.redirect('apprentice-details-add')
	} else {
		res.redirect('choose-employer')
	}
})

//Confirm employer - Non-levy
router.post('/bulk-upload/manual-journey/confirm-employer-non-levy', (req, res) => {
	if(req.session.data['create-cohort-non-levy'] == 'yes'){
		res.redirect('choose-reservation')
	} else {
		res.redirect('choose-employer')
	}
})

router.post('/bulk-upload/v4/manual-journey/confirm-employer-non-levy', (req, res) => {
	if(req.session.data['create-cohort-non-levy'] == 'yes'){
		res.redirect('choose-reservation')
	} else {
		res.redirect('choose-employer')
	}
})

router.post('/bulk-upload/v5/manual-journey/confirm-employer-non-levy', (req, res) => {
	if(req.session.data['create-cohort-non-levy'] == 'yes'){
		res.redirect('choose-reservation')
	} else {
		res.redirect('choose-employer')
	}
})

//Choose reservation
router.post('/bulk-upload/manual-journey/choose-reservation', (req, res) => {
	if(req.session.data['reservation'] == 'new'){
		res.redirect('choose-reservation')
	} else {
		res.redirect('apprentice-details-add')
	}
})

//PAS APPROVE APPRENTICE DETAILS PAGE (/mvs/cohort)

//Check and confirm apprentice details
router.post('/bulk-upload/file-upload-check', (req, res) => {
    if(req.session.data['bulk-upload-confirm'] == 'details-approve'){
        res.redirect('success')
    } else if(req.session.data['bulk-upload-confirm'] == 'details-save'){
        res.redirect('success-save-draft')
	} else if(req.session.data['bulk-upload-confirm'] == 'details-new-file'){
        res.redirect('amended-file')
    }
})

//Ready for approval
router.post('/cohort/mvs/approval', (req, res) => {
	if(req.session.data['send-employer'] == 'send-review'){
		res.redirect('confirmation-review')
	} else if(req.session.data['send-employer'] == 'send-approve'){
        res.redirect('confirmation-approve')
	} else if(req.session.data['send-employer'] == 'no'){
        res.redirect('apprentice-requests')
    }
})

//PAS APPROVE APPRENTICE DETAILS PAGE (/cohort)

//Ready for approval
router.post('/cohort/index', (req, res) => {
	if(req.session.data['send-employer'] == 'send-review'){
		res.redirect('confirmation-review')
	} else {
		res.redirect('confirmation-approve')
	}
})

//0 apprentices
router.post('/cohort/apprentices-0', (req, res) => {
	if(req.session.data['send-employer'] == 'no'){
		res.redirect('apprentice-requests')
	} else {
		res.redirect('confirmation-review')
	}
})

//Warnings page
router.post('/cohort/warning', (req, res) => {
	if(req.session.data['send-employer'] == 'no'){
		res.redirect('apprentice-requests')
	} else {
		res.redirect('confirmation-review')
	}
})

//411
router.post('/411/confirmation', function (req, res) {
  const editChoice = req.session.data['what-next']

  if (editChoice === 'invited-employers') {
    res.redirect('view-invited-employers')
  } else if (editChoice === 'homepage') {
    res.redirect('homepage')
  }
});


module.exports = router
