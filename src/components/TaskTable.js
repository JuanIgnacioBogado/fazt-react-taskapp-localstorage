import TaskRow from './TaskRow';

const TaskTable = ({tasks, handleTaskDone, showCompleted, total}) => (
    <table className="table table-dark table-striped table-bordered border-secondary table-hover">
        <thead>
            <tr className="table-primary">
                <th>
                    {!showCompleted
                        ? `Tasks: ${total}`
                        : `Tasks Completed: ${total}`}
                </th>
            </tr>
        </thead>
        <tbody>
            {tasks
                .filter(task => task.done === showCompleted)
                .map(task => (
                    <TaskRow
                        {...{
                            key: task.id,
                            task,
                            handleTaskDone
                        }}
                    />
                ))}
        </tbody>
    </table>
);

TaskTable.defaultProps = {
    showCompleted: false
};

export default TaskTable;
