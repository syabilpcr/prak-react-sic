import { createRoot } from 'react-dom/client'
import './tailwind.css'
import FrameworkList from './FrameworkList'
import FrameworkListSearchFilter from './FrameworkListSeacrhFilter'

createRoot(document.getElementById("root"))
    .render(
      <div classname="card">
        {/* <FrameworkList/> */}
        <FrameworkListSearchFilter/>
        </div>
    )