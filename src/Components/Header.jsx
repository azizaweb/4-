
              // import React, { useState, useEffect } from "react";
              // import { ShoppingCart, Heart, User } from "lucide-react";
              // import { IoIosSearch } from "react-icons/io";


              // import Logo from "../assets/Logo.jpg";
              // import Image1 from "../assets/Image.png";                                                          
              // import Image2 from "../assets/Image2.png";
              // import Image3 from "../assets/Image3.png";
              // import Image4 from "../assets/Image4.png";
              // import Image5 from "../assets/Image5.png";
              // import Image6 from "../assets/Image6.png";
              // import Image7 from "../assets/Image7.png";
              // import Image8 from "../assets/Image8.png";

              // const products = [
              //   { id: 1, name: "Товар 1", price: 1200, img: Image1 },
              //   { id: 2, name: "Товар 2", price: 900, img: Image2 },
              //   { id: 3, name: "Товар 3", price: 1500, img: Image3 },
              //   { id: 4, name: "Товар 4", price: 800, img: Image4 },
              //   { id: 5, name: "Товар 5", price: 1100, img: Image5 },
              //   { id: 6, name: "Товар 6", price: 1000, img: Image6 },
              //   { id: 7, name: "Товар 7", price: 1300, img: Image7 },
              //   { id: 8, name: "Товар 8", price: 700, img: Image8 },
              //   { id: 9, name: "Товар 9", price: 950, img: Image1 },
              //   { id: 10, name: "Товар 10", price: 1400, img: Image2 },
              //   { id: 11, name: "Товар 11", price: 1050, img: Image3 },
              //   { id: 12, name: "Товар 12", price: 1600, img: Image4 },
              // ];

              // const Header = () => {
              //   const [cartOpen, setCartOpen] = useState(false);
              //   const [favoritesOpen, setFavoritesOpen] = useState(false);
              //   const [cartItems, setCartItems] = useState([]);
              //   const [favorites, setFavorites] = useState([]);

              //   const banners = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
              //   const [currentIndex, setCurrentIndex] = useState(0);

              //   useEffect(() => {
              //     const interval = setInterval(() => {
              //       setCurrentIndex((prev) => (prev + 1) % banners.length);
              //     }, 4000);
              //     return () => clearInterval(interval);
              //   }, [banners.length]);

              //   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
              //   const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

              //   const addToCart = (product) => {
              //     setCartItems((prev) => [...prev, product]);
              //   };

              //   const addToFavorites = (product) => {
              //     setFavorites((prev) => {
              //       if (prev.find((item) => item.id === product.id)) return prev;
              //       return [...prev, product];
              //     });
              //   };

              //   return (
              //     <div className="bg-white min-h-screen">
              //       {/* Шапка */}
              //       <header className="bg-white shadow-md relative">
              //         <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 py-3">
              //           <div className="flex items-center space-x-4">
              //             <img src={Logo} alt="Logo" className="h-10" />
              //             <button className="bg-[#FFBE1F] px-4 py-2 rounded font-medium hover:bg-yellow-400 transition">
              //               Каталог товаров
              //             </button>
              //           </div>

              //           <div className="flex-1 mx-6 relative">
              //             <input
              //               type="text"
              //               placeholder="Искать товары"
              //               className="w-full border border-yellow-300 rounded px-4 py-2 pr-10 focus:outline-none focus:border-yellow-500"
              //             />
              //             <IoIosSearch
              //               size={25}
              //               className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-yellow-500"
              //             />
              //           </div>

              //           <div className="flex items-center space-x-6 text-gray-700">
              //             <button
              //               onClick={() => setCartOpen(!cartOpen)}
              //               className="flex items-center space-x-2 hover:text-yellow-500"
              //             >
              //               <ShoppingCart size={22} />
              //               <span>Корзина ({cartItems.length})</span>
              //             </button>

              //             <button
              //               onClick={() => setFavoritesOpen(!favoritesOpen)}
              //               className="flex items-center space-x-2 hover:text-yellow-500"
              //             >
              //               <Heart size={22} />
              //               <span>Избранное ({favorites.length})</span>
              //             </button>

              //             <button
              //               onClick={() => alert("Здесь будет авторизация")}
              //               className="flex items-center space-x-2 border px-3 py-1 rounded hover:bg-gray-100"
              //             >
              //               <User size={20} />
              //               <span>Войти</span>
              //             </button>

              //             <div className="cursor-pointer hover:text-yellow-500">РУС / UZB</div>
              //           </div>
              //         </div>

              //         {/* Корзина */}
              //         {cartOpen && (
              //           <div className="absolute right-6 top-16 bg-white border shadow-lg p-4 w-64 rounded z-10">
              //             <h3 className="font-bold mb-2">Корзина</h3>
              //             {cartItems.length === 0 ? (
              //               <p className="text-sm text-gray-600">Пока пусто</p>
              //             ) : (
              //               cartItems.map((item, index) => (
              //                 <p key={index} className="text-sm border-b py-1">
              //                   {item.name} — {item.price} ₽
              //                 </p>
              //               ))
              //             )}
              //           </div>
              //         )}

              //         {/* Избранное */}
              //         {favoritesOpen && (
              //           <div className="absolute right-40 top-16 bg-white border shadow-lg p-4 w-64 rounded z-10">
              //             <h3 className="font-bold mb-2">Избранное</h3>
              //             {favorites.length === 0 ? (
              //               <p className="text-sm text-gray-600">Пока пусто</p>
              //             ) : (
              //               favorites.map((item, index) => (
              //                 <p key={index} className="text-sm border-b py-1">
              //                   {item.name} — {item.price} ₽
              //                 </p>
              //               ))
              //             )}
              //           </div>
              //         )}

              //         {/* Слайдер */}
              //         <div className="max-w-[1920px] mx-auto relative mt-4">
              //           <div className="relative overflow-hidden rounded-xl">
              //             <img
              //               src={banners[currentIndex]}
              //               alt="Баннер"
              //               className="w-full h-[400px] object-cover transition-all duration-700"
              //             />
              //             <button
              //               onClick={prevSlide}
              //               className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
              //             >
              //               ‹
              //             </button>
              //             <button
              //               onClick={nextSlide}
              //               className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
              //             >
              //               ›
              //             </button>
              //             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              //               {banners.map((_, index) => (
              //                 <div
              //                   key={index}
              //                   onClick={() => setCurrentIndex(index)}
              //                   className={`w-3 h-3 rounded-full cursor-pointer ${
              //                     index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
              //                   }`}
              //                 />
              //               ))}
              //             </div>
              //           </div>
              //         </div>
              //       </header>

                
              //       <div className="max-w-[1400px] mx-auto grid grid-cols-6 gap-6 p-6">
              //         {products.map((product) => (
              //           <div
              //             key={product.id}
              //             className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
              //           >
              //             <img
              //               src={product.img}
              //               alt={product.name}
              //               className="w-32 h-32 object-cover mb-3 rounded"
              //             />
              //             <h4 className="font-medium text-center">{product.name}</h4>
              //             <p className="text-gray-600 mb-3">{product.price} ₽</p>
              //             <button
              //               onClick={() => addToCart(product)}
              //               className="w-full bg-yellow-400 px-3 py-2 rounded hover:bg-yellow-500 mb-2"
              //             >
              //               В корзину
              //             </button>
              //             <button
              //               onClick={() => addToFavorites(product)}
              //               className="w-full border px-3 py-2 rounded hover:bg-gray-100"
              //             >
              //               В избранное
              //             </button>
              //           </div>
              //         ))}
              //       </div>
              //     </div>
              //   );
              // };

              // export default Header;

