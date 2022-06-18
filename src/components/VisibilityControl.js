const VisibilityControl = ({showCompleted, setShowCompleted, handleClear}) => (
    <div className="d-flex justify-content-between align-items-center my-2 p-2 border-secondary bg-secondary">
        <div className="form-check form-switch">
            <input
                className="form-check-input me-2"
                checked={showCompleted}
                onChange={() => setShowCompleted(!showCompleted)}
                id="showCompleted"
                type="checkbox"
            />{' '}
            <label htmlFor="showCompleted">Show Tasks Done</label>
        </div>
        {showCompleted && (
            <button
                className="btn btn-danger btn-sm rounded-0"
                onClick={handleClear}
            >
                Clear
            </button>
        )}
    </div>
);

export default VisibilityControl;
