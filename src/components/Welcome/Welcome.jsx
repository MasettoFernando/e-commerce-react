import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Typography } from "@mui/material";
import './Welcome.css' 

const Welcome = () => {
  
    const { user } = useContext(UserContext)

    return (
        <div className="welcome">
            <Typography variant="h1">
            {`Bienvenido  ${user ? user.userName : ''}`}
            </Typography>
        </div>
    )

}

export default Welcome;