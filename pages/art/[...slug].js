import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "../../components/artComponents/Layout";
import artData from "../../components/artComponents/artData.json";
import Gallery from "../../components/artComponents/Gallery";
import Section from "../../components/atoms/Section";
import Heading2 from "../../components/atoms/typography/Heading2";

export default function CategoryPage({ category }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Illustrator portfolio"></meta>
        <title>{category.title}</title>
      </Head>
      <Layout>
        <div
          className={`h-[50vh] w-screen !fixed top-0`}
          style={{ backgroundColor: category.thumbnail.bgColor }}
        >
          <div className="w-10/12 h-[50vh] flex flex-col justify-center items-center sm:w-1/2 sm:min-w-[400px] max-w-[800px] mx-auto">
            <h1 className="text-4xl mb-4 sm:mb-6 text-black text-center">
              {category.title}
            </h1>
            <p>{category.description}</p>
          </div>
        </div>
        <div className="mt-[calc(50vh-60px)]">
          <Section className="bg-white">
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 2xl:grid-cols-6 w-screen">
              {category.illustrations.map((item, index) => {
                const span = item.span ? "art-" + item.span : "";
                const colSpan =
                  "col-art-span-" + (item?.span?.col ? item.span.col : "1");
                const rowSpan =
                  "row-art-span-" + (item?.span?.row ? item.span.row : "1");

                console.log("SPANS: ", item.title, colSpan, rowSpan);

                return (
                  <motion.div
                    id={`category-${item.title}`}
                    key={`category-${item.title}`}
                    className={`flex flex-col items-center ${span}`}
                    style={{ backgroundColor: item.bgColor }}
                    initial={{ translateY: 50, opacity: 0 }}
                    transition={{ duration: 0.8, type: "tween" }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="relative h-full md:!min-h-[300px] 2xl:!min-h-[350px] w-full"
                      style={{
                        backgroundColor: item.bgColor || "#ebebeb",
                        minHeight:
                          item?.span === "rowRectangle" ? "400px" : "250px",
                      }}
                    >
                      <Image
                        className={`object-contain p-8 2xl:py-8 2xl:px-14 z-0 ${
                          item.customClasses ? item.customClasses : ""
                        }
                transition-all ease-in-out duration-500 pointer-events-none`}
                        src={item.image}
                        alt={item.alt || "illustration"}
                        fill
                      />
                    </div>
                    <div className="w-full max-w-[300px] p-3">
                      {item.title && (
                        <Heading2 className="!text-customBlack !text-base font-semibold uppercase tracking-wider text-center">
                          {item.title}
                        </Heading2>
                      )}
                      {item.description && (
                        <p className="!text-purpleGrey text-center text-sm">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Section>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = artData.categories.map((category) => ({
    params: { slug: [category.slug] },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = artData.categories.find(
    (category) => params.slug[0] === category.slug
  );

  return {
    props: {
      category,
    },
  };
}
