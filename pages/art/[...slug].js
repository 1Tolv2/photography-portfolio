import Head from "next/head";

import Layout from "../../components/artComponents/Layout";
import artData from "../../components/artComponents/artData.json";
import Gallery from "../../components/artComponents/Gallery";
import HeroAlternate from "../../components/artComponents/HeroAlternate";

export default function CategoryPage({ category }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Illustrator portfolio"></meta>
        <title>{category.title}</title>
      </Head>
      <Layout>
        <HeroAlternate category={category} />
        <div className="mt-[calc(50vh-60px)]">
          <Gallery type="mosaic" data={category.illustrations} />
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
