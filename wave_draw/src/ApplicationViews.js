import React from "react"
import { Route } from "react-router-dom"
import { MainPage } from "./mainPage/mainPage"

export const ApplicationViews = () => (
    <>
            <Route exact path="/" render={() => {
                            return <>
                                <MainPage />
                            </>
                        }} />
</> 
)