import { createRoot } from 'react-dom/client'
import './tailwind.css'
import FrameworkList from './FrameworkList'
import FrameworkListSearchFilter from './FrameworkListSeacrhFilter'
import ResponsiveText from './ResponsiveText'

createRoot(document.getElementById("root"))
    .render(
      <div classname="card">
        {/* <FrameworkList/> */}
        {/* <FrameworkListSearchFilter/>> */}
        <ResponsiveText/>
        </div>
    )