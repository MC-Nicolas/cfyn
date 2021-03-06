import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import DataManager from '../components/dataManager/DataManager';

import { useUserData } from '../lib/hooks';
import CircleLoader from '../components/loader/loader';
// Redux
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const MyApp = ({ Component, pageProps }) => {
  const userData = useUserData();

  return (
    <Provider store={store}>
      <DataManager userData={userData} />
      <CircleLoader />
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  );
};

export default MyApp;
