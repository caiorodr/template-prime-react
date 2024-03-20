import { TabPanel, TabView } from "primereact/tabview"
import styled from "styled-components"


export const TabViewCustom =  styled(TabView)`
 .p-tabview-panel {
    height: 100vh
  }
`

interface LayoutProps{
  isOpen: boolean
  isExpanded: boolean
 }

export const Layout = styled.main<LayoutProps>`
  padding-left: ${props => (props.isOpen ? (props.isExpanded ? 'calc(60px + 15rem)' : 'calc(53px + 2rem)') : '0')}; 
  transition: 0.5s;
`

export const Header = styled.header`
  
`

interface AsideProps{
 isOpen: boolean
 isExpanded: boolean
}

export const Aside = styled.aside<AsideProps>`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-30%')};
  height: 100vh;
  width: ${props => (props.isExpanded ? '300px' : '5.25rem')};
  background-color: #2b2b2b;
  transition: 0.5s;
  z-index: 999;

  &:hover{
    width: 300px; 
  }
`

export const Content = styled.div`
  padding-top: 1.5rem;
`

export const CustomTabPanel = styled(TabPanel)`
  background-color: blue;
  color: white;
`;



