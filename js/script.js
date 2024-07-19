
let uname = document.getElementById("fname");
let lname = document.getElementById("lname");
let umail = document.getElementById("umail");
let pass = document.getElementById("pass");
let add = document.getElementById("add");
let city = document.getElementById("city");
let state = document.getElementById("state");

let showData = document.getElementById("showData");


let isEdit = false;
let isIndex;


const getData = () => {

    let data = JSON.parse(localStorage.getItem("submit_data"));

    if(data) {
        return data;
    } else {
        return [];
    }
}

let Storage = getData();

const FormData = () => {
    event.preventDefault();

    let product = {
        id : isIndex ? isIndex : Math.floor(Math.random() * 100),
        name : uname.value,
        lname: lname.value,
        umail: umail.value,
        pass : pass.value,
        add : add.value,
        city : city.value,
        state : state.value
    }

    if(isEdit) {
      data = [...Storage];

      const updataData = data.map((recod) => {

        if(recod.id == isIndex) {
            return product
        } else {
            return recod
        }
        
      })

      Storage = updataData;
    } else {
        if(uname == "") {

        }
        Storage = [...Storage ,product]
        console.log("product", product);
    }



    localStorage.setItem("submit_data", JSON.stringify(Storage))

    uname.value  = "";
    lname.value = "";
    umail.value = "";
    pass.value = "";
    add.value = "";
    city.value = "";
    state.value = "";

    displyData();
}

const displyData = () => {
    showData.innerHTML = "";

    Storage.forEach(rec => {
        showData.innerHTML += `<tr>
                                    <th scope="row">${rec.id}</th>
                                    <td>${rec.name}</td>
                                    <td>${rec.lname}</td>
                                    <td>${rec.umail}</td>
                                    <td>${rec.pass}</td>
                                    <td>${rec.add}</td>
                                    <td>${rec.city}</td>
                                    <td>${rec.state}</td>
                                     <td>
                                        <button class="btn btn-primary" onclick="editData(${rec.id})">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger" onclick="deleteData(${rec.id})">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                        </svg>
                                        </button>
                                    </td>
                                </tr>`
    });
}
displyData();

const editData = (id) => {
    let data = [...Storage];

    let singlerec = data.filter((edId) => {
        return edId.id == id;
    })

    uname.value  = singlerec[0].name;
    lname.value = singlerec[0].lname;
    umail.value = singlerec[0].umail;
    pass.value = singlerec[0].pass;
    add.value = singlerec[0].add;
    city.value = singlerec[0].city;
    state.value = singlerec[0].state;

    isEdit = true;
    isIndex = id;
}

const deleteData = (id) => {
    let data = [...Storage];
    let deletData = data.filter((delId) => {
        return delId.id != id;
    });
    localStorage.setItem("submit_data" , JSON.stringify(deletData));
    Storage = getData();
    displyData();
}
