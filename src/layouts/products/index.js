/**
=========================================================
* Material Home 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-home-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Home 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Home 2 React example components
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import Footer from "examples/Footer";
import ProductsInfoCard from "examples/Cards/InfoCards/ProductsInfoCard";
import Productslist from "examples/Lists/ProductsList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/products/components/Header";
import PlatformSettings from "layouts/products/components/PlatformSettings";

// Data
import ProductsListData from "layouts/products/data/ProductsListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import { useState } from "react";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  const [search, setSearch] = useState("");
  // Filter products by name or description
  const filteredProducts = ProductsListData.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  // Get all product names for autocomplete
  const productNames = ProductsListData.map((product) => product.name);

  return (
    <HomeLayout>
      <HomeNavbar onSearchChange={setSearch} productNames={productNames} />
      <MDBox mb={2} />
      <Header>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/products/products-overview",
                  color: "info",
                  label: "view project",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/products/products-overview",
                  color: "info",
                  label: "view project",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/pages/products/products-overview",
                  color: "info",
                  label: "view project",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="project #4"
                title="gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                action={{
                  type: "internal",
                  route: "/pages/products/products-overview",
                  color: "info",
                  label: "view project",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>
        {/* Product search results */}
        <MDBox mt={4}>
          <Productslist title="Products" productss={filteredProducts} />
        </MDBox>
      </Header>
      <Footer />
    </HomeLayout>
  );
}

export default Overview;
