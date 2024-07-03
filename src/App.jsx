import Footer from "./pages/Footer";
import "animate.css"; // Import animate.css
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/blog/Blogs";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import PrinterOffline from "./pages/setupPages/PrinterOffline";
import PrinterSetup from "./pages/setupPages/PrinterSetup";
import ScannerSetup from "./pages/setupPages/ScannerSetup";
import PrivacyPolicy from "./pages/setupPages/PrivacyPolicy";
import FAQ from "./pages/setupPages/FAQ";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/printeroffline" element={<PrinterOffline />} />
        <Route path="/printersetup" element={<PrinterSetup />} />
        <Route path="/scannersetup" element={<ScannerSetup />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQ />} />

        <Route path="/blogdeatil/:blogId" element={<BlogDetailPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
