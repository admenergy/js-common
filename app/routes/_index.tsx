import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function PageIndex() {
  return (
    <Box m={2}>
      <Card>
        <CardHeader title="Hi. :)" />
        <CardContent>
          <Typography>This is a test of the card component.</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
