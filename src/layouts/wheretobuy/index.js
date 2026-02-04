import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import Footer from "examples/Footer";

function WhereToBuy() {
  return (
    <HomeLayout>
      <HomeNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDBox>
              <MDTypography variant="h4" fontWeight="bold" mb={2}>
                Where To Buy
              </MDTypography>
              <MDTypography variant="body1" color="text" mb={2}>
                Find MaxOut™ Wireless Security & Life-Safety Sensors Near You
                <br />
                Upgrade your home or business protection with our high-performance, long-range
                wireless sensors—featuring MaxOut™ Technology for superior RF strength, exceptional
                battery life, and seamless compatibility with UTC®, Interlogix®, GE®, Honeywell®,
                2GIG®, DSC®, and more.
                <br />
                From mini door/window contacts and recessed sensors to combination smoke/heat/CO
                detectors, pet-immune motion PIRs, water/flood alerts, glass break, outdoor-rated
                devices, keyfobs, and panic buttons—get the reliable, professional-grade sensing you
                need.
                <br />
                Available through leading security distributors nationwide:
                <br />
                <br />
                Click the logos below to locate a dealer, check stock, or place your order today.
                Protect what matters most with MaxOut™—Maximum Range. Maximum Reliability.
              </MDTypography>
            </MDBox>
          </Grid>
          {/* Dealer Cards */}
          <Grid item xs={12} md={4} lg={4}>
            <a
              href="https://www.alarmax.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ cursor: "pointer" }}>
                <MDBox p={3} textAlign="center">
                  <img
                    src={require("assets/images/logos/alarmax.png")}
                    alt="AlarMax"
                    style={{
                      display: "block",
                      margin: "0 auto 16px auto",
                      maxWidth: "80%",
                      maxHeight: 80,
                      background: "#fff",
                      borderRadius: 12,
                      padding: 12,
                      objectFit: "contain",
                    }}
                  />
                  {/* Removed AlarMax text */}
                </MDBox>
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <a
              href="https://apdlink.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ cursor: "pointer" }}>
                <MDBox p={3} textAlign="center">
                  <img
                    src={require("assets/images/logos/apdlogo.png")}
                    alt="APDlink"
                    style={{ height: 60, marginBottom: 16 }}
                  />
                  {/* Removed NASA text */}
                </MDBox>
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <a
              href="https://www.lonestar-us.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ cursor: "pointer" }}>
                <MDBox p={3} textAlign="center">
                  <img
                    src={require("assets/images/logos/Custom-Electronic-Supply_Logo.png")}
                    alt="Custom Electronic Supply"
                    style={{ height: 60, marginBottom: 16 }}
                  />
                  {/* Removed Netflix text */}
                </MDBox>
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <a
              href="https://securitydatasupply.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ cursor: "pointer" }}>
                <MDBox p={3} textAlign="center">
                  <img
                    src={require("assets/images/logos/sds.webp")}
                    alt="Security Data Supply"
                    style={{ height: 60, marginBottom: 16 }}
                  />
                  {/* Removed Pinterest text */}
                </MDBox>
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <a
              href="https://shop.ssandsi.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ cursor: "pointer" }}>
                <MDBox p={3} textAlign="center">
                  <img
                    src={require("assets/images/logos/ss&si.webp")}
                    alt="SS&SI"
                    style={{ height: 60, marginBottom: 16 }}
                  />
                  {/* Removed Spotify text */}
                </MDBox>
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <a
              href="https://www.wesco.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ cursor: "pointer" }}>
                <MDBox p={3} textAlign="center">
                  <img
                    src={require("assets/images/logos/wesco.png")}
                    alt="Wesco"
                    style={{ height: 60, marginBottom: 16 }}
                  />
                  {/* Removed Wesco text */}
                </MDBox>
              </Card>
            </a>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </HomeLayout>
  );
}

export default WhereToBuy;
