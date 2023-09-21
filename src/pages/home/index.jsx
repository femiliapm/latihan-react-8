import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const data = await axios.get(
        "http://hplussport.com/api/products/order/price"
      );
      console.log(data, "from axios");
      console.log(data.data, "datanya");
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <main>
        <section className="header">
          <h2>Products</h2>
          <div className="input">
            <input type="text" name="search" id="search" />
          </div>
        </section>

        <section className="prod">
          {/* card product */}
          <Card
            imgProd={
              "https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80"
            }
            price={`Rp ${100000}`}
            name={"Brownies"}
          />

          {products.map((p) => {
            return (
              <Card
                key={p.id}
                imgProd={p.image}
                price={p.price}
                name={p.name}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;
