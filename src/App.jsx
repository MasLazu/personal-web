import { Route, Routes } from "react-router-dom";

import Navigation from "./layout/Navigation";
import About from "./page/About";
import Porto from "./page/Porto";
import Schedule from "./page/Schedule";
import Article from "./page/Article";
import ReactArticle from "./page/article/ReactArticle";
import CssArticle from "./page/article/CssArticle";
import HtmlArticle from "./page/article/HtmlArticle";
import JsAtricle from "./page/article/JsArticle";
import TailwindArticle from "./page/article/TailwindArticle";
import CaraDeoloyWebArticle from "./page/article/CaraDeployWeb";
import TugasJavascript from "./page/article/TugasJavascriptArticle";
import TugasMakalahInternet from "./page/article/TugasMakalahInternetArticle";

function App() {
  return (
    <div className="m-0 p-0 bg-[#F0F3F6] grid grid-cols-6 lg:grid-cols-12 md:grid-cols-8 w-[100vw] h-[100vh]">
      <Navigation />
      <Routes basename="/personal-web/index.html">
        <Route path="/" element={<About />} />
        <Route path="/porto" element={<Porto />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/react" element={<ReactArticle />} />
        <Route path="/article/css" element={<CssArticle />} />
        <Route path="/article/html" element={<HtmlArticle />} />
        <Route path="/article/javascript" element={<JsAtricle />} />
        <Route path="/article/tailwind" element={<TailwindArticle />} />
        <Route
          path="/article/cara-deploy-web"
          element={<CaraDeoloyWebArticle />}
        />
        <Route path="/article/tugas-javascript" element={<TugasJavascript />} />
        <Route
          path="/article/tugas-makalah-internet"
          element={<TugasMakalahInternet />}
        />
      </Routes>
    </div>
  );
}

export default App;