import React, { useState, useEffect } from "react";
import { ShoppingCart, Heart, User } from "lucide-react";
import { IoIosSearch } from "react-icons/io";

import Logo from "../assets/Logo.jpg";
import Image1 from "../assets/Image.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";
import Image7 from "../assets/Image7.png";
import Image8 from "../assets/Image8.png";

const products = [
  { id: 1, name: "Смартфон Samsung Galaxy A16", price: "2 490 100 сум", img: Image1 },
  { id: 2, name: "Смартфон Xiaomi Redmi 14C", price: "1 965 100 сум", img: Image2 },
  { id: 3, name: "Смартфон Apple iPhone 16 Pro Max", price: "19 999 000 сум", img: Image3 },
  { id: 4, name: "Радар-детектор Neoline", price: "2 560 000 сум", img: Image4 },
  { id: 5, name: "Кондиционер Artel Marvarid", price: "4 590 400 сум", img: Image5 },
  { id: 6, name: "Надувной бассейн Intex", price: "336 000 сум", img: Image6 },
  { id: 7, name: "Электромобиль BYD E2", price: "239 100 000 сум", img: Image7 },
  { id: 8, name: "Холодильник Elite 308", price: "3 750 000 сум", img: Image8 },
  { id: 9, name: "Телевизор VESTA Smart", price: "1 459 000 сум", img: Image1 },
  { id: 10, name: "Планшет Teclast P30T", price: "1 710 000 сум", img: Image2 },
  { id: 11, name: "Ноутбук Acer Aspire Lite", price: "2 899 000 сум", img: Image3 },
  { id: 12, name: "Игровая приставка Sony PlayStation 5", price: "7 199 000 сум", img: Image4 },
];

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const banners = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Шапка */}
      <header className="bg-white shadow-md relative">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="h-10" />
            <button className="bg-[#FFBE1F] px-4 py-2 rounded font-medium hover:bg-yellow-400 transition">
              Каталог товаров
            </button>
          </div>

          <div className="flex-1 mx-6 relative">
            <input
              type="text"
              placeholder="Искать товары"
              className="w-full border border-yellow-300 rounded px-4 py-2 pr-10 focus:outline-none focus:border-yellow-500"
            />
            <IoIosSearch
              size={25}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-yellow-500"
            />
          </div>

          <div className="flex items-center space-x-6 text-gray-700">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="flex items-center space-x-2 hover:text-yellow-500"
            >
              <ShoppingCart size={22} />
              <span>Корзина ({cartItems.length})</span>
            </button>

            <button
              onClick={() => setFavoritesOpen(!favoritesOpen)}
              className="flex items-center space-x-2 hover:text-yellow-500"
            >
              <Heart size={22} />
              <span>Избранное ({favorites.length})</span>
            </button>

            <button
              onClick={() => alert("Здесь будет авторизация")}
              className="flex items-center space-x-2 border px-3 py-1 rounded hover:bg-gray-100"
            >
              <User size={20} />
              <span>Войти</span>
            </button>

            <div className="cursor-pointer hover:text-yellow-500">РУС / UZB</div>
          </div>
        </div>

        {/* Корзина */}
        {cartOpen && (
          <div className="absolute right-6 top-16 bg-white border shadow-lg p-4 w-64 rounded z-10">
            <h3 className="font-bold mb-2">Корзина</h3>
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-600">Пока пусто</p>
            ) : (
              cartItems.map((item, index) => (
                <p key={index} className="text-sm border-b py-1">
                  {item.name} — {item.price}
                </p>
              ))
            )}
          </div>
        )}

        {/* Избранное */}
        {favoritesOpen && (
          <div className="absolute right-40 top-16 bg-white border shadow-lg p-4 w-64 rounded z-10">
            <h3 className="font-bold mb-2">Избранное</h3>
            {favorites.length === 0 ? (
              <p className="text-sm text-gray-600">Пока пусто</p>
            ) : (
              favorites.map((item, index) => (
                <p key={index} className="text-sm border-b py-1">
                  {item.name} — {item.price}
                </p>
              ))
            )}
          </div>
        )}

        {/* Слайдер */}
        <div className="max-w-[1920px] mx-auto relative mt-4">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={banners[currentIndex]}
              alt="Баннер"
              className="w-full h-[400px] object-cover transition-all duration-700"
            />
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {banners.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Контент */}
      <div className="max-w-[1400px] mx-auto px-6 mt-8">
        <h2 className="text-2xl font-bold mb-6">Вам может быть интересно</h2>

        <div className="grid grid-cols-6 gap-6">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-32 h-32 object-cover mb-3 rounded"
              />
              <h4 className="font-medium text-center">{product.name}</h4>
              <p className="text-gray-600 mb-3">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-yellow-400 px-3 py-2 rounded hover:bg-yellow-500 mb-2"
              >
                В корзину
              </button>
              <button
                onClick={() => addToFavorites(product)}
                className="w-full border px-3 py-2 rounded hover:bg-gray-100"
              >
                В избранное
              </button>
            </div>
          ))}
        </div>

        {/* Кнопка показать ещё */}
        {visibleCount < products.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-yellow-400 px-6 py-2 rounded font-medium hover:bg-yellow-500 transition"
            >
              Показать ещё
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
