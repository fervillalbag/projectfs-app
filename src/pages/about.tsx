import React from "react";
import client from "../config/apollo";
import { GET_ABOUT_PAGE } from "../graphql/queries/aboutPage";
import Layout from "../layout";

export const getStaticProps = async () => {
  const { data: aboutData } = await client.query({
    query: GET_ABOUT_PAGE,
  });

  return {
    props: {
      aboutData,
    },
  };
};

const About = ({ aboutData }: { aboutData: any }) => {
  const aboutDataPage = aboutData?.getAboutPage;
  console.log(aboutDataPage);

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 pt-0 lg:pt-8 pb-16 lg:pb-20 max-w-6xl w-11/12 mx-auto">
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold text-DarkBlue">
              {aboutDataPage?.title}
            </h3>
            {aboutDataPage.description.map((item: any) => (
              <p
                key={item.id}
                className="w-full lg:w-9/12 text-DarkGrayishBlue mt-6"
              >
                {item.text}
              </p>
            ))}
          </div>
          <div>
            <img
              src={aboutDataPage?.image}
              alt=""
              className="w-full object-cover align-top"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
