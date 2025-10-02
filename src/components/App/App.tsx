import Alert from "../Alert/Alert";
import css from "./App.module.css";
import Button from "../Button/Button";
import UserMenu from "../UserMenu/UserMenu";
import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import ClickCounterall from "../../ClickCounterall";
interface Values {
  x: number;
  y: number;
}
interface KindFriends {
  name: string;
  email: string;
  eyeColor: string;
  friends: [string, string?, string?];
  isActive: boolean;
  balance: number;
  skills: [string, string?, string?, string?, string?];
  gender: string;
  age: number;
}
const kindFriends: KindFriends[] = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

console.log(kindFriends);

export default function App() {
  const [clicksall, setclicksall] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  // const [clicks, setClicks] = useState<number>(0);
  // Для складніших даних, потрібно вказати тип явно:

  // interface User {
  //   id: number;
  //   name: string;
  // }

  // Стан який зберігає масив об'єктів користувача
  // const [items, setItems] = useState<User[]>([]);

  // Стан, який може бути або об'єктом, або null
  // const [user, setUser] = useState<User | null>(null);
  const handleClick = () => {
    setclicksall(clicksall + 1);
  };
  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log("Clicked!", event);
  //   console.log("Target:", event.target); // сам <button>
  // };
  return (
    <>
      <h1>Friends</h1>
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <ul className={css.app}>
        {kindFriends.map((kindFriend, index) => (
          <li style={{ padding: "12px 16px", color: "red" }} key={index}>
            {kindFriend.name}
            <button
              style={{ width: "20 px", height: "20 px", background: "blue" }}
            />
          </li>
        ))}
      </ul>
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <UserMenu name="Alex" />
      <ClickCounter />
      <ClickCounter />
      <ClickCounterall value={clicksall} onUpdate={handleClick} />
      <ClickCounterall value={clicksall} onUpdate={handleClick} />
      {/* <button onClick={handleClick}>Current: {clicks}</button>; */}
      {/* <button onClick={handleClick}>Click me!</button> */}
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
      </button>

      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
      <div>
        <p>
          x: {values.x}, y: {values.y}
        </p>
        <button onClick={updateX}>Update x</button>
        <button onClick={updateY}>Update y</button>
      </div>
    </>
  );
}
