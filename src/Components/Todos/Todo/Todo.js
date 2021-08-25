import "./Todo.css";

const Todo = (props) => {
  const checked = props.done ? true : false;
  return (
    <div className={props.done ? "todo done" : "todo"}>
      <div className="check">
        <input
          type="checkbox"
          id={"todo-check-" + props.id}
          checked={checked}
          onChange={props.handleCheck}
        />
        <label htmlFor={"todo-check-" + props.id}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M416 128L192 384l-96-96"
            />
          </svg>
        </label>
      </div>

      <div className="content">{props.content}</div>

      <div className="remove" onClick={props.remove}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M80 112h352"
          />
          <path
            d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      </div>
    </div>
  );
};

export default Todo;
