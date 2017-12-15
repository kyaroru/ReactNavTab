export const NAME = 'TAB';

export const JUMP_TO_TAB = `${NAME}/JUMP_TO_TAB`;
export const GO_BACK_FROM_TAB = `${NAME}/GO_BACK_FROM_TAB`;
export const GO_TO_FROM_TAB = `${NAME}/GO_TO_FROM_TAB`;

export const getCurrentTab = store => store.tabBar.index;
export const getCurrentTabView = (store) => {
  let tabIndex;
  let tabRouteName;
  const index = getCurrentTab(store);
  if (index === 0) {
    // first tab
    tabIndex = store.tabOne.index;
    tabRouteName = store.tabOne.routes[tabIndex].routeName;
  } else if (index === 1) {
    tabIndex = store.tabTwo.index;
    tabRouteName = store.tabTwo.routes[tabIndex].routeName;
  } else if (index === 2) {
    tabIndex = store.tabThree.index;
    tabRouteName = store.tabThree.routes[tabIndex].routeName;
  }
  return { tabIndex, tabRouteName };
};

export const jumpToTab = index => ({
  type: JUMP_TO_TAB,
  index,
});

export const goBackFromTab = (tab, key) => ({
  type: GO_BACK_FROM_TAB,
  tab,
  key,
});

export const goToFromTab = (tab, routeName, params) => ({
  type: GO_TO_FROM_TAB,
  tab,
  routeName,
  params,
});
