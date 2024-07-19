import '7.css';
import { Dropdown } from './Dropdown';
import { StatusBar } from './StatusBar';
import { Tabs } from './Tabs';
import { Window } from './Window';

function App() {
  return (
    <div className="App" style={{ margin: 32 }}>
      <Window title="My First VB4 Program">
        <Tabs
          tabs={[
            {
              title: 'Desktop',
              content: <p>Desktop</p>
            },
            {
              title: 'My computer',
              content: <p>My computer</p>
            },
          ]}
        />

        <ul role="menu" style={{ width: 200 }}>
          <li role="menuitem" aria-haspopup="true">View</li>
          <li role="menuitem" aria-haspopup="true">
            Sort by
            <ul role="menu">
              <li role="menuitem"><a href="#menu">Name</a></li>
              <li role="menuitem"><a href="#menu">Size</a></li>
              <li role="menuitem"><a href="#menu">Item type</a></li>
              <li role="menuitem"><a href="#menu">Date modified</a></li>
            </ul>
          </li>
          <li role="menuitem"><a href="#menu">Refresh</a></li>
          <li role="menuitem"><a href="#menu">Paste</a></li>
          <li role="menuitem"><a href="#menu">Paste shortcut</a></li>
          <li role="menuitem"><a href="#menu">Screen resolution</a></li>
          <li role="menuitem"><a href="#menu">Gadgets</a></li>
          <li role="menuitem"><a href="#menu">Personalize</a></li>
        </ul>

      </Window>
    </div>
  );
}

export default App;
