import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/features/post/components/Hero";

const post = () => {
    return (
        <div className="bg-background min-h-screen" >

            <Navbar />
            <main >
                <Hero />
            </main>
            {/* <Footer /> */}
            <Footer />

        </div>
    )
}

export default post;
