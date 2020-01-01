import { StyleSheet } from "react-native";
import { theme } from "../../constants/Theme";

export default StyleSheet.create({
  accessory: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  containerView: {
    position: "absolute",
    width: 300,
    minHeight: 40,
    maxHeight: 400,
    top: 67,
    left: '10%',
    zIndex: 100,
    shadowRadius: 3,
    shadowColor: theme.textSubtitle,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
  },
  item: {
    textAlign: "left",
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 24,
    height: 21,
    justifyContent: "center",
  },
  listFooter: {
    height: 16.7,
    borderTopWidth: 1,
    borderTopColor: theme.divider,
  },
  listHeader: {
    height: 41.8,
    justifyContent: "center",
    paddingTop: 0,
    backgroundColor: theme.backgroundPrimary,
    borderBottomWidth: 1,
    borderBottomColor: theme.primary,
  },
  listItemText: {
    justifyContent: "center",
    color: theme.listItem,
  },
  listHeaderText: {
    color: theme.textSubtitle,
  },
  noData: {
    color: theme.divider,
    paddingTop: 10,
    paddingLeft: 16,
    fontSize: theme.sizes.size16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 8,
  },
  rightContentItem: {
    color: theme.divider,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: theme.divider,
  },
  scroll: {
    flex: 1,
    zIndex: 200,
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    borderRadius: 2,
    elevation: 6,
    width: '100%',
    height: '100%',
  },
  separator: {
    height: 1,
    backgroundColor: theme.divider,
  },
  triangle: {
    width: 8,
    height: 8,
    transform: [
      {
        translateY: -4,
      },
      {
        rotate: "45deg",
      },
    ],
  },
  triangleContainer: {
    width: 12,
    height: 6,
    overflow: "hidden",
    alignItems: "center",

    backgroundColor: "transparent",
  },
});
