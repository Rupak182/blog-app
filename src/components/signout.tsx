import {auth} from '@/auth'
import { signOut } from '@/auth'


export default async function Logout() {
    const session =await auth();
  return (
    <div>
      {JSON.stringify(session)};

      <form action={async ()=>{
            "use server"
            await signOut();
      }}>
    <button  className="bg-blue-500 text-white my-4 text-lg font-semibold py-3 rounded-md" >Sign out</button>
    </form>
    </div>
  )
}

