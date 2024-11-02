import Toggle from '../components/Toggle'
import { useDispatch, useSelector } from '../store'
import { setBlockAll } from '../store/slices/settingsSlice'
import './Popup.css'

export const Popup = () => {
  const dispatch = useDispatch()

  const blockAll = useSelector((state) => state.settings.blockAll)

  return (
    <main className="p-4 mx-auto my-0 text-center">
      <h3 className="mb-5 text-2xl text-rose-500">Barzakh</h3>

      <div className="flex flex-col items-center justify-center">
        <Toggle
          checked={blockAll}
          label="Block all images by default"
          onChange={(value) => {
            dispatch(setBlockAll(value))
          }}
        />
      </div>
    </main>
  )
}

export default Popup
