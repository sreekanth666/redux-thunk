import './App.css'
import CoLogicUsingAsync from './components/co_package/using_async/CoLogicUsingAsync'
import UsingCo from './components/co_package/using_co/UsingCo'

function App() {
  return (
    <>
      <h1>Using CO</h1>
      <UsingCo />

      <h1 className='mt-5'>Same logic Using Async</h1>
      <CoLogicUsingAsync />

    </>
  )
}

export default App
