import React, { 
    useState, 
    useRef, 
    memo, 
    useCallback
} from 'react';
import {
    P, A, 
    StyledInput, 
    StyledButton, 
    StyledSubmitButton, 
    Div,
    Form,
    ToDoListDiv,
    ToDoBack,
    StyledFont
} from './styles';
import { createGlobalStyle } from 'styled-components';
import { 
    EnterOutlined,
    CloseSquareTwoTone,
    CheckSquareTwoTone,
    StrikethroughOutlined
} from '@ant-design/icons';
import { Button } from 'antd';
import * as uuid from 'uuid';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #bae7ff;
        height: 100%;
    }
`;

const Todo = memo(() => {
    const [toDos, setToDos] = useState({});
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const deleteToDo = useCallback((id) => {
        setToDos((prevToDos) => {
          delete prevToDos[id];
          return {...prevToDos}
        });
    });

    const onClickToDoOk = useCallback((id) => {
        setToDos((prevToDos) => {
            prevToDos[id].isCompleted = !prevToDos[id].isCompleted;
            return {...prevToDos}
        });
    });

    const addToDo = useCallback((e) => {
        e.preventDefault();
        if (value !== "") {
          const ID = uuid.v1();
          const newToDoObject = {
            [ID]: {
              id: ID,
              isCompleted: false,
              text: value,
              createAt: Date.now()
            }
          };
          setValue("");
          setToDos(prevToDos => {
            return { ...newToDoObject, ...prevToDos }
          });
          inputRef.current.focus();
        } 
    });

    const onChangeValue = (e) => {
        setValue(e.target.value);
    };

    const renderTodo = useCallback(() => {
        return Object.keys(toDos).length === 0
            ? null
            : Object.keys(toDos).map( ID => (
                    <ToDoListDiv key={ID}>
                        <div>
                        <Button type="link" onClick={onClickToDoOk.bind(null, ID)}>
                            {toDos[ID].isCompleted ?
                            (<StrikethroughOutlined />)
                            :
                            (<CheckSquareTwoTone />)
                            }
                        </Button>
                        {toDos[ID].isCompleted ?
                        (<StyledFont>{toDos[ID].text}</StyledFont>)
                        :
                        toDos[ID].text
                        } 
                        </div>
                        <StyledButton
                            type="link"
                            onClick={deleteToDo.bind(null, ID)}
                        >
                            <CloseSquareTwoTone />
                        </StyledButton>
                    </ToDoListDiv>
                )
            );
    },[toDos]);

    return (
      <>
      <GlobalStyle />
      <P><A href='https://annyhpk.github.io/reactToDo/'>Todo List</A></P>
        <Div>  
            <Form onSubmit={addToDo}>
                <StyledInput
                    ref={inputRef}
                    type="text"
                    maxLength="30"
                    placeholder="write your todo"
                    value={value}
                    allowClear
                    onChange={onChangeValue}/>
                <StyledSubmitButton onClick={addToDo}><EnterOutlined /></StyledSubmitButton>
            </Form>
            <ToDoBack>
                {renderTodo()}
            </ToDoBack>      
        </Div>  
      </>
    );
});

export default Todo;