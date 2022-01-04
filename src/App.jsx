import './App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import Header_left_menu from './components/header-left-menu'
import Header_search from './components/header-search'
import Item_Active from './components/item-active'
import Item_Toggle from './components/item-toggle'
import Reply_Button from './components/reply-button'
import Archive_Button from './components/archive-button'
import Email_Info from './components/email-info'
import Date_Info from './components/date-info'
import Email_Action_Icons from './components/email-action-icons'
import Email_Content from './components/email-content'
import Email_Action_Buttons from './components/email-action-buttons'

function App() {
  return (
    <div className="app">
      <header className="header">
        <Header_left_menu />
        <Header_search />
      </header>
      <nav className="left-menu">
        <ul className="inbox-list">
          <Item_Active />
          <Item />
          <Item_Toggle />
        </ul>
      </nav>
      <main className="email-view">
        <nav className="email-toolbar">
          <ul>
            <Reply_Button />
            <Archive_Button />
            <Delete_Button />
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
        <article className="email-content">
          <Email_Title />
          <header className="email-content--header">
            <div className="avatar"></div>
            <Email_Info />
            <Date_Info />
            <Email_Action_Icons />
          </header>
          <section className="email-body">
            <Email_Content />
          </section>
          <section className="email-actions">
            <Email_Action_Buttons />
          </section>
        </article>
      </main>
    </div>
  )
}

export default App
