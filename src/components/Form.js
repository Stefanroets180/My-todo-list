import React from "react";

const Form = ({setInputTex, todos, setTodos, inputText, setStatus}) => {
    //here I can write javascript code and functions and what ever I want.
    const  inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputTex(e.target.value);
    };
    const submittodoHandler = (e) => {
      e.preventDefault();
      setTodos([
          ...todos,
          { text: inputText, completed: false, id: Math.random() * 1000 }
      ]);
      setInputTex("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button onClick={submittodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onClick={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
