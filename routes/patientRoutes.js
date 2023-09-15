const express = require('express')
const router = express.Router()
const Patient = require('../models/patient')
const Visit = require('../models/visit')

router.get('/', (req, res) => {
    res.sendFile('registration.html', {root: 'public'})
})

router.post('/', async(req, res) => {
    try{
        const patient = new Patient(req.body)
        await patient.save()
        //.then(savedPatient => {
        //    console.log('Patient saved:' savedPatient)
        //})
        res.redirect('/visits')
        res.json({success: true, message: 'Patient created successfully'})
    }catch(error){
        res.status(500).json({success: false, message: error.message})
    }
})

router.get('/visits', async(req, res) => {
    res.sendFile('visits.html', {root: 'public'})
})

router.post('/visits', async(req, res) => {
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