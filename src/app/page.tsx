import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PostsGrid />
      </main>
      <Footer />
    </div>
  );
}
