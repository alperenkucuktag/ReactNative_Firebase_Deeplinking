import React from 'react';
import {NavigationContainer, LinkingOptions} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import utils from '@react-native-firebase/app';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Linking} from 'react-native';

const linking: LinkingOptions = {
  prefixes: ['deeplinking://', 'https://deeplinkingemail.page.link/'],

  async getInitialURL() {
    try {
      const {isAvailable} = utils().playServicesAvailability;

      if (isAvailable) {
        const initialLink = await dynamicLinks().getInitialLink();
        if (initialLink) {
          return initialLink.url;
        }
      }

      const url = await Linking.getInitialURL();
      return url;
    } catch (error) {
      console.error('Error fetching initial URL:', error);
      return null;
    }
  },

  subscribe(listener: (url: string) => void) {
    // Firebase Dynamic Links dinleme
    const unsubscribeFirebase = dynamicLinks().onLink(({url}) => {
      listener(url);
    });

    // Deep Linking API'sini dinleme
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      listener(url);
    });

    return () => {
      unsubscribeFirebase();
      linkingSubscription.remove();
    };
  },

  config: {
    screens: {
      Login: 'Login',
      Forgot: {
        path: 'Forgot/:message',
        parse: {
          message: (message: string) => `${message}`,
        },
      },
      Home: 'Home',
      SignUp: 'SignUp',
    },
  },
};

type Props = {};

const App: React.FC<Props> = props => {
  return (
    <NavigationContainer linking={linking}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
