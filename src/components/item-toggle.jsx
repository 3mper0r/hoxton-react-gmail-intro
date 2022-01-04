function Item_Toggle() {
    return (
        <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input id="hide-read" type="checkbox" checked={false} />
        </li>
    )
}

export default Item_Toggle