export const Link = ({href, text, onClick, ...props}) => {
    return (
        <a href={href} onClick={onClick} {...props}>{text}</a>
    )
}