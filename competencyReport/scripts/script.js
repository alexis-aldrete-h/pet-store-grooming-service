let pets = [];

function submitForm(event) {
    event.preventDefault();

    let petName = document.getElementById("txtName").value;
    pets.push(petName);

    displayPetsNames();
    alert ("Pet Registered Succesfully! \nYou have "+pets.length+" registered pets.");

    resetForm();
}

function displayPetsNames(){
    console.log("")
    pets.forEach(pet => {
        console.log(pet);
    });
}

function resetForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtOwner").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("selService").value = "nails cut";
}

// NEW ASSIGNMENT SCRIPT
let salonInfo = {
    salonName: 'Petsland',
    schedules : {
        monday: "Monday 9 am - 8 pm",
        tuesday: "Tuesday 9 am - 7 pm",
        wednesday: "Wednesday 9 am - 8 pm",
        thursday: "Thursday 9 am - 7 pm",
        friday: "Friday 9 am - 6pm",
        saturday: "Saturday 9 am - 2 pm"
    },
    phoneNumber : "123-45-67",
    location: "Example Street 1234 Chula Vista, CA. USA"
};

function displaySalonInfo (){
    document.getElementById("salonName").innerHTML = "Welcome to " +salonInfo.salonName;

    document.getElementById("monday").innerHTML = salonInfo.schedules.monday;
    document.getElementById("tuesday").innerHTML = salonInfo.schedules.tuesday;
    document.getElementById("wednesday").innerHTML = salonInfo.schedules.wednesday;
    document.getElementById("thursday").innerHTML = salonInfo.schedules.thursday;
    document.getElementById("friday").innerHTML = salonInfo.schedules.friday;
    document.getElementById("saturday").innerHTML = salonInfo.schedules.saturday;

    document.getElementById("phoneNumber").innerHTML = salonInfo.phoneNumber;
    document.getElementById("location").innerHTML = salonInfo.location;
}
    
window.onload= displaySalonInfo ();





