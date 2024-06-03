import { Quote } from "../Components/Quote"
import { Signupcomp } from "../Components/Signupcomp"

export const Signup =()=>{
    return <div>
<div className="grid grid-cols-1 lg:grid-cols-2">
    <div>
<Signupcomp type="signup"/>
    </div>
   <div className="none lg:block">
   <Quote></Quote>
   </div>

</div>
    </div>
}