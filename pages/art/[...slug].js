import Head from "next/head";
import Layout from "../../components/artComponents/Layout";

import artData from "../../components/artComponents/artData.json";

export default function CategoryPage({ category }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Illustrator portfolio"></meta>
        <title>Sofia Johnsson S.</title>
      </Head>
      <Layout>
        <h1 class="text-black">{category.title}</h1>
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
