import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

// import Header from './Header'

// function App() {
//   return(
//  <>
//       <Header />
//     </>
//   )
// }

// export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// function counter(){
//   const [count, setcount] = useState(0)

//   return(
//     <div style={{ textAlign:"center", marginTop: "50px" }}>
//       <h1>counter: {count}</h1>

//       <button onClick={() => setcount(count + 1)}>Increment</button>
//       <button onClick={() => setcount(count - 1)}>Decrement</button>
//       <button onClick={() =>setcount(0)}>Reset</button>
//     </div>
//   )
// }

// export default counter

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const [search, setSearch] = useState("");

//   const addTodo = () => {
//     if (input.trim() === "") return
//     if (/\d/.test(input)){
//       alert('enter only text')
//       return
//     }
//     setTodos([...todos, input]);
//     setInput("");
//   };

//   const deleteTodo = (index) => {
//     const updated = todos.filter((_, i) => i !== index);
//     setTodos(updated);
//   };

//   const filteredTodos = todos.filter((todo) =>
//     todo.toLowerCase().startsWith(search.toLowerCase()),
//   );

//   return (
//     <div style={{ display: "flex", gap: "40px", padding: "50px" }}>
//       <div style={{ flex: 1, textAlign: "center" }}>
//         <h1>to do list</h1>

//         <input
//           type="text"
//           placeholder="Enter something"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && addTodo()}
//         />
//         <button onClick={addTodo}>Add</button>

//         <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
//           {todos.map((todo, index) => (
//             <li key={index} style={{ marginBottom: "10px" }}>
//               {todo}
//               <button
//                 onClick={() => deleteTodo(index)}
//                 style={{ marginLeft: "10px", color: "red" }}
//               >
//                 x
//               </button>
//             </li>
//           ))}
//         </ul>
//         <p>{todos.length} task(s)</p>
//       </div>
//       {/* right side filter */}

//       <div style={{ flex: 1, textAlign: "center" }}>
//         <h1>Search Tasks</h1>

//         <input
//           type="text"
//           placeholder="search the task"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <ul
//           style={{
//             listStyle: "none",
//             padding: 0,
//             marginTop: "20px",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           {filteredTodos.length > 0 ? (
//             filteredTodos.map((todo, index) => (
//               <li
//                 key={index}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 {todo}
//               </li>
//             ))
//           ) : (
//             <p>no task found</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TodoApp;

function Stopwatch(){
    const[time, setTime] = useState(0)
    const[isrunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (isRunning){
            intervalRef.current = setInterval(() =>{
                setTime(prev => prev + 1)
            },1000)
        }
    } else{
        clearInterval(intervalRef.current)
    }  
        clearInterval


    )

}