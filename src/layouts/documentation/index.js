import React from "react";
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Import all PDFs
import a_rf_cmdws_319_nn_im from "assets/documentation/a_rf_cmdws_319_nn_im.pdf";
import b_rf_cmdws_345_nn_im from "assets/documentation/b_rf_cmdws_345_nn_im.pdf";
import c_rf_cmdws_433_d_nn_im from "assets/documentation/c_rf_cmdws_433_d_nn_im.pdf";
import d_rf_cmdwsx_319_nn_im from "assets/documentation/d_rf_cmdwsx_319_nn_im.pdf";
import e_rf_cmdwsx_345_nn_im from "assets/documentation/e_rf_cmdwsx_345_nn_im.pdf";
import h_rf_shk_319_nn_im_2 from "assets/documentation/h_rf_shk_319_nn_im-(2).pdf";
import i_rf_shk_345_nn_im from "assets/documentation/i_rf_shk_345_nn_im.pdf";
import f_rf_rdws_319_nn_im from "assets/documentation/f_rf_rdws_319_nn_im.pdf";
import g_rf_rdws_345_nn_im from "assets/documentation/g_rf_rdws_345_nn_-im.pdf";
import k_rf_cmdws_od_319_nn_im from "assets/documentation/k_rf_cmdws_od_-319_nn_im.pdf";
import l_rf_argb_319_nn_im from "assets/documentation/l_rf_argb_319_nn_im.pdf";
import j_rf_cmdws_od_345_nn_im from "assets/documentation/j_rf_cmdws_od_-345_nn_im.pdf";
import q_rf_arpir_319_nn_im from "assets/documentation/q_rf_arpir_319_nn_im.pdf";
import r_rf_arpir_345_nn_im from "assets/documentation/r_rf_arpir_345_nn_im.pdf";
import s_rf_pir_433_d_nn_im from "assets/documentation/s_rf_pir_433_d_nn_im.pdf";
import t_rf_cpir_319_nn_im from "assets/documentation/t_rf_cpir_319_nn_im.pdf";
import m_rf_keyfob_319_nn_im from "assets/documentation/m_rf_keyfob_319_nn_im.pdf";
import y_rf_water_319_nn_im from "assets/documentation/y_rf_water_319_nn_im.pdf";
import z_rf_water_345_nn_im from "assets/documentation/z_rf_water_345_nn_im.pdf";
import x_rf_apcmb_345_nn_im from "assets/documentation/x_rf_apcmb_345_nn_im.pdf";
import u_rf_ror_135s_319_nn_im from "assets/documentation/u_rf_ror-135s-319_nn_im.pdf";
import v_rf_ror_135_345_nn_im from "assets/documentation/v_rf_ror_135_345_nn_-im.pdf";
import o_rf_fob_panic_345_nn_im from "assets/documentation/o_rf_fob_panic_345_nn_im.pdf";

