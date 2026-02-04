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
import MDButton from "components/MDButton";

// Material Home 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// PDF
import lineCardPdf from "assets/pdfs/17_maxout_-line_card_-8_1_25.pdf";

// Material Home 2 React examples
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import Footer from "examples/Footer";

function LineCard() {
  return (
    <HomeLayout>
      <HomeNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDBox>
              <MDTypography variant="h4" fontWeight="bold" mb={2}>
                Sales Line Card
              </MDTypography>
              <MDTypography variant="body1" color="text" mb={2}>
                Discover MaxOut™ Wireless Security &amp; Life-Safety Sensors:
                <br />
                Our comprehensive line card features high-performance, reliable devices designed for
                seamless integration with leading systems like UTC®, Interlogix®, GE®, Honeywell®,
                2GIG®, and DSC®.
                <br />
                Available in 319.5 MHz, 345 MHz, and 433 MHz frequencies.
                <br />
                These sensors replace popular models while offering superior RF range, long-life
                batteries (CR2032, CR123A, etc.), tamper protection, supervisory signals, and
                low-battery alerts.
              </MDTypography>
              <MDTypography variant="body1" color="text" mb={2}>
                <strong>Key products include:</strong>
              </MDTypography>
              <ul style={{ marginTop: 0, marginBottom: 16, paddingLeft: 24 }}>
                <li>
                  <strong>Door/Window Sensors:</strong>
                  Mini, extended, recessed, and extreme outdoor models for versatile mounting on
                  wood, steel, or extreme conditions.
                </li>
                <li>
                  <strong>Shock &amp; Glass Break Detectors:</strong>
                  Dual-protection window shock sensors and audio-style glass break detectors for
                  impact and intrusion alerts.
                </li>
                <li>
                  <strong>Environmental Detectors:</strong>
                  Rate-of-rise/heat sensors (135&deg;F or 200&deg;F), combination smoke/heat/CO
                  detectors with hush features, and water sensors detecting as little as 1/32&#34;
                  of water.
                </li>
                <li>
                  <strong>Motion Detectors:</strong>
                  Wall-mount PIR with 80 lb. pet immunity and 40&deg; field-of-view; ceiling-mount
                  panoramic 360&deg; coverage.
                </li>
                <li>
                  <strong>Panic &amp; Control Devices:</strong>
                  Keyfobs for arming/disarming, panic alerts, and auxiliary controls; long-range
                  panic buttons with multiple mounting options.
                </li>
                <li>
                  <strong>Accessories:</strong>
                  Enclosure tamper switches for added system protection.
                </li>
              </ul>
              <MDTypography variant="body1" color="text" mb={2}>
                Engineered for durability, ease of installation, and exceptional performance
                &mdash;even on metal surfaces&mdash;these sensors ensure robust security and
                life-safety monitoring.
                <br />
                Visit{" "}
                <a href="https://MaxOutTech.com" target="_blank" rel="noopener noreferrer">
                  MaxOutTech.com
                </a>{" "}
                for details and compatibility.
              </MDTypography>
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h6" gutterBottom>
                  Download Line Card
                </MDTypography>
                <MDTypography variant="body2" color="text" mb={2}>
                  Click the button below to download the Sales Line Card PDF. The file linked is{" "}
                  <strong>assets/pdfs/17_maxout_-line_card_-8_1_25.pdf</strong>.
                </MDTypography>
                <MDButton
                  component="a"
                  href={lineCardPdf}
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                  color="info"
                >
                  Download Sales Line Card
                </MDButton>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </HomeLayout>
  );
}

export default LineCard;
