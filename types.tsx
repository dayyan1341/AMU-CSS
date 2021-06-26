/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Welcome: undefined;
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Calendar: undefined;
  Notices: undefined;
  Events: undefined;
  News: undefined;
};

export type TabParamList = {
  TabOneScreen: undefined;
  EventsScreen: undefined;
  TabFourScreen: undefined;
  TabFiveScreen: undefined;
};

export interface News {
  data: [NewsData];
}

interface NewsData {
  id: number;
  title: string;
  description: string;
  slug: string;
  file: string | null;
  date: string;
}

export interface Notices {
  data: [NoticesData];
}

interface NoticesData {
  approval_status: string;
  created_at: string;
  file: string;
  id: number;
  title: string;
}
