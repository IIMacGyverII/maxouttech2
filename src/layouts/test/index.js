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

// Material Home 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Home 2 React example components
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import Footer from "examples/Footer";

function Test() {
  return (
    <HomeLayout>
      <HomeNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDBox>
              <MDTypography variant="h4" fontWeight="bold" mb={2}>
                Test Page
              </MDTypography>
              <MDTypography variant="body1" color="text">
                This is the Test page. You can add your content here.
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </HomeLayout>
  );
}

export default Test;
