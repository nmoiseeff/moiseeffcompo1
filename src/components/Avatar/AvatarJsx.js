import './AvatarJsx.css'

const AvatarJsx = (props) => {
    const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`

    return (
        <picture>
            <img src={src} alt='seba'/>
            {props.name}
        </picture>
    )
}

export default AvatarJsx