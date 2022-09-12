import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

import Catalog from "./Catalog/Catalog";
import Cart from "./Cart/Cart";
import SearchInput from "./Search/Search";

import style from "./Header.module.css";


const Header = (props) => {

    return (
        <AppBar>
            <Toolbar>

                {/*catalog*/}
                <Catalog/>

                <Typography
                    variant="h4"
                    component="span"
                    className={style.typography}
                >
                    Internet shop
                </Typography>

                {/*search input*/}
               <SearchInput searchItems={props.searchItems} />

                {/*cart*/}
                <Cart order={props.order} removeOrder={props.removeOrder}/>

            </Toolbar>
        </AppBar>
    );
}

export default Header