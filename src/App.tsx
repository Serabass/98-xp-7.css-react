import '98.css';
import { Dropdown } from './Dropdown';
import { StatusBar } from './StatusBar';
import { Tabs } from './Tabs';
import { Window } from './Window';

function App() {
  return (
    <div className="App">
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

        <Dropdown options={['Desktop', 'My computer']} />

        <StatusBar fields={['Press F1 for help', 'Slide 1', 'CPU Usage: 14%']} />
      </Window>
    </div>
  );
}

export default App;
