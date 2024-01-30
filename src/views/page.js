import Announces from "./Announces"
import { TopBar } from "./TopBar/topBar"
import Welcome from "./Welcome/welcome"
import Course from "./classroom"
import "element-theme-default"

export default function Page(){
    return (
        <div>
            <TopBar/>
            <Welcome/>
            <Announces/>
            <Course/>
        </div>
    )
}