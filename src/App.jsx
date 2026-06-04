import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";

const App = () => {
  return(
    <main className="h-full w-full bg-white">
      <SignIn />
      <Navbar />
    </main>
  )
}

export default App;