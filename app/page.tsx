import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main";

export default function Home() {
  let counter=0
  return (
    <div className="bg-yellow-500 p-10">
     <Navigation/>
     <Main counter={counter}/>
     counter:{counter}
    </div>
  );
}
