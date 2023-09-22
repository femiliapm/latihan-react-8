import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import LayoutV1 from "../../layouts/v1";
import { getProducts } from "../../services/product";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchValue] = useState("");
  // const [prodSearch, setProdSearch] = useState([]);

  const getData = async () => {
    try {
      const data = await getProducts();
      console.log(data, "from axios");
      // console.log(data.data, "datanya");
      setProducts(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const searchProduct = () => {
  //   if (searchVal === "") {
  //     const data = getData();
  //     setProducts(data);
  //     return;
  //   }

  //   setProducts(result);
  // };

  const result = products.filter((product) =>
    product.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <LayoutV1>
      {/* isi di dalam sini akan masuk sebagai children */}

      <section className="header">
        <h2>Products</h2>
        <div className="input">
          <input
            type="text"
            name="search"
            id="search"
            value={searchVal}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {/* <button className="btn btn-info" onClick={searchProduct}>
            Search
          </button> */}
        </div>
      </section>

      <section className="prod">
        {/* card product */}
        {/* <Card
            imgProd={
              "https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80"
            }
            price={`Rp ${100000}`}
            name={"Brownies"}
            id={"1"}
          /> */}

        {products ? (
          result.map((p) => {
            return (
              <Card
                key={p.id}
                imgProd={p.image}
                price={`Rp ${p.price}`}
                name={p.name}
                id={p.id}
              />
            );
          })
        ) : (
          <p>No Data!</p>
        )}
      </section>
    </LayoutV1>
  );
};

export default Home;
