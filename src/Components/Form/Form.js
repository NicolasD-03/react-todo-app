import "./Form.css";

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <input
        className="content-input"
        type="text"
        name="todo-content"
        placeholder="Type anything"
        ref={props.input}
      />
      <input className="submit-btn" type="submit" value="Save" />
    </form>
  );
};

export default Form;
