import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from "react-router-dom";
import { BackButtonStyled } from './BackButton.styled';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function goBack() {
    const way = location.state?.from || "/";
    navigate(way, { replace: false });
  }
  return (
    <BackButtonStyled onClick={goBack}>
      <ArrowBackIcon style={{ marginRight: "12px" }} size={16} />
      Go back
    </BackButtonStyled>
  );
}

export default BackButton;