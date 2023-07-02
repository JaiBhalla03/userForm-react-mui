import logo from './logo.svg';
import './App.css';
import UserForm from "./components/UserForm";

function App() {
  return (
      <div className={"App flex flex-col items-center justify-center gap-4 h-screen py-8 px-2 bg-gray-100"}>
          <h1 className={'text-3xl md:text-5xl font-semibold text-gray-500'}>User Form</h1>
          <UserForm />
      </div>
  );
}

export default App;
