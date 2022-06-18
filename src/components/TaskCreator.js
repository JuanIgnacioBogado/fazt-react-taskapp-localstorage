import {useState} from 'react';
import {v4} from 'uuid';

const TaskCreator = ({setTasks}) => {
    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (!task.trim()) return;
        const newTask = {
            name: task,
            done: false,
            id: v4()
        };
        setTasks(tasks => [...tasks, newTask]);
        setTask('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="d-flex align-items-center justify-content-between my-2"
        >
            <input
                autoFocus
                onChange={e => setTask(e.target.value)}
                value={task}
                type="text"
                placeholder="Enter a new Task"
                className="form-control rounded-0"
            />
            <button className="btn btn-primary ms-2 rounded-0 w-50" type="submit" disabled={!task.trim()}>
                Save Task
            </button>
        </form>
    );
};

export default TaskCreator;
