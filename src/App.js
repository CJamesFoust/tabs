import Tabs from './Components/Tabs';
import './App.css';

function App() {
  const tabs = [{
    label: "Tab 1",
    content: "This is content for Tab 1",
    id: 1
    },
    {
    label: "Tab 2",
    content: "This is content for Tab 2",
    id: 2
    },
    {
    label: "Tab 3",
    content: "This is content for Tab 3",
    id: 3
    }];

  return (
    <div className="App">
      <header className="App-header">
        <Tabs tabs={ tabs } />
      </header>
    </div>
  );
}

export default App;
