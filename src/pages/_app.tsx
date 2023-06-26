import "../styles/Global.css";
import Header from "../components/common/Header/Header";
import Footer from "@/components/common/footer/Footer";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <RecoilRoot>
        <Component {...pageProps} id="component" />
      </RecoilRoot>
      <Footer />
    </>
  );
}
