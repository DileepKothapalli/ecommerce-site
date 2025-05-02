import { useNavigate } from "react-router-dom";
import StyledCard from "./StyledCard";
import { CardActionArea, Typography } from "@mui/material";

const ApplicationCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(data.route);
  };

  return (
    <StyledCard variant="outlined" onClick={handleClick}>
      <CardActionArea
        sx={{
          width: 245,
          height: 120,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="text-center">
          <p className="text-3xl text-blue-600 mb-2">{data.icon}</p>
          <Typography className="!font-bold" variant="body1">
            {data.name}
          </Typography>
        </div>
      </CardActionArea>
    </StyledCard>
  );
};

export default ApplicationCard;
