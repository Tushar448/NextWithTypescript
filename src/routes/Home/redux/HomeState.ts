export interface HomeCategoryState {
isHomeCategoryError: boolean;
homeCategoryData?: any
}

export interface HomeState {
    homeCategoryState: HomeCategoryState;
}