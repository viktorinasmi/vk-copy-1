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
            <Grid container spacing={2} marginX={5} marginTop={2}>
                <Grid item md={2}>
                    <Sidebar/>
                </Grid>
                <Grid item md={10}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}
