const save = document.querySelector('#save')

function registerPatient(e){
    e.preventDefault()

    const firstName = document.querySelector('#firstName').value
    const lastName = document.querySelector('#lastName').value
    const dateOfBirth = document.querySelector('#dateOfBirth').value
    const gender = document.querySelector('#gender').value

    let patientData = {
        firstName,
        lastName,
        dateOfBirth,
        gender
    }

    console.log(patientData)

    fetch('/api/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patientData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Patient registered:', data)

    })
    .catch(error => console.error('Error registering patient:', error))
}

save.addEventListener('click', registerPatient)

document.querySelector('#clear').addEventListener('click', clearForm)

function clearForm(){
    document.querySelector('#patientRegistrationForm').reset()
}


function saveVisitDetails(e){
    e.preventDefault()

    const date = document.querySelector('#date').value
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const generalHealth = document.querySelector('input[name="generalHealth"]:checked').value
    const onDiet = document.querySelector('input[name="onDiet"]:checked').value
    const areTakingDrugs = document.querySelector('input[name"areTakingDrugs"]:checked').value
    const comments = document.querySelector('#comments').value
    const bmi = calculateBMI(height, weight)

    let visitData = {
        date,
        height,
        weight,
        bmi,
        generalHealth,
        onDiet,
        areTakingDrugs,
        comments
    }

    fetch('/api/patients/visits', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visitData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Visit details saved:', data)


    })
    .catch(error => console.error('Error saving visit details:', error))
}

function calculateBMI(height, weight){
    if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0){
        return null
    }

    const heightInMeters = height/100
    return (weight / (heightInMeters * heightInMeters)).toFixed(2)
}

//document.querySelector('#height').addEventListener('input', calculateBMI)
//document.querySelector('#weight').addEventListener('input', calculateBMI)

//Conditional rendering of section A and section B
// function toggleSections(){
//     const bmi = parseFloat(document.querySelector('#bmi').value)
//     const sectionA = document.querySelector('#sectionAForm')
//     const sectionB = document.querySelector('#sectionBForm')

//     if(!isNaN(bmi)){
//         if(bmi < 25){
//             sectionA.style.display = 'block'
//             sectionB.style.display = 'none'
//         }else{
//             sectionA.style.display = 'none'
//             sectionB.style.display = 'block'
//         }
//     }
// }

// toggleSections()