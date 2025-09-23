import Header from "./components/header/Header";
import Matches from "./components/matches/Matches";
import "../globals.css";
export default function ClientPage() {
  return (
    <>
      <main>
        <div className="bg-main"><Header /></div>
          <Matches/>
      </main>
      
    </>
  );
}