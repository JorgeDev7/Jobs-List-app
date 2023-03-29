// Components
import JobList from "./components/JobList";

function App() {

  return (
    <>
      <header className="max-sm:bg-[url(./assets/bg-header-mobile.svg)] h-40 w-full bg-desaturatedDarkCyan bg-cover sm:bg-[url(./assets/bg-header-desktop.svg)]">
      </header>

      <JobList />
    </>
  )
}

export default App
