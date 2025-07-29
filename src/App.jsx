import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CyberServices from "./Pages/CyberServices";
import Entertainment from "./Pages/Entertainment";
import GraphicsDesign from "./Pages/GraphicsDesign";
import Construction from "./Pages/Construction";

export default function App() {
  return (
    <Router>
      <Layout currentPageName="Home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cyberservices" element={<CyberServices />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/graphicsdesign" element={<GraphicsDesign />} />
          <Route path="/construction" element={<Construction />} />
        </Routes>
      </Layout>
    </Router>
  );
}
