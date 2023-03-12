import { Component } from "react";
import "../styles/Global.css";

export default function App({Component, pageProps}) {
    return <Component {...pageProps}/>
}