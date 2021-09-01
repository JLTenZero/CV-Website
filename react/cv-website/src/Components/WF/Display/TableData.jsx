const TableData = ({ object }) => {
    return (
        <>
            <td>
                <div className="img-text" id="img-text" align="center">{object.item_name}</div>
            </td>
        </>
    );
}

export default TableData;