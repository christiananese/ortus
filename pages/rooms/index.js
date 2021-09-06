import React from "react";
import Layout from "../../components/Layout";
import RoomCard from "../../components/RoomCard";

function Rooms() {
  return (
    <Layout title="Ortus">
      <div className="pt-12 grid gap-12">
        <RoomCard title="Zimmer 1" description="2-4 People, im 1. Stock" />
        <RoomCard
          title="Zimmer 2"
          description="2-4 People, im 1. Stock"
          align="right"
        />
      </div>
    </Layout>
  );
}

export default Rooms;
