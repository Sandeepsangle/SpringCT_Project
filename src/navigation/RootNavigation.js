import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

export function screenPop(root) {
  if (navigationRef.isReady) {
    if (typeof root === 'string') {
      navigationRef.navigate(root);
    } else {
      navigationRef.dispatch(StackActions.pop());
    }
  }
}

export function screenNavigate(name, params = {}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const navigatePush = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

/*  routes=[{name:"routname",params:"object"}] */
export const navigateAndReset = (routes = [], index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: routes,
      }),
    );
  }
};

export const navigateAndSimpleReset = (
  routeName = '',
  params = {},
  index = 0,
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name: routeName, params: params}],
      }),
    );
  }
};

export function navigateReplace(name, param) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, param));
  }
}

export const goBack = () => {
  navigationRef.goBack();
};
