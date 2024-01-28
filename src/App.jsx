import NewProject from "./components/NewProject.jsx";
import ProjectSideBar from "./components/ProjectsSideBar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NewProject />
    </main>
  );
}

export default App;
