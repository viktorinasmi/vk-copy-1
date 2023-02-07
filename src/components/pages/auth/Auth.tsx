import {FC, SyntheticEvent, useState} from "react";
import {Alert, Button, ButtonGroup, Grid, TextField} from "@mui/material";
import {IUserData} from "./types";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export const Auth:FC = () => {
    const [isRegForm, setIsRegForm] =useState(false)
    const [userData, setUserData] = useState <IUserData>({
        email: '',
        password: '',
    } as IUserData);

    const [error, setError] = useState('')


    const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const auth =getAuth()

        //register
        if (isRegForm){
            try {
            await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password)
            }
            catch (error:any) {
                error.message && setError(error.message)
            }
        } else { //auth
            try {
                await signInWithEmailAndPassword(
                    auth,
                    userData.email,
                    userData.password)
            }
            catch (error:any) {
                error.message && setError(error.message)
            }
        }
        console.log(userData.email, userData.password)

        setUserData({
            email: '',
            password: '',
        })
    }

    return (
        <>
            {error && <Alert severity="error" style={{marginBottom:20}}>
                {error}
            </Alert>}
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
        </>
    )
}
