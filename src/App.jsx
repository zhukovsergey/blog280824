import { useState } from "react";

import Header from "./components/Header";
import Layout from "./components/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      
        <Header />
        
      
    </Layout>
  );
}

export default App;
