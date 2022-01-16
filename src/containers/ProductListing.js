import React, { useEffect /*, useCallback, useMemo */ }  from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () =>  {
  const products = useSelector((state) => state.allProducts.products);
  // const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

console.log("Products :", products);
// console.log(products);
return (
    <div className="ui grid container">
      {/* <ProductListing /> */}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

