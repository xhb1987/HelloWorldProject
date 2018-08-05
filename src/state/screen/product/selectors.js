export const getProductNotification = state => state.notification;

export const getProductTitle = state => state.productToPublish.commodityTitle;
export const getProductDiscription = state => state.productToPublish.discriptionInfos;
export const getProductImages = state => state.productToPublish.fileName;
export const getProductUsage = state => state.productToPublish.oldOrNew;
export const getProductPlace = state => state.productToPublish.placeID;
export const getProductPrice = state => state.productToPublish.nowPrice;
