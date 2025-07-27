import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CyberServices from "./pages/CyberServices";
import Entertainment from "./pages/Entertainment";
import GraphicsDesign from "./pages/GraphicsDesign";
import Construction from "./pages/Construction";

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
