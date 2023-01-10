import classNames from "classnames"
import Icon from '../icon/icon'
import './style.css'

export const Button = ({ variant, icon, text, onClick }) => {

const buttonClasses = classNames('button', {
    [`button-${variant}`]: variant,
    hasIcon: icon
})

return (
    <button className={buttonClasses} onClick={onClick}>
        {icon && <Icon type={icon} />}
        {text}
    </button>
)}
