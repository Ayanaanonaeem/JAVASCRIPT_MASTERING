import './App.css'
import Card from './component/card'

function App() {
  var obj={
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s",
    heading:"This is our Website",
    paragraph:"We at VeePN believe that Internet journeys should be safe and private for everyone. Our product is designed to protect you on public Wi-Fi, shield your data, and provide access to your favorite content."

  }

  return (
    <>
    <Card go={obj} />
      
    </>
  )
}

export default App
