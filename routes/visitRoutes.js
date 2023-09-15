const express = require('express')
const router = express.Router()
const Visit = require('../models/visit')

router.get('/', (req, res) => {
    res.sendFile('visits.html', {root: 'public'})
})

router.post('/', async (req, res) => {
    try{
        const visit = new Visit(req.body)
        await visit.save()
        res.redirect('/')
        res.json({success: true, message: 'Visit details saved successfully'})
    }catch(error){
        res.status(500).json({success: false, message: error.message})
    }
})

module.exports = router