import { Outfit } from "next/font/google";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";


const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    <Header/>
    </div>
  );
}
