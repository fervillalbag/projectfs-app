import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import Link from "next/link";

import Layout from "../layout";

const Products: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-6xl w-11/12 mx-auto py-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
          <article className="">
            <Link href="/">
              <a>
                <div className="border border-DarkGrayishBlue p-4">
                  <img
                    src="https://i.pinimg.com/736x/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.jpg"
                    alt=""
                    className="w-full object-cover align-top"
                  />
                </div>
                <div className="border border-t-0 border-DarkGrayishBlue p-4">
                  <span className="block font-medium text-DarkGrayishBlue">
                    Vendor code: 15021
                  </span>
                  <span className="block text-VeryDarkBlue font-medium mt-2 text-xl">
                    Shirt Black Spring Season
                  </span>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="block font-medium text-DarkGrayishBlue">
                        Price:
                      </span>
                      <span className="block text-xl text-VeryDarkBlue font-medium mt-1">
                        $40
                      </span>
                    </div>
                    <div>
                      <button className="text-2xl bg-BrightRed text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
                        <RiShoppingCartFill />
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </article>
          <article className="">
            <div className="border border-DarkGrayishBlue p-4">
              <img
                src="https://i.pinimg.com/736x/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.jpg"
                alt=""
                className="w-full object-cover align-top"
              />
            </div>
            <div className="border border-t-0 border-DarkGrayishBlue p-4">
              <span className="block font-medium text-DarkGrayishBlue">
                Vendor code: 15021
              </span>
              <span className="block text-VeryDarkBlue font-medium mt-2 text-xl">
                Shirt Black Spring Season
              </span>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="block font-medium text-DarkGrayishBlue">
                    Price:
                  </span>
                  <span className="block text-xl text-VeryDarkBlue font-medium mt-1">
                    $40
                  </span>
                </div>
                <div>
                  <button className="text-2xl bg-BrightRed text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
                    <RiShoppingCartFill />
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article className="">
            <div className="border border-DarkGrayishBlue p-4">
              <img
                src="https://i.pinimg.com/736x/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.jpg"
                alt=""
                className="w-full object-cover align-top"
              />
            </div>
            <div className="border border-t-0 border-DarkGrayishBlue p-4">
              <span className="block font-medium text-DarkGrayishBlue">
                Vendor code: 15021
              </span>
              <span className="block text-VeryDarkBlue font-medium mt-2 text-xl">
                Shirt Black Spring Season
              </span>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="block font-medium text-DarkGrayishBlue">
                    Price:
                  </span>
                  <span className="block text-xl text-VeryDarkBlue font-medium mt-1">
                    $40
                  </span>
                </div>
                <div>
                  <button className="text-2xl bg-BrightRed text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
                    <RiShoppingCartFill />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
