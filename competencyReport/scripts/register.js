let pets = [];

function Pet(name, color, age, gender, breed, owner, phone, service){
    this.name = name;
    this.color = color;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.owner = owner;
    this.phone = phone;
    this.service = service;
}

function submitForm(event) {
    event.preventDefault();

    let petName = document.getElementById("txtName").value;
    let petColor = document.getElementById("txtColor").value;
    let petAge = document.getElementById("txtAge").value;
    let petGender = document.getElementById("txtGender").value;
    let petBreed = document.getElementById("txtBreed").value;
    let petOwner = document.getElementById("txtOwner").value;
    let petPhone = document.getElementById("txtPhone").value;
    let petService = document.getElementById("selService").value;

    let pet = new Pet(petName,petColor, petAge, petGender, petBreed, petOwner, petPhone, petService);
    pets.push(pet);
    resetForm();
    insertPetToTable(petName,petColor, petAge, petGender, petBreed, petOwner, petPhone, petService);;
}

function resetForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtColor").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtOwner").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("selService").value = "nails cut";
}

function insertPetToTable(petName, petColor, petAge, petGender, petBreed, petOwner, petPhone, petService){
    var table = document.getElementById("petsTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = petName;
    cell2.innerHTML = petColor;
    cell3.innerHTML = petAge;
    cell4.innerHTML = petGender;
    cell5.innerHTML = petBreed;
    cell6.innerHTML = petOwner;
    cell7.innerHTML = petPhone;
    cell8.innerHTML = petService;
}

function searchPet(event) {
    event.preventDefault();

    let input = document.getElementById("txtSearch").value;
    let table = document.getElementById("petsTable");
    let tr = table.getElementsByTagName("tr");
    let found = false;

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
       
        if (td) {
            if (input == td.textContent){
                found = true;
                tr[i].style.color = "red";
            } else {
                tr[i].style.color = "black";
            } 
        } 
    } 
    
    if(found == false){
        alert("Pet Not Found. Please Re-enter pet's name");
        input.value = "";
    }
}

function deletePet(event) {
    event.preventDefault();

    let input = document.getElementById("txtDelete").value;
    let table = document.getElementById("petsTable");
    let tr = table.getElementsByTagName("tr");
    let found = false;

    
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
       
        if (td) {
            if (input == td.textContent){
                tr[i].remove();
                found = true;
                break;
            } 
        } 
    } 
    
    if(found == false){
        alert("Pet Not Found. Please Re-enter pet's name");
        input.value = "";
    }
    
}
