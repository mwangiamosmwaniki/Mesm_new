type PageName =
  | "Home"
  | "CyberServices"
  | "Entertainment"
  | "GraphicsDesign"
  | "Construction";

export function createPageUrl(pageName: PageName): string {
  switch (pageName) {
    case "Home":
      return "/";
    case "CyberServices":
      return "/cyberservices";
    case "Entertainment":
      return "/entertainment";
    case "GraphicsDesign":
      return "/graphicsdesign";
    case "Construction":
      return "/construction";
  }
}
