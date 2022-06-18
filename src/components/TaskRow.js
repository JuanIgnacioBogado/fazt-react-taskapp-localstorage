const TaskRow = ({task: {name, done, id}, handleTaskDone}) => (
    <tr>
        <td
            className="d-flex justify-content-between align-items-center"
            onClick={() => handleTaskDone(id)}
        >
            <label htmlFor={id}>{name}</label>
            <input
                id={id}
                type="checkbox"
                checked={done}
                className="form-check-input"
            />
        </td>
    </tr>
);

export default TaskRow;
