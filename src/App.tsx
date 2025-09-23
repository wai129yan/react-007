
type ButtonPros = { text: string, color: string, value?: number }
export default function App() {
  return (
    <div>
      <h1 className="bg-red-300 font-bold">Hello , This is React !</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi. Adipisci, beatae? Quisquam sint labore, magni minus accusantium soluta maxime.</p>

      <Button text="Add" color="blue" value={100} />
      <Button text="Reset" color="zinc" />
      <Button text="Remove" color="green" value={300} />

      <Button2 text="Remove" color="red" value={300} />
      <Button2 text="Reset" color="zinc" />
      <Button2 text="Add" color="blue" value={100} />

    </div>
  )
}

function Button(props: ButtonPros) {
  console.log(props)
  return <button className={`${props.color === "blue" ? "bg-blue-500" : props.color === "zinc" ? "bg-zinc-500" : props.color === "green" ? "bg-green-500" : "bg-red-400"}`}>
    {props.text + " " + props.color + " " + props.value}</button>;
}

function Button2({ text, color, value }: ButtonPros) {
  // console.log(props)
  return <button className={`${color === "blue" ? "bg-blue-500" : color === "zinc" ? "bg-zinc-500" : color === "green" ? "bg-green-500" : "bg-red-400"}`}>
    {text + " " + color + " " + value}</button>;
}