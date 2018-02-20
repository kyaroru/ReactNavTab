const NAME = 'NAV';

export const JUMP_TO_TAB = `${NAME}/JUMP_TO_TAB`;
export const GO_BACK_FROM_TAB = `${NAME}/GO_BACK_FROM_TAB`;
export const GO_TO_FROM_TAB = `${NAME}/GO_TO_FROM_TAB`;

export const getCurrentTab = store => store[NAME].tab.bar.index;

export const getCurrentTabView = (store) => {
  let tabIndex;
  let tabRouteName;
  const tabOne = store[NAV].tab.one;
  const tabTwo = store[NAV].tab.two;
  const tabThree = store[NAV].tab.three;

  const index = getCurrentTab(store);
  if (index === 0) {
    // first tab
    tabIndex = tabOne.index;
    tabRouteName = tabOne.routes[tabIndex].routeName;
  } else if (index === 1) {
    tabIndex = tabTwo.index;
    tabRouteName = tabTwo.routes[tabIndex].routeName;
  } else if (index === 2) {
    tabIndex = tabThree.index;
    tabRouteName = tabThree.routes[tabIndex].routeName;
  }
  return { tabIndex, tabRouteName };
};

export const getTabBarNavigation = store => store[NAME].tab.bar;
export const getTabOneNavigation = store => store[NAME].tab.one;
export const getTabTwoNavigation = store => store[NAME].tab.two;
export const getTabThreeNavigation = store => store[NAME].tab.three;

export const jumpToTab = index => ({
  type: JUMP_TO_TAB,
  index,
});

export const goBackFromTab = (index, key) => ({
  type: GO_BACK_FROM_TAB,
  index,
  key,
});

export const goToFromTab = (index, routeName, params) => ({
  type: GO_TO_FROM_TAB,
  index,
  routeName,
  params,
});
