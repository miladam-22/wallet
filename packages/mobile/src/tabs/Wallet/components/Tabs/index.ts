import { TabsContainer } from './TabsContainer';
import { TabsBar } from './TabsBar';
import { TabsSection } from './TabsSection';
import { TabsFlashList } from './TabsFlashList'
import { TabsScrollView } from './TabsScrollView';
import { TabsHeader } from './TabsHeader';
import { TabsPagerView } from './TabsPagerView';

export const Tabs = Object.assign(TabsContainer, {
  Bar: TabsBar,
  Section: TabsSection,
  FlashList: TabsFlashList,
  ScrollView: TabsScrollView,
  Header: TabsHeader,
  PagerView: TabsPagerView
})