import React from "react";
import Layout from "../../components/Layout";

function Surrounding({ slug }) {
  return <Layout title="Umgebung">ola</Layout>;
}

export default Surrounding;

export async function getServerSideProps({ query }) {
  const { slug } = query;
  console.log("HEYHO ", slug);

  return {
    props: {
      slug,
    }, // will be passed to the page component as props
  };
}
