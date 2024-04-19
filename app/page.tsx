
import Cover from "./componets/Cover-particle";
import TransitionPage from "./componets/transition-page";
import Introduction from "./componets/introduction";


export default function Home() {
  return (
    <main>
       <TransitionPage></TransitionPage>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">

           <Cover/>
           
           <Introduction/>
       
      </div>
    </main>
  );
}
