export const identityImageConfig = {
  seasonalImagesEnabled: false,
  evergreenImagePath: "/images/zaks-croatia-3.png",
  seasonalImages: {
    spring: "/images/zaks-spring-placeholder.jpg.png"
  }
} as const;

export const activeIdentityImagePath = identityImageConfig.seasonalImagesEnabled
  ? identityImageConfig.seasonalImages.spring
  : identityImageConfig.evergreenImagePath;
