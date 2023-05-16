import chatBot from "@/assets/chatBot.json";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { Testimonials } from "@/components/Testimonials";
import Lottie from "lottie-react";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <div className="relative z-10">
                <NavBar />
                <Header />
                <div className="pt-24 md:pt-56">
                    <Banner />
                </div>
                <Testimonials />
                <Footer />
            </div>
            <Lottie
                animationData={chatBot}
                className="bg-black h-screen w-full absolute top-20 left-0"
                // loop={false}
            />
        </>
    );
}

export default App;
