import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Magnite/9206/Nissan-Magnite-Turbo-CVT-XV-Red-Edition/1657706976393/front-left-side-47.jpg?imwidth=420&impolicy=resize"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Nissan Magnite</Typography>
        <Typography color={medium}>Nissan.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Best selling car in India
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
