import { PAGE } from '@routes/index'
import { SCREEN_PERFORMANCE } from '@utils/constant'
import { Link } from 'react-router-dom'

const AuthScreen = () => {
  return (
    <div className="h-full w-ful">
      <div className="h-full grid grid-cols-2 gap-6">
        <div className="relative">
          <Link to={PAGE['home']} className="logo inline-block px-6 py-4 font-bold text-3xl text-violet-800">
            ZustQ
          </Link>
          <div className="absolute bottom-0 left-0">
            <img className="" src={SCREEN_PERFORMANCE} />
          </div>
        </div>
        <div className="flex items-end pb-10">
          <div className="quotes mr-8">
            <p className="mb-4 text-right">
              <span className="text-xl font-bold">The secret of success in life is for a man to be ready for his opportunity when it comes.</span>
            </p>
            <span className="text-right block italic"> - Benjamin Disraeli</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthScreen
