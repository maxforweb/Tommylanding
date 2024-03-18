import { Link } from "@mui/material";

const SocialLink = ({ href, text, width }) => {
  return (
    <Link href={href}
      sx={{
        width: "50px",
        height: "50px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "50%",
        textDecoration: "none",
        position: "relative",

        "> span": {
          position: "relative",
          zIndex: "3",
        },
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "2px solid #fff",
          zIndex: "2",
        },
        '&:after': {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "calc(100% + 5px)",
          height: "calc(100% + 5px)",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          boxShadow: "0 0 2em 0.2em var(--glow-clr)",
          opacity: "0",
          transition: "opacity 0.3s",
          background: "var(--btn-hover)",
          zIndex: "1",
        },
        "&:hover": {
          "&:after": {
            opacity: "1",
          },
        },
      }}
    >
      <span>{text}</span>
    </Link >
  );
};

export default SocialLink;