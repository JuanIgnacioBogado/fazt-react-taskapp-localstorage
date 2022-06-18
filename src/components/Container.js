const Container = ({children}) => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 mx-auto">{children}</div>
            </div>
        </div>
    );
};

export default Container;
