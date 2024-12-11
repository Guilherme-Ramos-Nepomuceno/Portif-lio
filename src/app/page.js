
import Image from "next/image";
import  Header  from "./components/header";
import './fonts/fonts.css'
import SwipeCards from "./components/slides";
import Footer from "./components/Footer";


export default function Home() {
 return (
    <div>
      <Header></Header>
      <main className="h-full w-100vw bg-gray-200">
        <div className="h-96 mt-20 w-[-webkit-fill-available] bg-slate-100 flex flex-col justify-end items-center">
          <Image alt={"imagem"} height={200} width={200} src={"/images/Home.WEBP"}/>
          <h1 style={{color: "#1f2737"}} className="Font-Mangoblack text-6xl md:text-7xl transform">Bem vindo!</h1>
          <h1 style={{color: "#1f2737"}} className="Font-Mangoextrabold mb-10 text-2xl text-center md:text-4xl">Aqui você vai ver todos os meus projetos separados por stack</h1>
        </div>
      <div>
        <div style={{ background: "#1f2737",color: "#f1f5f9"}} className="h-24 md:h-36 w-full grid items-center">
          <h1  className="Font-Mangoblack text-5xl mt-4 md:text-6xl text-center w-full">
            Front-end
          </h1>
          <p className="font-bol h-auto text-center text-sm -mt-8 md:-mt-20 ">(mova o card)</p>
        </div>
        <SwipeCards FilterKey={"front_end"} bgcor={"#1f2737"} cor={"#f1f5f9"}/></div>
      <div>
        <div style={{ background: "#f1f5f9",color: "#1f2737"}} className="h-20 md:h-32 w-full grid items-center">
            <h1  className="Font-Mangoblack text-5xl mt-4 md:text-6xl text-center w-full">
              Back-end
            </h1>
          </div>
        <SwipeCards FilterKey={"back_end"} bgcor={"#f1f5f9"} cor={"#1f2737"}/></div>
      <div>
        <div style={{ background: "#1f2737",color: "#f1f5f9"}} className="h-20 md:h-32 w-full grid items-center">
            <h1  className="Font-Mangoblack mt-4 text-5xl md:text-6xl text-center w-full">
              Data-science
            </h1>
          </div>
        <SwipeCards FilterKey={"datas"} bgcor={"#1f2737"} cor={"#f1f5f9"}/></div>
      </main>
      <Footer></Footer>
    </div>
  );
}
