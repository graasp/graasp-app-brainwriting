import { AppData } from '@graasp/sdk';

import { AppDataTypes, CurrentStateAppData } from '@/config/appDataTypes';
import { ActivityStatus, ActivityType } from '@/interfaces/interactionProcess';

export const getCurrentState = (
  appData: AppData[],
  orchestratorId: string,
): CurrentStateAppData | undefined =>
  appData.find(
    ({ type, creator }) =>
      type === AppDataTypes.CurrentState && creator?.id === orchestratorId,
  ) as CurrentStateAppData;

export const getCurrentStatus = (
  appData: AppData[],
  orchestratorId: string,
): ActivityStatus | undefined =>
  appData.find(
    ({ type, creator }) =>
      type === AppDataTypes.CurrentState && creator?.id === orchestratorId,
  )?.data?.status as ActivityStatus;

export const getCurrentActivity = (
  appData: AppData[],
  orchestratorId: string,
): ActivityType | undefined =>
  appData.find(
    ({ type, creator }) =>
      type === AppDataTypes.CurrentState && creator?.id === orchestratorId,
  )?.data?.activity as ActivityType;

export const getCurrentRound = (
  appData: AppData[],
  orchestratorId: string,
): number | undefined => getCurrentState(appData, orchestratorId)?.data?.round;
