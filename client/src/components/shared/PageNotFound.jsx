import { useMemo } from "react";
import NotFoundImage from '../../assets/404PageNotFound.svg';

const PageNotFound = () => {
  const backgroundStyles = useMemo(() => ({
    backgroundImage: `url(${NotFoundImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    width: '50%',
    height: '100%',
  }), []);

  const containerStyle = {
    display: 'flex',
    height: '100vh',
    fontFamily: 'sans-serif'
  };

  const textStyle = {
    width: '50%',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '24px'
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h2>Oops!</h2>
        <p>Cannot find the page</p>
      </div>
      <div style={backgroundStyles}></div>
    </div>
  );
};

export default PageNotFound;
