type PageName =
  | "Home"
  | "CyberServices"
  | "Entertainment"
  | "GraphicsDesign"
  | "Construction"
  | "Gallery"
  | "AboutSection"
  | "FAQs"
  | "ContactSection";

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
    case "Gallery":
      return "/gallery";
    case "AboutSection":
      return "/about";
    case "FAQs":
      return "/faqs";
    case "ContactSection":
      return "/contact";
  }
}
