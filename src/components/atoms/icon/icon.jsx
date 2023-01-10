import { ReactComponent as Facebook } from '../../../assets/img/facebook.svg'
import { ReactComponent as Google } from '../../../assets/img/google.svg'
import { ReactComponent as GitHub } from '../../../assets/img/github.svg'
import './style.css'

const Icon = ({ type }) => {

    return (
        <>
            {type === 'facebook' && <Facebook />}
            {type === 'google' && <Google />}
            {type === 'github' && <GitHub />}
        </>
    )
}

export default Icon