// login using props

function login(props){
    if(props.login){
        return(
            <div>
                <button>login</button>
            </div>
        );
    }
    else{
        return(
            <div className="login">login false</div>
        );
    }

}

// login.prototype={

// }
export default login