import {Header} from "./header";
import {Sidebar} from "./sidebar";
import {ReactNode} from "react";
import {Grid} from "@mui/material";

interface ILayout {
    children: ReactNode
}

export const Layout =({children}:ILayout) =>{
    return(
        <>
            <Header/>
            <Grid container spacing={2} paddingX={5} marginTop={2}>
                <Grid item md={3}>
                    <Sidebar/>
                </Grid>
                <Grid item md={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}
