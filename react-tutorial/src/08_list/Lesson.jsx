import React, {Fragment, Component} from 'react';

// const Lesson = () => {
//   const val = null;
//
//   return (
//     <div>
//       {(val >= 10) ? <h2>Grate than 10</h2> : <h3>Less than <em>10</em></h3>}
//       {val && <span>We have val</span>}
//     </div>
//   );
// };

const Tab1 = () => {
  return <h1>Text of tab1</h1>
}

const Tab2 = () => {
  return <h1>Text of tab2</h1>
}

const Tab3 = () => {
  return <h1>Text of tab3</h1>
}

const TABS_BTN = [
  {
    dataName: 1,
    title: 'Tab1',
  },
  {
    dataName: 2,
    title: 'Tab2',
  },
  {
    dataName: 3,
    title: 'Tab3',
  }
]

const people = ['Jack', 'Max', 'Danil', 'Shamil']

class App extends Component {

  state = {
    activeTab: 1,
  }

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name')
    })
  }

  render() {
    const {activeTab} = this.state
    return (
      <Fragment>
        {TABS_BTN.map(({ dataName, title}) => (
          <button
            key={`${dataName} - ${title}`}
            data-name={dataName}
            onClick={this.handleTab}>
          </button>
        ))}
        {activeTab === 1 && <Tab1/>}
        {activeTab === 2 && <Tab2/>}
        {activeTab === 3 && <Tab3/>}
        <div>
          {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </div>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </Fragment>

    )
  }
}

export default App;
