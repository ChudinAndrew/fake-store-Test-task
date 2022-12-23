import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { AppWrpapper } from "../../styles";
import ListPage from "../ListPage/ListPage";
import ProductInfo from "../ProductInfo/ProductInfo";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import OrderC from "../Order/Order";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/pagelist/*" element={<ListPage />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/order/" element={<OrderC />} />
        <Route path="/signup/" element={<SignUp />} />
        <Route path="/login/" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
