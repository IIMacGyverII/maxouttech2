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
import Card from "@mui/material/Card";

// Material Home 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Home 2 React example components
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/AboutUs/DataTable";

// Data
import authorsTableData from "layouts/aboutus/data/authorsTableData";
import projectsTableData from "layouts/aboutus/data/projectsTableData";

function AboutUs() {
  return (
    <HomeLayout>
      <HomeNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card>
              <MDBox px={4} py={5}>
                <MDTypography variant="h3" mb={2} fontWeight="bold" color="info.main">
                  About Us
                </MDTypography>
                <MDTypography variant="body1" mb={2}>
                  <b>MaxOut™ Technology</b> is a leading innovator in wireless security and
                  life-safety solutions. Since our founding, we have been dedicated to delivering
                  maximum range, reliability, and ease of installation for professional security
                  dealers, installers, and end-users.
                </MDTypography>
                <MDTypography variant="body1" mb={2}>
                  <b>Our Mission:</b> To empower our customers with cutting-edge wireless sensor
                  technology that ensures safety, security, and peace of mind in every environment.
                </MDTypography>
                <MDTypography variant="body1" mb={2}>
                  <b>What We Offer:</b> Our product line includes door/window sensors, shock
                  sensors, smoke/heat/CO detectors, PIR motion detectors, glass break sensors, water
                  sensors, keyfobs, panic buttons, and more—engineered for seamless compatibility
                  with leading security panels including UTC®, Interlogix®, GE®, Honeywell®, 2GIG®,
                  DSC®, and Qolsys®.
                </MDTypography>
                <MDTypography variant="body1" mb={2}>
                  <b>Why Choose MaxOut™?</b>
                  <ul style={{ margin: "16px 0 0 24px" }}>
                    <li>Maximum wireless range and reliability</li>
                    <li>Easy installation and programming</li>
                    <li>Comprehensive technical support and documentation</li>
                    <li>Commitment to quality and customer satisfaction</li>
                  </ul>
                </MDTypography>
                <MDTypography variant="body1" mb={2}>
                  <b>Contact Us:</b> <br />
                  12075 43rd Street NE, Suite 500, St. Michael, MN 55376 <br />
                  <b>W:</b> MaxOutTech.com &nbsp; <b>P:</b> 763-497-1059 &nbsp; <b>E:</b>{" "}
                  <a
                    href="mailto:Info@MaxOutTech.com"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    Info@MaxOutTech.com
                  </a>
                </MDTypography>
                <MDTypography variant="body1">
                  <b>MaxOut™ Technology: Maximum Range. Maximum Reliability.</b>
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </HomeLayout>
  );
}

export default AboutUs;
