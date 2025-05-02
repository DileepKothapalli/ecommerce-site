
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 245,
  height: 120,
  backgroundColor: "#333",
  color: "#aaa",
  textAlign: "center",
  transition: "transform 0.5s ease",
  margin: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    border: "2px solidrgb(181, 238, 246)",
    transform: "scale(1.02)"
  },
}));

export default StyledCard; 
