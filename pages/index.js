import CookieStandAdmin from "@/components/CookieStandAdmin";
import LoginForm from "@/components/LoginForm";
import { useAuth } from '../contexts/auth';

export default function Home() {

  const { user, login } = useAuth();
  
  return (
    <div className="p-4">
      {user ?
                <>
                    <h1>Logged in: {user.email}</h1>
                    <CookieStandAdmin />
                </>
                :
                <LoginForm onLogin={login} />
            }
    </div>
  );
}





