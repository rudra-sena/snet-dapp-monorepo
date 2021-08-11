export const useStyles = MUITheme => ({
  currentMainContainer: {
    maxWidth: 1215,
    margin: "32px auto 0",
    fontFamily: MUITheme.typography.fontFamily,
    "& > span": {
      width: "100%",
      marginTop: 50,
      display: "inline-block",
      color: MUITheme.palette.text.primary,
      fontSize: 16,
      fontStyle: "italic",
      fontWeight: 300,
      letterSpacing: 0.25,
      lineHeight: "18px",
      textAlign: "center",
    },
    "@media(max-width:1280px)": { maxWidth: "95%" },
  },
  headingText: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "25px",
  },
  activeSessionBox: {
    padding: "24px 40px",
    border: "3px solid #6F106A",
    borderRadius: 4,
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    backgroundColor: MUITheme.palette.primary.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "@media(max-width:960px)": { flexDirection: "column" },
  },
  openSessionBox: {
    padding: "24px 40px",
    border: "3px solid #00C48C",
    borderRadius: 4,
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    backgroundColor: MUITheme.palette.primary.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "@media(max-width:960px)": { flexDirection: "column" },
  },
  activeTag: {
    backgroundColor: "#6F106A",
  },
  liveTag: {
    backgroundColor: "#00C48C",
  },
  activeOpenSessionDetails: {
    "& > span": {
      "&:first-of-type": {
        color: MUITheme.palette.text.darkGrey,
        fontSize: 24,
        fontWeight: 600,
        lineHeight: "50px",
      },
      "&:last-of-type": {
        padding: "0 7px",
        borderRadius: 4,
        marginLeft: 12,
        color: MUITheme.palette.text.white,
        fontSize: 14,
        fontStyle: "italic",
        fontWeight: 800,
        letterSpacing: 0.25,
        lineHeight: "18px",
        textTransform: "uppercase",
      },
    },
    "& > div": {
      paddingTop: 24,
      display: "flex",
      "& > div": {
        "&:first-of-type": {
          marginRight: "10%",
          "@media(max-width:720px)": { margin: "0 0 20px 0" },
        },
        "& > p": {
          margin: 0,
          display: "flex",
          alignItems: "center",
          "& svg": {
            marginRight: 5,
            color: MUITheme.palette.text.disabled,
            fontSize: 16,
          },
          "&:first-of-type": {
            marginBottom: 4,
            color: MUITheme.palette.text.lightGrey,
            fontSize: 16,
            lineHeight: "20px",
          },
          "&:last-of-type": {
            color: MUITheme.palette.text.darkGrey,
            fontSize: 18,
            lineHeight: "22px",
            "@media(max-width:1280px)": { fontSize: 16 },
            "& span": {
              paddingLeft: 5,
              color: MUITheme.palette.text.lightGrey,
              fontSize: 14,
              lineHeight: "18px",
            },
          },
        },
      },
      "@media(max-width:960px)": { justifyContent: "center" },
      "@media(max-width:720px)": { flexDirection: "column" },
    },
    "@media(max-width:960px)": {
      width: "100%",
      textAlign: "center",
    },
  },
  activeOpenSessionBtnContainer: {
    textAlign: "right",
    "& button": {
      width: 300,
      padding: "16px 0",
    },
    "@media(max-width:960px)": { marginTop: 50 },
  },
  noActiveSessionContainer: {
    marginTop: 24,
    textAlign: "center",
    "& span": {
      paddingTop: 15,
      display: "block",
      color: MUITheme.palette.text.primary,
      fontSize: 24,
      fontWeight: 200,
      lineHeight: "30px",
    },
  },
  upcomingSessionContainer: {
    marginTop: 64,
    "& ul": {
      padding: 0,
      margin: 0,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      "& li": {
        boxSizing: "border-box",
        width: 248,
        padding: "22px 20px 21px 21px",
        borderRadius: 4,
        margin: "24px 24px 0 0",
        display: "inline-block",
        backgroundColor: MUITheme.palette.primary.white,
        boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
        listStyle: "none",
        textAlign: "center",
        "& > span": {
          fontSize: 24,
          fontWeight: 600,
          lineHeight: "24px",
        },
        "&:last-of-type": {
          boxShadow: "none",
          "& > span": {
            color: MUITheme.palette.text.primary,
            fontSize: 14,
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: 0.25,
            lineHeight: "18px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        },
        "&:nth-child(4n)": {
          marginRight: 0,
          position: "relative",
          "@media(max-width:1140px)": { marginRight: 24 },
        },
      },
      "@media(max-width:1140px)": { justifyContent: "center" },
    },
  },
  activeUpcomingSessionDetails: {
    backgroundColor: MUITheme.palette.primary.main,
    color: MUITheme.palette.text.white,
    "&::after": {
      border: "1px solid red",
    },
  },
  upcomingSessionDetails: {
    color: MUITheme.palette.text.primary,
    "& > div": {
      color: "#222",
    },
  },
  stakeDateTimeDetails: {
    padding: "32px 0",
    "& p": {
      paddingBottom: 4,
      borderBottom: "1px solid #ccc",
      margin: 0,
      display: "flex",
      alignItems: "center",
      fontSize: 26,
      fontWeight: "bold",
      lineHeight: "33px",
      "& svg": {
        paddingRight: 13,
        color: MUITheme.palette.border.secondary,
      },
    },
    "& span": {
      paddingTop: 4,
      display: "inline-block",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "20px",
    },
  },
  sessionOpeningTime: {
    "& p": {
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#BFD6FF",
      fontSize: 13,
      lineHeight: "16px",
      "& svg": {
        paddingRight: 7,
        color: "#BFD6FF",
        fontSize: 13,
      },
    },
  },
  dhmsContainer: {
    "& > div": {
      marginTop: 4,
      "& > div": {
        padding: 0,
        justifyContent: "space-between",
        "& > div": {
          padding: 0,
          display: "flex",
          "& p": {
            "&:first-of-type": {
              color: MUITheme.palette.text.white,
              fontSize: 16,
              fontWeight: 600,
              lineHeight: "20px",
            },
            "&:last-of-type": {
              paddingLeft: 4,
              color: "#BFD6FF",
              fontSize: 12,
              fontWeight: 300,
              lineHeight: "15px",
            },
          },
        },
      },
    },
  },
});
