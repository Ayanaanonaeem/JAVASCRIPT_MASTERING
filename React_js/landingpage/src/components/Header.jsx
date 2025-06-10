import Button from "./Button";

function Header({header}) {
    
    
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={header.logo} className="w-10 h-10 rounded-3xl"  alt="" />
      <span className="ml-3 text-xl">{header.title}</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">home</a>
      <a className="mr-5 hover:text-gray-900">contact us</a>
      
    </nav>
   <Button label={"login"}></Button>
  </div>
</header>

    </div>
  )
}

export default Header
