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
  return <div className="tab-menu flex mb-4 text-sm bg-white">{children}</div>
}

type TabMenuProps = {
  value: string
  label: string
}

export const TabMenu: React.FC<TabMenuProps> = ({ value, label }) => {
  const { currentTab, updateTab } = useContext(ActiveTabContext)
  return (
    <div
      data-id={value}
      className={`px-4 border-b-2 py-4 cursor-pointer ${currentTab === value ? 'border-violet-800 text-violet-800 hover:text-violet-800' : 'border-transparent text-slate-600 hover:text-slate-800'}`}
      onClick={() => {
        updateTab(value)
      }}
    >
      {label}
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
    <div data-tab={value} className="">
      {children}
    </div>
  ) : null
}
