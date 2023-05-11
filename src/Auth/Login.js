import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


export const Login = () => {
    const [email, set] = useState("hoagie@dog.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const meltdownUser = foundUsers[0]
                    localStorage.setItem("meltdown_user", JSON.stringify({
                        id: meltdownUser.id,
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }
    const theme = createTheme();

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
              Record Hoagie's Big Feelings to Better Support His Wellbeing
              </Typography>
              </Container></Box>
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    
                    <h2>Please Sign In</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <Button varient='contained' align='center' type="submit">
                            Sign in
                        </Button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Don't have an account yet?</Link>
            </section>
        </main>
        </ThemeProvider>
</>
}