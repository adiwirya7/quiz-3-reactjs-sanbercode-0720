import React from 'react';


let datadiri ={
    Nama: "Adi Wirya", 
    Email: "adiwirya777@gmail.com",
    Telegram: "Adi Wirya", 
    Github: "adiwirya7", 
    OS: "Windows 10"}

  
class About extends React.Component {
    
    render() {
        return (
            <div className="content">
                <div className="box">
                    <div style={{padding:"2%"}}>
                        <h1 style={{textAlign:"center"}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>                            
                            <div style={{textAlign:"left",width:"50%",margin:"auto", padding:10}}>
                            <p><strong>Nama: </strong>{datadiri.Nama}</p>
                            <p><strong>Email: </strong>{datadiri.Email}</p>
                            <p><strong>Sistem Operasi yang digunakan: </strong>{datadiri.OS}</p>
                            <p><strong>Akun Github: </strong>{datadiri.Github}</p>
                            <p><strong>Akun Telegram: </strong>{datadiri.Telegram}</p>
                            </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About