import { Box, Grid } from "@material-ui/core";
import React from "react";
import Layout from "src/components/Layout";
import VideoCard from "src/components/VideoCard";

const Home = ({ data }) => {
    return (
        <Layout title="YouTube">
            <Box p={2}>
                <Grid container spacing={4}>
                    {data.map((item) => (
                        <Grid
                            key={item._id}
                            item
                            xl={3}
                            lg={3}
                            md={4}
                            sm={6}
                            xs={12}
                        >
                            <VideoCard item={item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
};

export async function getStaticProps() {
    const data = [
        {
            id: 1,
            title: "Manutenção em Notebook",
            thumb: "thumb/thumb3.png",
            authorId: 1,
            authorName: "Pablo Winter",
            authorAvatar: "#",
            views: 10,
            videoUrl: "url",
            updatedAt: "2019-02-24",
        },
        {
            id: 2,
            title: "Como montar seu Instagram",
            thumb: "thumb/thumb01.jpg",
            authorId: 2,
            authorName: "Instagram",
            authorAvatar: "#",
            views: 100000,
            videoUrl: "url",
            updatedAt: "2015-02-24",
        },
        {
            id: 3,
            title: "Manutenção em Notebook",
            thumb: "thumb/thumb3.png",
            authorId: 1,
            authorName: "Pablo Winter",
            authorAvatar: "#",
            views: 10,
            videoUrl: "url",
            updatedAt: "2019-02-24",
        },
        {
            id: 4,
            title: "Como montar seu Instagram",
            thumb: "thumb/thumb01.jpg",
            authorId: 2,
            authorName: "Instagram",
            authorAvatar: "#",
            views: 100000,
            videoUrl: "url",
            updatedAt: "2015-02-24",
        },
        {
            id: 5,
            title: "Manutenção em Notebook",
            thumb: "thumb/thumb3.png",
            authorId: 1,
            authorName: "Pablo Winter",
            authorAvatar: "#",
            views: 10,
            videoUrl: "url",
            updatedAt: "2019-02-24",
        },
        {
            id: 6,
            title: "Como montar seu Instagram",
            thumb: "thumb/thumb01.jpg",
            authorId: 2,
            authorName: "Instagram",
            authorAvatar: "#",
            views: 100000,
            videoUrl: "url",
            updatedAt: "2015-02-24",
        },
        {
            id: 7,
            title: "Manutenção em Notebook",
            thumb: "thumb/thumb3.png",
            authorId: 1,
            authorName: "Pablo Winter",
            authorAvatar: "#",
            views: 10,
            videoUrl: "url",
            updatedAt: "2019-02-24",
        },
        {
            id: 8,
            title: "Como montar seu Instagram",
            thumb: "thumb/thumb01.jpg",
            authorId: 2,
            authorName: "Instagram",
            authorAvatar: "#",
            views: 100000,
            videoUrl: "url",
            updatedAt: "2015-02-24",
        },
    ];

    return {
        props: {
            data: data,
        }, // will be passed to the page component as props
    };
}

export default Home;
