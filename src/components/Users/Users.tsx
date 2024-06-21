import useActive from '../../hooks/useActive'
import users from '../../Data/users'
import Card from '../Card/Card'
import capitalize from '../../Util/capitalize'
import './Users.css'
import { useRef } from 'react'

interface UsersProp extends React.AllHTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {

};
export default function Users({ ...props }: UsersProp) {
    const userRef = useRef<HTMLParagraphElement>(null);
    const { active, handleClick } = useActive(userRef);

    return (
        <Card header='Users' {...props}>
            <div className="user-container" ref={userRef}>
                {
                    users.map((user, index) => <p
                        id={`${user.id}`}

                        onClick={handleClick}
                        className={active === (user.id).toString() ? "active" : ""}
                        key={`${user.email}+${user.id * (index + 1)}`}

                    >{`${capitalize(user.firstname)} ${capitalize(user.lastname)}`}</p>)

                }
            </div>
        </Card>
    )
};
