import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main";

export default function Home() {
  let counter=1
  const list = [
    {id:1,value:"content1"},
    {id:2,value:"content2"},
    {id:3,value:"content3"},
    {id:4,value:"content4"}
  ]
  return (
    <div className="bg-yellow-500 p-10">
      <Navigation />
      <Main counter={counter}/>
     counter: {counter}
     {counter=== 0 ? <p>计数器没有启动</p> : <p>计数器：{counter}</p> }
     <ul>
      {list.map((item) => {
        return <li key={item.id}>{item.value}</li>
      })}
     </ul>
    </div>
  )
}
