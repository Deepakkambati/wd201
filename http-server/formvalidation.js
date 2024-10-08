let element = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let user_entries = [];

function fillTable(){
    let obj = localStorage.getItem("user_entries");
    if(obj){
        user_entries = JSON.parse(obj);
    }else{
        user_entries = [];
    }
    return user_entries;
}
user_entries = fillTable();

let username = element("name"),
  email = element("email"),
  password = element("password"),
  tc = element("tc"),
  dob = element("dob");

let form = element("form");

function verify(elem, message, cnd) {
    if (cnd) {
        elem.style.border = "2px solid red";
        elem.setCustomValidity(message);
        elem.reportValidity();
    } else {
        elem.style.border = "2px solid green";
        elem.setCustomValidity('');
    }
}

function checkDOB(){
    let age = new Date().getFullYear() - new Date(dob.value).getFullYear();
    return age >= 18 && age <= 55;
}

username.addEventListener("input", (e) => {
    let cond_name = username.value.length < 3;
    e.preventDefault();
    verify(username, "Username must be at least 3 characters long", cond_name);
});

email.addEventListener("input", (e) => {
    let cond_email = !(email.value.includes("@") && email.value.includes("."));
    e.preventDefault();
    verify(email, "Email must be valid", cond_email);
});

dob.addEventListener("input", (e) => {
    let cond_dob = !checkDOB();
    e.preventDefault();
    verify(dob, "You age must be between 18 and 55", cond_dob);
});

tc.addEventListener("input", (e) => {
    let cond_agree = !tc.checked;
    e.preventDefault();
    verify(tc, "You must agree to the terms and conditions", cond_agree);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (tc.checked) {
        let obj = {
            name: username.value,
            email: email.value,
            password: password.value,
            dob: dob.value,
            checked: tc.checked
        };
        user_entries.push(obj);
        localStorage.setItem("user_entries", JSON.stringify(user_entries));
        displayTable();
    }
});

function displayTable() {
    let table = element("user-table");
    let entries = user_entries;
    let str = `<tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Date of Birth</th>
                    <th>Accepted terms?</th>
                </tr>\n`;
    for (let i = 0; i < entries.length; i++) {
        str += `<tr>
                    <td>${entries[i].name}</td>
                    <td>${entries[i].email}</td>
                    <td>${entries[i].password}</td>
                    <td>${entries[i].dob}</td>
                    <td>${entries[i].checked}</td>
                </tr>\n`;
    }
    table.innerHTML = str;
}

window.onload = displayTable;
