import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import "./App.css";
import { AppWrpapper } from "../../styles";
import ListPage from "../ListPage/ListPage";
import ProductInfo from "../ProductInfo/ProductInfo";
import Order from "../Order/Order";
import SignUp from "../SignUp/SignUp";

function App() {
  return (
    <AppWrpapper>
      <Header />
      <Routes>
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/pagelist/*" element={<ListPage />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/order/" element={<Order />} />
        <Route path="/signup/" element={<SignUp />} />
      </Routes>
    </AppWrpapper>
  );
}

export default App;
 