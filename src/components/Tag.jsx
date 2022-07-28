const styles = {
    borderRadius: "10px",
    width: "auto",
    padding: "10px 15px"
}

const Tag = ({ data, background }) => {
    return (
        <div className="tag my-1 me-2" style={{ ...styles, backgroundColor: background }}>
            {data}
        </div>
    );
}

export default Tag;