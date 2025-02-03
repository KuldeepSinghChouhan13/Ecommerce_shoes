import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Product = ({ addCart }) => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]); 
  const [select, setSelect] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const getProduct = () => {
      fetch(`https://dummyjson.com/products/category-list`)
        .then((res) => res.json())
        .then((data) => {
          const filterP = data.filter((product) =>
            ["mens-shoes", "womens-shoes", "mens-watches", "womens-watches"].includes(product)
          );
          setProducts(filterP);
        });
    };
    getProduct();
  }, []);

  useEffect(() => {
    const getItem = () => {
      if (select) {
        fetch(`https://dummyjson.com/products/category/${select}`)
          .then((res) => res.json())
          .then((data) => {
            setItems(data.products);
            setFilteredItems(data.products); 
          });
      }
    };
    getItem();
  }, [select]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchItem(query);

    const searchResults = items.filter((item) =>
      item.title.toLowerCase().includes(query)
    );

    setFilteredItems(searchResults); 
  };

  const notify = () => toast.success("Your item is added");

  return (
    <div className="mt-16">
      <div className="flex justify-center gap-3 flex-wrap">
        {products.map((allPro, index) => (
          <div className="border" key={index}>
            <button
              className="bg-black hover:bg-gray-500 hover:text-black border text-white px-3 py-1 mt-4"
              onClick={() => setSelect(allPro)}
            >
              {allPro}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <input
          type="text"
          placeholder="Search items"
          className="border-gray-500 border-2 rounded px-2 py-2"
          onChange={handleSearch}
          value={searchItem}
        />
      </div>

      <div className=" mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((itemDetail) => (
              <div
                key={itemDetail.id}
                className="p-4 bg-white shadow-lg rounded-lg border hover:shadow-xl transition-shadow duration-300"
              >
                <a className="block relative h-50 overflow-hidden rounded-t-lg">
                  <img
                    src={itemDetail.thumbnail}
                    alt={itemDetail.title}
                    className="object-cover object-center w-full h-full"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {itemDetail.title.length>20?`${itemDetail.title.slice(0,20)}...`:itemDetail.title}
                  </h3>
                  <p className="text-gray-600 mb-2">Price: ${itemDetail.price}</p>
                  <div>
                    <button
                      className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-400"
                      onClick={() => {
                        addCart(itemDetail);
                        notify();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-2.5">No items found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
