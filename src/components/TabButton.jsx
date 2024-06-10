export default function TabButton({children}) {
    function handleClick(){
        console.log("Click me")
    }
  return (
    <li>
        <button onClick={handleClick}>{children}</button>
    </li>
  )
}
