import Head from "next/head";
import Image from "next/image";

import Layout from "../../components/artComponents/Layout";
import artData from "../../components/artComponents/artData.json";
import Gallery from "../../components/artComponents/Gallery";

export default function CategoryPage({ category }) {
  console.log("CAT", category.thumbnail.bgColor);
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
        <div className="mt-[calc(50vh-56px)]">
          <Gallery data={category.illustrations} bgColor={category.bgColor} />
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
