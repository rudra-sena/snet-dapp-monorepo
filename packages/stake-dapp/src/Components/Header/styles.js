export const useStyles = MUITheme => ({
  loggedInActionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  AccountCircleIcon: {
    marginRight: 22,
    color: MUITheme.palette.text.lightGrey,
    fontSize: 42,
    cursor: "pointer",
    [MUITheme.breakpoints.down("md")]: { marginRight: 0 },
  },
  NotificationsIcon: {
    margin: "0px 22px 0 0",
    color: MUITheme.palette.text.lightGrey,
    cursor: "pointer",
    fontSize: 25,
    verticalAlign: "super",
  },
  orgName: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 16,
    lineHeight: "20px",
  },
  role: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 12,
    lineHeight: "15px",
  },
  logOutActionContainer: {
    display: "flex",
    alignItems: "center",
  },
  loginBtn: {
    color: MUITheme.palette.text.white,
    cursor: "pointer",
    fontSize: 16,
    lineHeight: "20px",
  },
  signupBtn: {
    padding: "7px 30px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: MUITheme.palette.text.white,
    borderRadius: 4,
    marginLeft: 30,
    color: MUITheme.palette.text.white,
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
    letterSpacinng: 1.43,
    lineHeight: "16px",
    textTransform: "uppercase",
    "@media(max-width:1280px)": {
      padding: "7px 10px",
      marginLeft: 15,
    },
  },
  faqLink: {
    marginRight: 21,
    "& a": {
      color: MUITheme.palette.text.lightGrey,
      fontSize: 14,
      lineHeight: "18px",
      textDecoration: "none",
    },
    "& svg": {
      marginLeft: 8,
      color: MUITheme.palette.text.lightGrey,
      fontSize: 20,
      verticalAlign: "middle",
    },
    "&:hover": {
      "& a": { color: MUITheme.palette.text.white },
      "& svg": { color: MUITheme.palette.text.white },
    },
  },
});
