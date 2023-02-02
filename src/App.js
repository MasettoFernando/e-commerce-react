import Header from "./components/Header/Header.jsx"
import ItemListContainers from "./components/ItemListContainers/ItemListContainers.jsx"
import Layout from "./components/Layout/Layout.jsx";

function App() {
  
  return (
    <div className="App" style={{
      backgroundColor:" #2f508b ",
      height: "100vh"
    }}>
      <Layout  >
      <Header />
      <ItemListContainers usuario= "Fernando" apellido= "Masetto" edad= "28" />
      <ItemListContainers usuario= "Gonzalo" apellido= "Masetto" edad= "23" />
      </Layout>
      
    </div>   
  );
}

export default App;
