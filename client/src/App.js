import Card from './components/Card';
import Form from './components/Form';
import Input from './components/Input';
import FileInput from './components/FileInput';
import TransferButton from './components/TransferButton';

import './App.css';

function App() {
  // const filePickHandler = e => {
  //   console.log(e.target.files);
  // };

  // const changeEventHandler = e => {
  //   console.log(e.target.files);
  // };

  return (
    <div className="App">
      <h1>App</h1>
      <Card>
        <Form>
          <FileInput />
          <Input type="text" label="Email to" id="receiver" />
          <Input type="text" label="Your email" id="sender" />
          <textarea></textarea>
          <TransferButton />
        </Form>
      </Card>
    </div>
  );
}

export default App;
