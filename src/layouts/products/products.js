import React from "react";
import HomeLayout from "examples/LayoutContainers/HomeLayout";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Example product data
const products = [
  {
    name: "Mini Door/Window Sensor",
    description: "Wireless sensor for doors and windows. Available in 319/345/433 MHz.",
    compatibility: "UTC®, Interlogix®, GE®, Honeywell®, 2GIG®, DSC®, Qolsys®",
  },
  {
    name: "TOTAL Window Shock Sensor",
    description: "Advanced shock sensor for windows. Maximum range and reliability.",
    compatibility: "All major security panels",
  },
  {
    name: "Combination Smoke/Heat/CO Detector",
    description: "Multi-threat detector for smoke, heat, and carbon monoxide.",
    compatibility: "Professional-grade, easy installation",
  },
  {
    name: "PIR Motion Detector",
    description: "Wall and ceiling mount PIR motion sensors for versatile coverage.",
    compatibility: "Industry-standard wireless panels",
  },
  {
    name: "Glass Break Sensor",
    description: "Detects glass breakage for enhanced perimeter security.",
    compatibility: "Works with leading wireless systems",
  },
  {
    name: "Water Sensor",
    description: "Wireless water leak detection for life-safety applications.",
    compatibility: "Easy integration with MaxOut™ systems",
  },
  {
    name: "Keyfob & Panic Button",
    description: "Remote control and emergency activation for security systems.",
    compatibility: "All MaxOut™ compatible panels",
  },
];

function Products() {
  return (
    <HomeLayout>
      <HomeNavbar />
      <div style={{ padding: 32 }}>
        <h1>MaxOut™ Products</h1>
        <p>
          Explore our full line of wireless security and life-safety sensors engineered for maximum range, reliability, and seamless compatibility with leading security panels.
        </p>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.name}>
              <Card sx={{ minHeight: 180 }}>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {product.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    <b>Compatibility:</b> {product.compatibility}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </HomeLayout>
  );
}

export default Products;