const documentMap = [
  { file: a_rf_cmdws_319_nn_im, name: "Mini Door/Window Sensor, 319 MHZ (RF-CMDWS-319-NN)" },
  { file: b_rf_cmdws_345_nn_im, name: "Mini Door/Window Sensor, 345 MHZ (RF-CMDWS-345-NN)" },
  { file: c_rf_cmdws_433_d_nn_im, name: "Mini Door/Window Sensor, 433 MHZ (RF-CMDWS-433-NN)" },
  {
    file: d_rf_cmdwsx_319_nn_im,
    name: "Mini Door/Window Sensor, Extended 319 MHZ (RF-CMDWSX-319)",
  },
  {
    file: e_rf_cmdwsx_345_nn_im,
    name: "Mini Door/Window Sensor, Extended 345 MHZ (RF-CMDWSX-345)",
  },
  { file: h_rf_shk_319_nn_im_2, name: "TOTAL Window Sensor, 319 MHz (RF-SHK-319-NN)" },
  { file: i_rf_shk_345_nn_im, name: "TOTAL Window Sensor, 345 MHz (RF-SHK-345-NN)" },
  { file: f_rf_rdws_319_nn_im, name: "Recessed Door/Window Sensor, 319 MHZ (RF-RDWS-319-NN)" },
  { file: g_rf_rdws_345_nn_im, name: "Recessed Door/Window Sensor, 345 MHZ (RF-RDWS-345-NN)" },
  {
    file: k_rf_cmdws_od_319_nn_im,
    name: "Extreme Sensor, Outdoors Door/Gate, 319 MHz (RF-CMDWS-OD-319-NN)",
  },
  {
    file: j_rf_cmdws_od_345_nn_im,
    name: "Extreme Sensor, Outdoors Door/Gate, 345 MHz (RF-CMDWS-OD-345-NN)",
  },
  { file: q_rf_arpir_319_nn_im, name: "Wall Mounted PIR, 319 MHz (RF-ARPIR-319-NN)" },
  { file: r_rf_arpir_345_nn_im, name: "Wall Mounted PIR, 345 MHz (RF-ARPIR-345-NN)" },
  { file: s_rf_pir_433_d_nn_im, name: "Wall Mounted PIR, 433 MHz (RF-PIR-433-D-NN)" },
  { file: t_rf_cpir_319_nn_im, name: "Ceiling Mounted PIR, 319 MHz (RF-CPIR-319-NN)" },
  { file: l_rf_argb_319_nn_im, name: "Glass Break Detector, 319 MHz (RF-ARGB-319-NN)" },
  { file: y_rf_water_319_nn_im, name: "Water Detector, 319 MHz (RF-WATER-319-NN)" },
  { file: z_rf_water_345_nn_im, name: "Water Detector, 345 MHz (RF-WATER-345-NN)" },
  {
    file: x_rf_apcmb_345_nn_im,
    name: "Smoke, Heat, and CarbonMonoxide Detector, 345MHz (RF-APCMB-345-NN)",
  },
  {
    file: u_rf_ror_135s_319_nn_im,
    name: "Rate-of-Rise Heat Detector, 319 MHz (RF-ROR-135S-319-NN)",
  },
  {
    file: v_rf_ror_135_345_nn_im,
    name: "Rate-of-Rise Heat Detector, 345 MHz (RF-ROR-135S-345-NN)",
  },
  { file: m_rf_keyfob_319_nn_im, name: "Keyfob Control, 319 MHz (RF-KEYFOB-319-NN)" },
  { file: o_rf_fob_panic_345_nn_im, name: "Keyfob Panic, 345 MHz (RF-FOB-PANIC-345-NN)" },
];

function Documentation() {
  return (
    <HomeLayout>
      <HomeNavbar />
      <div style={{ padding: 32 }}>
        <h1>MaxOut™ Documentation & Installation Resources</h1>
        <p>
          Access professional-grade installation manuals, programming guides, and technical
          documentation for our full line of MaxOut™ wireless security and life-safety sensors.
          <br />
          Download easy-to-follow PDFs covering:
        </p>
        <ul style={{ marginBottom: 24 }}>
          <li>Mini & Extended Door/Window Sensors (319/345/433 MHz)</li>
          <li>Recessed, Outdoor Extreme, and TOTAL Window Shock Sensors</li>
          <li>Combination Smoke/Heat/CO Detectors</li>
          <li>PIR Motion Detectors (Wall & Ceiling Mount)</li>
          <li>
            Glass Break, Water, Rate-of-Rise Heat, Keyfobs, Panic Buttons, and Enclosure Tamper
            Switches
          </li>
        </ul>
        <p>
          Engineered for seamless compatibility with UTC®, Interlogix®, GE®, Honeywell®, 2GIG®,
          DSC®, and Qolsys® panels—get precise instructions to ensure reliable performance, superior
          range, and quick setup.
          <br />
          <b>MaxOut™ Technology: Maximum Range. Maximum Reliability.</b>
          <br />
          All manuals are free to download directly from this page. Perfect for installers, dealers,
          and end-users.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {documentMap.map((doc) => (
            <Card
              key={doc.name}
              sx={{
                width: 320,
                minHeight: 120,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {doc.name}
                </Typography>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}
                >
                  View / Download PDF
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </HomeLayout>
  );
}
export default Documentation;
