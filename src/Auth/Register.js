import { useNavigate } from "react-router-dom"
import "./Login.css"
import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./Login.css"
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';





export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        username: "",
    })
    let navigate = useNavigate()
    const theme = createTheme();
    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("meltdown_user", JSON.stringify({
                        id: createdUser.id,
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
      
          {/* Hero unit */}
          <Box
          sx={{
            bgcolor: '#d7e4fc',
            pt: 8,
            pb: 6,
          }}
        >
    
            <Container maxWidth="lg">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
               How Was Hoagie's Day?
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Register to Record Hoagie's Big Feelings
              </Typography>
              </Container></Box>
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
            <h2>Sign-Up Below</h2>
                <fieldset>
                    <label htmlFor="username"> User Name </label>
                    <input onChange={updateUser}
                           type="text" id="username" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                
                <fieldset>
                <Button varient='contained' align='center' type="submit">
                            Submit
                        </Button>                
                        </fieldset>
            </form>
        </main>
    </ThemeProvider> </>
    
}