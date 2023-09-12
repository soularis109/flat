import React, {
  useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import localeGb from '../../locales/en';

const IntlWrapper = ({ children }) => {
  const [locale, setLocale] = useState(localeGb);
  return (
    <IntlProvider
      messages={locale.messages}
      locale={localeGb}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
};

export default IntlWrapper;

IntlWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
