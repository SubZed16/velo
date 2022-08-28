import React from "react";
import { Button} from "../../components";
import "./AccountCreating.css"

const AccountCreating=()=>{
    return(
        <div className="app__createAccount_container">
            <div className="triangle redTop"/>
            <form>
            <div className="connexion_btn">
            <Button 
                 title="Connexion"
                 color="#06B2F8"
                 width="12rem"
                 fontSize="21px"
                 borderRadius="30px"
                        />
            </div>
                <p className="app__createAccount_container-headText">Créer un compte</p>
                <div className="create_text_inputs">
                    <input type="text" placeholder="Nom" name="name"/>
                    <input type="text" placeholder="Prenom" name="lastName"/>
                </div>
                <div className="app__createAccount_container-mail">
                    <input type="emaim" placeholder="E-mail" name="email"/>
                </div>
                <div className="create_text_inputs">
                    <input type="text" placeholder="Mot de pass" name="password"/>
                    <input type="text" placeholder="Comfirmer mot de pass" name="passwordConf"/>
                </div>
                <Button 
                 title="Inscrivez-vous"
                 color="#FF4C65" 
                 width="18rem"
                 height="5.1rem"
                 fontSize="27px"
                 borderRadius={false}
                />
            </form>
            <div className="triangle redBottom"/>
        </div>
    )
}

export default AccountCreating;