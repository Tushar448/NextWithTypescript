
const HOME_CATEGORIES = "Home/HomeCategoriesInfo";
export const HOME_CATEGORIES_RESOLVED = "Home/HomeCategoriesInfoResolved";
export const HOME_CATEGORIES_ERROR = "Home/HomeCategoriesInfoRehected";
export const HOME_CATEGORIES_CLEAR = "Home/HomeCategoriesInfoClear";

export function getHomeCategoryInfo() {
  return {
    type: HOME_CATEGORIES
    } as const;
}
getHomeCategoryInfo.toString = () => HOME_CATEGORIES;

export function getHomeCategoryInfoResolved(result: any) {
  return { type: HOME_CATEGORIES_RESOLVED, payload: result } as const;
}

export function getHomeCategoryInfoRejected(error: boolean) {
  return { type: HOME_CATEGORIES_ERROR, payload: error } as const;
}

export function clearHomeCategoryInfoData() {
  return { type: HOME_CATEGORIES_CLEAR } as const;
}

