import "../styles/Global.css";
import Header from "../global/Header";

export default function App({Component, pageProps}) {
    return (
        <>
        <Header/>
        <Component {...pageProps}/>
        </>
    )
}