import {FC, SyntheticEvent, useState} from "react";
import {Button, ButtonGroup, Grid, TextField} from "@mui/material";
import {IUserData} from "./types";

export const Auth:FC = () => {
    const [isRegForm, setIsRegForm] =useState(false)
    const [userData, setUserData] = useState <IUserData>({
        email: '',
        password: '',
    } as IUserData);



    const handleLogin = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isRegForm){
            console.log('register')
        } else {
            console.log('auth')
        }
        console.log(userData.email, userData.password)

        setUserData({
            email: '',
            password: '',
        })
    }

    return (
        <Grid display='flex' justifyContent='center' alignItems='center'>
            <form onSubmit={handleLogin}>
                <TextField
                    type='email'
                    label="Email"
                    variant="outlined"
                    value={userData.email}
                    sx={{
                        display: 'block',
                        marginBottom: 3,
                    }}
                    onChange={e => setUserData({...userData, email: e.target.value})}
                    required
                />
                <TextField
                    type='password'
                    label="Password"
                    variant="outlined"
                    value={userData.password}
                    sx={{
                        display: 'block',
                        marginBottom: 3,
                    }}
                    onChange={e => setUserData({...userData, password: e.target.value})}
                    required
                />
                <ButtonGroup variant="outlined">
                    <Button type='submit' onClick={() => setIsRegForm(false)}>Auth</Button>
                    <Button type='submit' onClick={() => setIsRegForm(true)}>Register</Button>
                </ButtonGroup>
            </form>
        </Grid>

    )
}
