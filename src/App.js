import {useEffect, useState} from 'react';
import 'App.css';

import Container from 'components/Container';
import TaskCreator from 'components/TaskCreator';
import TaskTable from 'components/TaskTable';
import VisibilityControl from 'components/VisibilityControl';

function App() {
    const [tasks, setTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);

    const handleTaskDone = id => {
        const tasksUpdated = tasks.map(task =>
            task.id === id ? {...task, done: !task.done} : task
        );
        setTasks(tasksUpdated);
    };

    const handleClear = () => {
        if (window.confirm('Are you sure you want to deleted it?')) {
            setTasks(tasks => tasks.filter(t => !t.done));
            setShowCompleted(false);
        }
    };

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
    }, []);

    useEffect(() => {
        if (tasks.length) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    return (
        <main className="bg-dark text-white vh-100">
            <Container>
                <TaskCreator setTasks={setTasks} />
                <TaskTable
                    {...{
                        tasks,
                        handleTaskDone,
                        total: tasks.filter(task => !task.done).length
                    }}
                />

                <VisibilityControl
                    {...{
                        showCompleted,
                        setShowCompleted,
                        handleClear
                    }}
                />

                {showCompleted && (
                    <TaskTable
                        {...{
                            tasks,
                            showCompleted,
                            handleTaskDone,
                            total: tasks.filter(task => task.done).length
                        }}
                    />
                )}
            </Container>
        </main>
    );
}

export default App;
