import { Link } from "@mui/material";
import "./btn.scss";

const SocialLink = ({ href, text }) => {
  return (
    <Link href={href}
      sx={{
        transition: "background-color 0.3s",
        width: "50px",
        height: "50px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #fff",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "50%",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "#292F4F",
        },
      }}
    >
      {text}
    </Link>
  );
};

export default SocialLink;