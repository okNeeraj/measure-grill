// import { INDICATE_CLASS } from '@utils/constant'
import { ReactNode, createContext, useContext, useState } from 'react'

type TabsProps = {
  activeTab: string
  children: ReactNode
}
const ActiveTabContext = createContext({
  currentTab: '',
  updateTab: (tabId) => {},
})

export const Tabs: React.FC<TabsProps> = ({ children, activeTab }) => {
  const [currentTab, setTab] = useState(activeTab)
  const updateTab = (tabId: string) => {
    setTab(tabId)
  }

  return (
    <ActiveTabContext.Provider value={{ currentTab, updateTab }}>
      <div className="tabs" data-active={activeTab}>
        {children}
      </div>
    </ActiveTabContext.Provider>
  )
}

type TabListProps = {
  children: React.ReactElement<typeof TabMenu>[]
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
  return <div className="tab-menu flex mb-4 gap-4 text-md rounded-md shadow-sm bg-white p-4">{children}</div>
}

type TabMenuProps = {
  value: string
  label: string
  score?: number
  variant?: string
}

export const TabMenu: React.FC<TabMenuProps> = ({ value, score, label }) => {
  const { currentTab, updateTab } = useContext(ActiveTabContext)
  return (
    <div
      data-id={value}
      className={`px-4 py-2 cursor-pointer rounded-md flex flex-col gap-2 items-center ${currentTab === value ? 'bg-violet-100 text-violet-800' : 'border-transparent text-slate-600 hover:text-violet-800'}`}
      onClick={() => {
        updateTab(value)
      }}
    >
      {/* <span className="text-indicat-improve">{score}</span> */}
      <span className="text-sm font-bold">{label}</span>
    </div>
  )
}

type TabContentProps = {
  value: string
  children: ReactNode
}

export const TabContent: React.FC<TabContentProps> = ({ value, children }) => {
  const { currentTab } = useContext(ActiveTabContext)
  return currentTab === value ? (
    <div data-tab={value} className="min-h-[400px]">
      {children}
    </div>
  ) : null
}
