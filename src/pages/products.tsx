import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import Link from "next/link";

import Layout from "../layout";
import client from "../config/apollo";
import { GET_PRODUCTS } from "../graphql/queries/products";

export const getStaticProps = async () => {
  const { data: dataProducts } = await client.query({
    query: GET_PRODUCTS,
  });

  return {
    props: {
      dataProducts,
    },
  };
};

const Products = ({ dataProducts }: { dataProducts: any }) => {
  const dataProductsPage = dataProducts?.getProducts;

  return (
    <Layout>
      <div className="max-w-6xl w-11/12 mx-auto py-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
          {dataProductsPage.map((item: any) => (
            <article key={item.id} className="">
              <Link href="/">
                <a>
                  <div className="border border-DarkGrayishBlue p-4">
                    <img
                      src={item?.image}
                      alt=""
                      className="w-full object-cover align-top"
                    />
                  </div>
                </a>
              </Link>
              <div className="border border-t-0 border-DarkGrayishBlue p-4">
                <span className="block font-medium text-DarkGrayishBlue">
                  Vendor code: {item?.code}
                </span>
                <span className="block text-VeryDarkBlue font-medium mt-2 text-xl">
                  {item?.name}
                </span>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="block font-medium text-DarkGrayishBlue">
                      Price:
                    </span>
                    <span className="block text-xl text-VeryDarkBlue font-medium mt-1">
                      ${item?.price}
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
