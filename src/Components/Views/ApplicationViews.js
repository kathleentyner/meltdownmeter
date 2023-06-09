import { Route, Routes, Outlet } from "react-router-dom"
import { ReactionForm } from "../Forms/Reaction"
import { EditReaction } from "../Forms/EditReaction"
import { ReactionList } from "../DailyReport/AllDays"
import { Home } from "../DailyReport/Home"
import { Trends } from "../DailyReport/Trends"

export const ApplicationViews = () => {
	return ( 
	<Routes>
		<Route path="/" element={
<>


	<Outlet />
	</>
		}>
	<Route path="reaction" element={ <ReactionForm /> } />
	<Route path="reaction/:reactionId/edit" element={ <EditReaction/> } />
	<Route path="history" element={<ReactionList/>} />
	<Route path="/" element={<Home/>} />
	<Route path="trends" element={<Trends/>} />
	
		</Route>
	</Routes>
	)
}