import './home.css'
import { useAuth } from '../../firebase';
function Home(){
  const user = useAuth();


  return (
    <div className="container-main home">
      <div className=' col-sm-6 card-custom'>
        <h1>Worrier KeyBoard</h1>
        <h3>Keyboard mastery on steroids</h3>
        <p>{user ? "Welcome" : null} {user?.email}</p>
      </div>
    </div>
  );

}

export default Home