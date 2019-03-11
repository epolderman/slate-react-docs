import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => <div>{'Slate'}</div>;

ReactDOM.render(<App />, document.getElementById('root'));

//@ts-ignore
module.hot.accept();
