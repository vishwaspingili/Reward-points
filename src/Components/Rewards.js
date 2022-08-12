import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

export default function Rewards({ points, productHistory }) {

  let rows = [];
  for (let i in points) {
    rows.push({ Month: i, Points: points[i] })
  };

  return (
    <div style={{ padding: '1rem' }}>
    <h1>Rewards History</h1>
    <div style={{ margin: "2rem", fontSize: "1.5rem" }}>
    <Grid container spacing={1}>
      <Grid container item xs={4}></Grid>
      <Grid container item xs={4}></Grid>
      <Grid container item xs={4} style={{ justifyContent: "end" }}>
          <strong style={{ color: 'red' }}>Reward Points:</strong>&nbsp;
          <strong style={{ color: 'green' }}>{ rows.reduce((a, b) => a+b.Points,0) }</strong>
        </Grid>
      </Grid>
      </div>
    <Grid container spacing={1} style={{ backgroundColor: "lightgrey", height: "2.5rem" }}>
      <Grid container item xs={6}>
        <strong>Month</strong>
      </Grid>
      <Grid container item xs={6}>
        <strong>Reward points</strong>
      </Grid>
    </Grid>
    <div style={{ marginTop: "1rem" }}>
      {
        rows.map((row) =>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Grid container spacing={1}>
              <Grid container item xs={6}>
                <Typography>{row.Month}</Typography>
              </Grid>
              <Grid container item xs={6}>
                <strong style={{ color: "green" }}>{row.Points}</strong>
              </Grid>
            </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <React.Fragment>
                  <Grid container item xs={3}>
                    <strong>Date</strong>
                  </Grid>
                  <Grid container item xs={3}>
                    <strong>Product</strong>
                  </Grid>
                  <Grid container item xs={2}>
                    <strong>Quantity</strong>
                  </Grid>
                  <Grid container item xs={2}>
                    <strong>Price</strong>
                  </Grid>
                  <Grid container item xs={2}>
                    <strong>Total</strong>
                  </Grid>
                </React.Fragment>
              </Grid>
              <br/>
              <Grid container spacing={1}>
                {
                  productHistory[row.Month].map((data, index) => {
                    return (
                      <React.Fragment>
                        <Grid container item xs={3}>
                          <div>{data.date}</div>
                        </Grid>
                        <Grid container item xs={3}>
                          <div>{data.product}</div>
                        </Grid>
                        <Grid container item xs={2}>
                          <div>{data.count}</div>
                        </Grid>
                        <Grid container item xs={2}>
                          <div>{data.price}</div>
                        </Grid>
                        <Grid container item xs={2}>
                          <div>{data.price * data.count}</div>
                        </Grid>
                      </React.Fragment>
                    )
                  })
                }
              </Grid>
            </AccordionDetails>
          </Accordion>
        )
      }
      </div>
    </div>
  );
}
