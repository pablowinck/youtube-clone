import { Button } from "@material-ui/core";
import React from "react";
import Layout from "src/components/Layout";

const Home = () => (
    <Layout title="YouTube">
        Clone youtube com Next.js + Material-UI
        <Button variant="outlined" color="secondary">
            Hello World
        </Button>
    </Layout>
);

export default Home;
