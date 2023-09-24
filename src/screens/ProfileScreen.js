import { useSelector } from 'react-redux';
import '../styles/ProfileScreen.css'
import Nav from '../components/Nav'
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);


    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreenFlex">
                    <div className="profileScreen__info">
                        <img 
                            src="https://tse2.mm.bing.net/th?id=OIP.7DASfuq_r3rOiq4AAs75igAAAA&pid=Api&P=0&w=300&h=300" 
                            alt="" 
                        />
                        <div className="profileScreen__details">
                            <h2>{user.email}</h2>
                            <div className="profileScreen__plans">
                                <h3>Plans</h3>
                                <button 
                                    onClick={() => auth.signOut()}
                                    className="profileScreen__signOut">Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
