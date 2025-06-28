import { useState } from "react";
import { Form } from "react-router-dom";


const FormAdmins = () => {
    let [admins, setAdmins] = useState(
         [{
        name: "cuco",
        email: "saban"
    },{
        name : "sabani",
        email : "sabanimail",
    }]
    );
    let [adminName, setAdminName] = useState("");
    let [adminEmail, setAdminEmail] = useState("");

    const handleSubmit = (e) => {
        let adminEmailValid = false;
        e.preventDefault();
        console.log("Admin name + email :  ", adminName, adminEmail );
        
        let mailParts = adminEmail.split("@");
        console.log("Mail parts after splitting",mailParts.length );
        
        if(mailParts.length != 2){
            window.alert("Email format not correct");
        }else if(mailParts.length == 2){
            adminEmailValid = true;
        }


        if(adminEmailValid){
        setAdmins([...admins, {name: adminName , email : adminEmail}]);
        }else if(!adminEmailValid){
            window.alert("Email must be in format abc@abc.com");
        }

        setAdminEmail("");
        setAdminName("");
    }

     function mapCallBackfunction(admin, index){
        console.log("Inside call back function for map");
        
        return (
        <li>
           {index} : Admin name = {admin.name} ********* admin email : {admin.email}
        </li>
        );
    }

    

    return (
        <>
        <ul>
            {admins.map(mapCallBackfunction)}
        </ul>
            <form onSubmit={handleSubmit}>
                <input value={adminName} onChange={(e) => setAdminName(e.target.value)} />
                <input value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                <br></br>
                <button type="submit">Add admin</button>
            </form>
        </>
    );
}

export default FormAdmins