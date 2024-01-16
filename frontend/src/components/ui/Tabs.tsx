import { ReactNode } from 'react'

type TabsProps = {
  activeTab: string
  children: ReactNode
}

export const Tabs: React.FC<TabsProps> = ({ children, activeTab }) => {
  return (
    <div className="tabs" data-active={activeTab}>
      {children}
    </div>
  )
}

type TabListProps = {
  children: React.ReactElement<typeof TabMenu>[]
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
  // Your implementation for TabList component
  return <div className="tab-menu flex mb-2">{children}</div>
}

type TabMenuProps = {
  value: string
  label: string
}

export const TabMenu: React.FC<TabMenuProps> = ({ value, label }) => {
  // Your implementation for TabMenu component
  return (
    <>
      <div
        data-id={value}
        className="px-2 py-4 cursor-pointer hover:text-blue-500"
      >
        {label}
      </div>
    </>
  )
}

type TabContentProps = {
  value: string
  children: ReactNode
}

export const TabContent: React.FC<TabContentProps> = (props) => {
  // Your implementation for TabContent component
  console.log('pff', props)
  const { value, children } = props
  return (
    <>
      <div data-tab={value} className="bg-gray-200 p-4 mb-2">
        {children}
      </div>
    </>
  )
}
