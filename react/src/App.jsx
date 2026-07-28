
import Button from "./Button";
import Card from "./Card";

function App() {
  const student=[{
    id:1,
    username:"Rahul Das",
    course:"MERN",
    contact:9776644337
    },
    {
      id:2,
    username:"Kunal",
    course:"MERN",
    contact:9776656462
    },
    {
    id:3,
    username:"Akash",
    course:"MERN",
    contact:88442944337
    },
    {
      id:4,
      username:"sonam",
      course:"MERN",
      contact:88442944337
    },
  ]

  return (
    <>
      <h1>Student Card</h1>
      <div className="flex flex-row gap-1.5">
        {student.map((student) =>(<Card 
        username={student.username}
        course={student.course}
        contact={student.contact}/>
        ))}

      </div>
    
    </>
  );
}

export default App;
