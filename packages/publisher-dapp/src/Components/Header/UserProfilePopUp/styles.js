export const useStyles = MUITheme => ({
  UserProfilePopUpContainer: {
    width: 400,
    borderRadius: 4,
    margin: 0,
    position: "absolute",
    top: 10,
    right: 60,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    zIndex: 1,
  },
  mobUserProPopup: {
    top: 120,
    right: "30%",
    transform: "translateX(15%)",
    "@media(max-width:560px)": {
      width: "80%",
      right: "10%",
      transform: "translateX(0)",
      "& h4": {
        fontSize: 16,
        wordBreak: "break-all",
      },
    },
  },
  userProfileMenuList: {
    padding: 0,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: MUITheme.palette.border.grey,
    margin: 0,
    "& li": {
      padding: "12px 20px",
      display: "flex",
      cursor: "pointer",
      listStyle: "none",
      "& > div": { display: "flex" },
      "& svg": {
        paddingRight: 15,
        color: "#757575",
        verticalAlign: "middle",
      },
      "& span": {
        width: "100%",
        paddingLeft: 12,
        color: MUITheme.palette.text.darkGrey,
        fontFamily: MUITheme.typography.fontFamily,
        fontSize: 16,
        lineHeight: "28px",
        letterSpacing: 0.5,
      },
      "&:hover": { background: MUITheme.palette.background.mainContent },
    },
  },
  orgNameContainer: {
    display: "flex",
    justifyContent: "space-between",
    "& span": {
      display: "block",
    },
  },
  signoutLink: {
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: MUITheme.palette.text.disabled,
  },
});
