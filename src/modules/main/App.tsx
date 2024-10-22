import { useEffect, useState } from 'react';

import { useLocalContext } from '@graasp/apps-query-client';
import { Context } from '@graasp/sdk';

import * as Sentry from '@sentry/react';

import { DEFAULT_LANG } from '@/config/constants';
import { SENTRY_ENV } from '@/config/env';
import { hooks } from '@/config/queryClient';
import useActions from '@/hooks/useActions';
import { ActivityStateProvider } from '@/modules/context/ActivityStateContext';

import i18n from '../../config/i18n';
import { MembersProvider } from '../context/MembersContext';
import { SettingsProvider } from '../context/SettingsContext';
import AnalyticsView from './AnalyticsView';
import BuilderView from './BuilderView';
import PlayerView from './PlayerView';

const App = (): JSX.Element => {
  console.log('Rendering app');
  const context = useLocalContext();
  const { data: appContext, isSuccess } = hooks.useAppContext();
  const { postOpenAppAction } = useActions();

  const [openEventSent, setOpenEventSent] = useState(false);

  useEffect(() => {
    if (!openEventSent) {
      postOpenAppAction(undefined, context);
      setOpenEventSent(true);
    }
  }, [context, openEventSent, postOpenAppAction]);

  useEffect(() => {
    if (['development', 'staging'].includes(SENTRY_ENV)) {
      if (isSuccess) {
        const m = appContext?.members?.find(
          ({ id }) => id === context.accountId,
        );
        if (m) {
          Sentry.setUser({
            id: m.id,
            email: m.email,
            username: m.name,
          });
        }
        Sentry.setContext('app-context', {
          itemId: appContext.item.id,
          name: appContext.item.name,
          path: appContext.item.path,
        });
      }
    }
  });

  useEffect(() => {
    // handle a change of language
    const lang = appContext?.item?.lang ?? context?.lang ?? DEFAULT_LANG;
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [appContext, context]);

  const renderContent = (): JSX.Element => {
    switch (context.context) {
      case Context.Builder:
        return <BuilderView />;

      case Context.Analytics:
        return <AnalyticsView />;

      case Context.Player:
      default:
        return <PlayerView />;
    }
  };

  return (
    <MembersProvider>
      <SettingsProvider>
        <ActivityStateProvider>{renderContent()}</ActivityStateProvider>
      </SettingsProvider>
    </MembersProvider>
  );
};

export default App;
