import {useEffect, useState} from "react";

const ToggleButton = ({children, onToggle}) => {
    const [active, setActive] = useState()
    const toggle = () => setActive(!active)
    useEffect(() => onToggle&&onToggle(active), [active])
    return <button className={`toggle ${active?'active':''}`} onClick={toggle}>{children}</button>
}
export default ToggleButton